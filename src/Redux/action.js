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


 export {getTaskRequest,getTaskSuccess,getTaskFailure}