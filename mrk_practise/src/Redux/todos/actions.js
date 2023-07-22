import axios from "axios";
import { ADD_TODO_SUCCESS, DELETE_TODO, GET_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST, UPDATE_TODO,  } from "./actionTypes";



export const getTodos=(dispatch)=>{
    dispatch({type: TODO_REQUEST})
    axios.get(`http://localhost:4040/todos`).then((res)=>{
        // console.log(res);
    dispatch({type: GET_TODO_SUCCESS, payload:res.data})
    }).catch((err)=>{
        console.log(err.message);
        dispatch({type: TODO_FAILURE})
    })
}

export const addTodos=(todo)=>(dispatch)=>{
    dispatch({type: TODO_REQUEST})
    axios.post(`http://localhost:4040/todos`,todo).then((res)=>{
    dispatch({type: ADD_TODO_SUCCESS,payload:todo})
    }).catch((err)=>{
        console.log(err);
    })
}

export const UpdateTodos=(id,status)=>(dispatch)=>{
    dispatch({type: TODO_REQUEST})
    axios.patch(`http://localhost:4040/todos/${id}`,{status}).then((res)=>{
        dispatch({type: UPDATE_TODO})
    }).catch((err)=>{
        console.log(err);
    })
}

export const DeleteTodo=(id)=>(dispatch)=>{
    dispatch({type: TODO_REQUEST})
    axios.delete(`http://localhost:4040/todos/${id}`).then((res)=>{
        // console.log(res);
    dispatch({type: DELETE_TODO})
    }).catch((err)=>{
        console.log(err);
    })
}