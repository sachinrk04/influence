import React from 'react'

const TodoItem = (props) => {
    return (
        <li onClick={props.clicked}>{props.item.text}</li>
    )
}

export default TodoItem
