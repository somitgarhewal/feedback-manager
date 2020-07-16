import { ADD_EMPLOYEE, LOGIN_USER, GET_ALL_USER, UPDATE_USER, DELETE_USER, ASSIGN_EMPLOYEE, DE_ASSIGN_EMPLOYEE } from "../types";
import axios from 'axios'

export const addEmployee = (newEmployeeData) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://www.localhost:5000/api/addUser`, newEmployeeData);
      dispatch(addEmployees(response.data));
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const addEmployees = (data) => ({
    type: ADD_EMPLOYEE,
    payload:data
  })



export const loginUser = (loginData) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://www.localhost:5000/api/loginUser`, loginData);
      dispatch(loginUsers(response.data));
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
  
export const loginUsers = (data) => ({
    type: LOGIN_USER,
    payload:data
})  


export const getAllUser = () => {
  return async dispatch => {
    try{
      const response = await axios.get('http://localhost:5000/api/getUser')
      dispatch(getAllUsers(response.data))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const getAllUsers = (data) => ({
  type: GET_ALL_USER,
  payload:data
})  


export const updateUser = (id,updatedData) => {
  return async dispatch => {
    try{
      const response = await axios.put(`http://localhost:5000/api/updateUser/${id}`, updatedData)
      const response1 = await axios.get('http://localhost:5000/api/getUser')
      dispatch(updateUsers(response1.data))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const updateUsers = (data) => ({
  type: UPDATE_USER,
  payload:data
})  


export const deleteUser = (id) => {
  return async dispatch => {
    try{
      const response = await axios.delete(`http://localhost:5000/api/deleteUser/${id}`)
      console.log(response)
      dispatch(deleteUsers(id))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const deleteUsers = (data) => ({
  type: DELETE_USER,
  payload:data
})  

export const assignEmployee = (id,updatedData) => {
  return async dispatch => {
    try{
      const response = await axios.put(`http://localhost:5000/api/assignEmployee/${id}`, updatedData)
      const response1 = await axios.get('http://localhost:5000/api/getUser')
      console.log("action",response1)
      dispatch(assignEmployees(response1.data))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const assignEmployees = (data) => ({
  type: ASSIGN_EMPLOYEE,
  payload:data
})  

export const deAssignEmployee = (id, updatedData) => {
  return async dispatch => {
    try{
      const response = await axios.put(`http://localhost:5000/api/deAssignEmployee/${id}`, updatedData)
      const response1 = await axios.get('http://localhost:5000/api/getUser')
      console.log("action",response1)
      dispatch(deAssignEmployees(response1.data))
    }
    catch(error) {
      console.log("error occured: ",error);
    }
  }
}
export const deAssignEmployees = (data) => ({
  type: DE_ASSIGN_EMPLOYEE,
  payload:data
})  