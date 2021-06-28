import React, {useState} from 'react'
import TodoForm          from './TodoForm';
import Todo              from './Todo';
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return null;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return null;
        }
        setTodos(items=>items.map(item=>item.id===todoId? newValue: item))
    }

    const removeTodo = id => {
        const removeArray = todos.filter(todo =>todo.id!==id);
        setTodos(removeArray);
    }


    return (
        <div>
            <div className="top-panel edit">
                <h1 className="plan-today">Plan Today</h1>
                <TodoForm onSubmit={addTodo} btnPlaceholder={"Add Todo"} btnText={"Add Todo"}/>
            </div>
            <div className="todo-lists-wrapper">
                <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
            </div>
        </div>
    )
}

export default TodoList
