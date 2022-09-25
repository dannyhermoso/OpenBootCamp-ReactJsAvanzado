import React, { useState } from 'react'
import useList from '../hooks/useList'

const TaskList = () => {

    const tasks = useList([])

    const [newTask, setNewTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        tasks.push(newTask)
        setNewTask('')
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }
    
    const handleCLearAll = (e) => {
        e.preventDefault()
        tasks.clearAll()
    }


    const handleSortList = () => {
        tasks.sortList();
        setNewTask();
      };
  
      const handleReverse = () => {
        tasks.reverse();
        setNewTask();
      };

    

    return(
        <>
            <h1>Task list</h1>
            <form onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder='New task...' type='text'></input>
                <button type='submit'>Push task</button>
            </form>
            {tasks.isEmpty() ?
            (<p>Task list is empty</p>)
            :
            tasks.value.map((el, index) => 
            (
                <li key={index}>
                    <input type='checkbox'
                    onClick={() => tasks.remove(index)}
                    checked={false}
                    />
                    {el}
                </li>
            )
            )
        }
        <button onClick={handleCLearAll}>Clear all</button>
        <button type="button" onClick={handleSortList}>Sort Tasks</button>
        <button type="button" onClick={handleReverse}>Reverse Tasks</button>
        </>
    )
}

export default TaskList