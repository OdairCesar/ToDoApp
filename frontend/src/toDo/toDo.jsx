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

        this.refhesh()
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refhesh())
    }

    handleRemove(toDo){
        axios.delete(`${URL}/${toDo._id}`)
            .then(resp => this.refhesh())
    }

    refhesh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ 
                ...this.state, 
                description: '', 
                list: resp.data
            }))
    }

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
                    handleAdd={this.handleAdd} />
                <ToDoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )  
    }
}