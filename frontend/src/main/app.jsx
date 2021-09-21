import React from 'react'

import ToDo from '../toDo/toDo'
import About from '../about/about'
import Menu from '../template/menu'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

export default function App(props){
    return(
        <div className='container'>
            <Menu></Menu>
            <ToDo></ToDo>
            <About></About>
        </div>
    )
}