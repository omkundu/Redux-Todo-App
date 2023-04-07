import * as types from "./actionTypes"

// actionCreator functions

const getTaskRequest=()=>{
   return {
    type:types.GET_TODOS_REQUEST
   }
} 

const getTaskSuccess=(payload)=>{
    return {
     type:types.GET_TODOS_SUCCESS,
     payload
    }
 } 


 const getTaskFailure=()=>{
    return {
     type:types.GET_TODOS_FAILURE
    }
 } 


 
const addTaskRequest=()=>{
   return {
    type:types.ADD_TODOS_REQUEST
   }
} 

const addTaskSuccess=(payload)=>{
    return {
     type:types.ADD_TODOS_SUCCESS,
     payload
    }
 } 


 const addTaskFailure=()=>{
    return {
     type:types.ADD_TODOS_FAILURE
    }
 } 



 export {getTaskRequest,getTaskSuccess,getTaskFailure,addTaskRequest,addTaskSuccess,addTaskFailure }