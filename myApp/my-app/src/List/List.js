import React, { Fragment, useState } from 'react'
import Button from '../Button/Button'
import './List.css'
import check from './img/check.svg'
import checked from './img/checked.svg'

const List = () => {
    const [List,setList] = useState([
        {name:"hacer tarea"},
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
            <div className="display" >
                <input type="text" onChange={(event)=> handlerChange(event)} value={task} />
                <Button handlerClick={addTask} text="Add" />
            </div>
            <div>
                <ul className="dsp" >
                    {List.map((todo)=>(
                        <div key={todo.id} className="list-todo" >
                            <h3>{todo.name}</h3>
                            <span onClick={()=>handlerChecked(todo.id)} >
                                <img src={todo.checked ? checked : check} />
                            </span>
                            <span className="remove-todo" onClick={()=>handlerRemove(todo.id)} >x</span>
                        </div>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default List;