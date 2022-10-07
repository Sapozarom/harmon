import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { func } from 'prop-types';
// import { set } from 'core-js/core/dict';

const LOCAL_STAORAGE_KEY = 'todoApp.todos'
function App() {
    const [todos, setTodos] =  useState([]);
    const todoNameRef = useRef();


    useEffect(() =>{
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STAORAGE_KEY));
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() =>{
        localStorage.setItem(LOCAL_STAORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos =[...todos]
        console.log(id)
        console.log(newTodos)

        const todo = newTodos.find(todo => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newTodos)
        
    }

    function handleAddToDo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id:uuidv4(), name: name, completed:false}]
        })
        
    }

    function clearTodos() {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }
        return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddToDo}>Add Todo</button>
            <button onClick={clearTodos}>Clear list</button>
            <div>0 left to do</div>
        </>
        )
    }


export default App