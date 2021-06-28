import React, {useState} from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';




function Todo({todos, removeTodo,updateTodo}) {


    const [edit, setEdit] = useState({
        id:null,
        value:''
    })


    const submitUpdate = value => {
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:''
        })
    }


    if(edit.id){
        return <TodoForm btnPlaceholder={"Update Todo"} btnText={"Update Todo"} edit={edit} onSubmit={submitUpdate}/>

        
    }


    return todos.map((todo,index)=>(
                <div className={todo.isCompleted ? 'todo-row completed' : 'todo-row'}
                key={index}
                >
                    <div key={todo.id} >
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine onClick={()=>removeTodo(todo.id)}/>
                        <TiEdit onClick={()=>setEdit({id: todo.id, value: todo.text})}/>
                    </div>
                </div>
    ))
}

export default Todo
