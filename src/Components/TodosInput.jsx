import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskFailure, addTaskRequest, addTaskSuccess } from '../Redux/action'

const TodosInput = () => {
const [task,setTask]=useState("")
const dispatch=useDispatch()



const handleAdd=()=>{
if(task){
    const payload={
        title:task,
        status:false,
    }

   dispatch(addTaskRequest())
    axios.post("http://localhost:8080/todos",payload).then(r=>{
    dispatch(addTaskSuccess(r.data))
    }).catch(e=>{
    dispatch(addTaskFailure(e))
    })
}
}

  return (
    <div>
      <input type="text" size={30} onChange={e=>setTask(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodosInput
