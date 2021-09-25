import React, { Component } from "react";

import PageHeader from '../template/pageHeader'
import ToDoForm from './toDoForm'
import ToDoList from './toDoList'

export default class ToDo extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Desafios'></PageHeader>
                <ToDoForm></ToDoForm>
                <ToDoList></ToDoList>
            </div>
        )  
    }
}