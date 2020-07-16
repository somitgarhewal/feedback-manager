import React, {useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux';
import { assignEmployee } from '../../../redux/actions/adminActions'

const AssignEmployee = (props) => {
   const [selectedEmployee, setSelectedEmployee] = useState("")
   const [isView, setIsView] = useState(false)
   const [id, setId] = useState("")
   const [userName, setUserName] = useState("")

   const handleAssign = () => {
    console.log(props)
    const assigningData = {id:id, username:userName};
    props.assignEmployee(selectedEmployee._id, assigningData)
    alert("user assigned")
   }
    return (
        <div className="container-fluid p-3 pb-5 text-center bg-dark">
            <div className='row d-flex justify-content-center '>
                <FormControl className=' mt-5 bg-light w-75  '>
                <NativeSelect defaultValue='null' onChange={(e)=>setSelectedEmployee(props.data.find((item)=>item.name==e.target.value))}>
                        <option value=''> select Employee</option>
                        {props.data.map((emp, i) => <option key={i} value ={emp.name}>{emp.name} </option>)}
                    </NativeSelect>
                </FormControl>
            </div>
            <button className="btn btn-primary m-4" onClick={(e)=>setIsView(true)}>Assign Employee</button>
            {!isView ? " " :
            <div className="card col-md-3 bg- secondary mx-auto pt-3 ml-3 mr-3 mb-3 mt-3 my-auto border border-warning rounded m-lg-2 float-center text-center" >
            <div className="card-body">
              <h5 className="card-title">Name : {selectedEmployee.name}</h5>
              <h5 className="card-title">Id : {selectedEmployee.id}</h5>
              <input type="text" className="m-2" placeholder="emp id to be assigned" onChange={(event) => setId(event.target.value)} /><br />
              <input type="text" className="m-2" placeholder="emp username to be assigned" onChange={(event) => setUserName(event.target.value)} /><br />
              <button className="btn btn-primary m-4" onClick={()=>handleAssign()} >Assign Employess</button>
             
            </div>
          </div>
            }
        </div>
    )
}
 
const mapDispatchToProps = {assignEmployee}
const mapStateToProps = (state) => {
    return {
        data: state.data
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AssignEmployee);