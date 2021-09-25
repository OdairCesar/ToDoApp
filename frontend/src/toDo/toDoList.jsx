import React from 'react'

import IconButton from '../template/iconButton'

export default function TodoList (props) {

    function renderRows() {
        const list = props.list || []

        return list.map(toDo => (
            <tr key={toDo._id}>
                <td className={toDo.done ? 'markedAsDone' : ''}>{toDo.description}</td>
                <td>
                    <IconButton 
                        style='success' 
                        icon='check' 
                        hide={toDo.done}
                    />
                    <IconButton 
                        style='warning' 
                        icon='undo' 
                        hide={!toDo.done} 
                    />
                    <IconButton 
                        style='danger'  
                        icon='trash-o' 
                        hide={!toDo.done}
                        onClick={() => props.handleRemove(toDo)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}