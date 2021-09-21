import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about/about'
import ToDo from '../toDo/toDo'

export default function Routes(props){
    return(
        <Router history={hashHistory}>
            <Route path='/todos' component={ToDo}/>
            <Route path='/sobre' component={About}/>
            <Redirect from='*' to='/todos' />
        </Router>
    )
}