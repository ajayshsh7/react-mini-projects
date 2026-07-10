import { useState } from 'react'


function Todo(){
    const [newItem, setNewItem] = useState("");
    const [todo, setTodo] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        if (newItem.trim() === "") return;

        setTodo(currentTodo => {
            return [
                ...currentTodo, 
                {
                    id: crypto.randomUUID(), title: newItem, completed: false
                },
            ]
        })
        setNewItem("");
    }

    function toggleTodo(id, completed){
        setTodo(currentTodo =>{
            return currentTodo.map(todos =>{
                if(todos.id === id) {
                    return {...todos, completed}
                }
                return todos
            })
        })
    }

    function deleteTodo(id){
        setTodo(currentTodo =>{
            return currentTodo.filter(todos => todos.id !== id)
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className='form'>
                <label htmlFor="item"> Todo List</label>
                <input value={newItem} 
                onChange={e => setNewItem(e.target.value)}
                type="text" id='item' />
            </div>
            <button className='btn'>Add</button>
        </form>
        <h1>My Todos</h1>
        <ul>
            {todo.map(todos =>{
                return <li key={todos.id} style={{ listStyleType: "none" }}>
                    <label htmlFor="">
                        <input type="checkBox" checked={todos.completed} 
                        onChange={e => toggleTodo(todos.id, e.target.checked)}/>
                        {todos.title}
                    </label>
                    <button onClick={() =>deleteTodo(todos.id)}>Delete</button>
                </li>
            })}
        </ul>
        </>
    );
}

export default Todo;