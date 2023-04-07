import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getTaskFailure, getTaskRequest, getTaskSuccess } from '../Redux/action'
import TodosInput from './TodosInput'
const Todos = () => {

    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.todos)
    

    const getTask=()=>{

        dispatch(getTaskRequest())
            axios.get('http://localhost:8080/todos').then((r)=>{
               dispatch(getTaskSuccess(r.data))
              console.log(r.data)
            }).catch(e=>{
                // console.log(err)
                dispatch(getTaskFailure(e))
            });
    };

    console.log(todos)

     useEffect(()=>{
        getTask()
    },[]);


  return (
    <div>
      <h3>Todos</h3>
      <TodosInput/>
      {
        
        todos.length>0&&todos.map(item=>{
            return <div key={item.id}> 
                {item.title} - {item.status?"True":"False"}
            </div>
        })
      }
    </div>
  )
}

export default Todos
