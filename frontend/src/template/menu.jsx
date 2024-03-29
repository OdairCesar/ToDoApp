import React from "react";

export default function Menu(props){
    return(
        <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <a href="#" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i>ToDoApp
                    </a>
                </div>

                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/todos">Tarefas</a></li>
                        <li><a href="#/sobre">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}