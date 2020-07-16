import { ADD_EMPLOYEE, LOGIN_USER, GET_ALL_USER, UPDATE_USER, DELETE_USER, ASSIGN_EMPLOYEE, DE_ASSIGN_EMPLOYEE } from '../types'
const initialState = {
    activeUser: {person:null},
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            const employeeRef = [...state.data]
            employeeRef.push(action.payload.data)
            console.log(employeeRef);

            return {
                ...state,
                data: employeeRef
            }
        case LOGIN_USER:
            return {
                ...state,
                activeUser: action.payload
            }
        case GET_ALL_USER :
            return{
                ...state,
                data: action.payload
            } 
        case UPDATE_USER :
            return{
                ...state,
                data: action.payload
            } 
        case DELETE_USER :
            const deleteDataRef = [...state.data]             
            return {
              ...state,
              data : deleteDataRef.filter(item => item._id !== action.payload)
            }
        
        case ASSIGN_EMPLOYEE :
            return{
                ...state,
                data: action.payload
            }              
        case DE_ASSIGN_EMPLOYEE :
            var activeUserRef = state.activeUser
            let activeUserRef1= {person:{}}
            activeUserRef1.person = action.payload.find(item => item._id == activeUserRef.person._id)
            return{
                ...state,
                data: action.payload,
                activeUser: activeUserRef1
            }          
        default:
            return state;
    }
}
export default reducer