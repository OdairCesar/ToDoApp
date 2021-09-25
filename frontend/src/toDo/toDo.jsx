import React, { Component } from "react";
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ToDoForm from './toDoForm'
import ToDoList from './toDoList'

const URL = 'http://localhost:3003/api/todos'

export default class ToDo extends Component{
    constructor(props){
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refhesh()
    }

    /* Handles com utilização do backend*/
    handleAdd(){
        const description = this.state.description

        axios.post(URL, {description})
            .then(resp => this.refhesh())
    }

    handleRemove(toDo){
        axios.delete(`${URL}/${toDo._id}`)
            .then(resp => this.refhesh(this.state.description))
    }

    handleMarkAsDone(toDo){
        axios.put(`${URL}/${toDo._id}`, { ...toDo, done: true})
            .then(resp => this.refhesh(this.state.description))
    }

    handleMarkAsPending(toDo){
        axios.put(`${URL}/${toDo._id}`, { ...toDo, done: false})
            .then(resp => this.refhesh(this.state.description))
    }

    handleSearch(){
        this.refhesh(this.state.description)
    }

    handleClear(){
        this.refhesh()
    }

    refhesh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ 
                ...this.state, 
                description, 
                list: resp.data
            }))
    }

    /* Handles sem utilização do backend*/
    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    render(){
        return(
            <div>
                <PageHeader 
                    name='Tarefas' 
                    small='Desafios' />
                <ToDoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <ToDoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )  
    }
}