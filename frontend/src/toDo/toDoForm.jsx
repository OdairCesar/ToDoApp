import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default function ToDoForm(props){
    return(
        <div role='form' className='toDoForm'>
            <Grid cols='12 9 10'>
                <input 
                    id='description' 
                    className="form-control"  
                    placeholder='Adicione uma tarefa'/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'/>
            </Grid>
        </div>
    )
}