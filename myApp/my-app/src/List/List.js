import React, { Fragment, useState } from 'react';
import './List.css';
import check from './img/check.svg';
import checked from './img/checked.svg';

const List = () => {
    const [List,setList] = useState([
        {name:"Write your to do list"},
    ])
    const [task,setTask] = useState("")

    const handlerChange = (event) => {
        setTask(event.target.value)
    }

    const addTask = () => {
        setList(prevState => [
            ...prevState,
            {
                name: task,
                 id: Math.random(),
                 checked: false,
            }])
        setTask("")
    }

    const handlerRemove = (id) =>{
        const newList = List.filter((todo)=>todo.id !== id)
        setList(newList)
    }

    const handlerChecked = (id) =>{
        const newList = List.map((task)=>{
            if (task.id === id) {
                const newTask = {
                    name: task.name,
                    id: task.id,
                    checked: !task.checked,
                }
                return newTask
            }return task
        })
        setList(newList)
    }

    return(
        <Fragment>
            <section className='list--section'>
                <h2>To Do List</h2>
                <div className="display" >
                    <input type="text" onChange={(event)=> handlerChange(event)} value={task} />
                    <button onClick={addTask} className='btn--list' type='sumbit'>Add</button>
                </div>
                <div>
                    <ul className="dsp" >
                        {List.map((todo)=>(
                            <div key={todo.id} className="list-todo" >
                                <h3>{todo.name}</h3>
                                <span onClick={()=>handlerChecked(todo.id)} >
                                    <img src={todo.checked ? checked : check} alt='checked'/>
                                </span>
                                <span className="remove-todo" onClick={()=>handlerRemove(todo.id)}>x</span>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </Fragment>
    )
}

export default List;