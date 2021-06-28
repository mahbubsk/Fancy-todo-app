import React, {useState} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = (e) =>{
        setInput(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })
        setInput('')
    } 
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder={props.btnPlaceholder} 
                className={props.btnText==='Add Todo' ? "todo-input edit" : "todo-input"}
                name="text"
                value={input}
                onChange={handleChange}
            />
            <button className={props.btnText==='Add Todo' ? "todo-button edit" : "todo-button"}>{props.btnText}</button>
        </form>
    )
}

export default TodoForm
