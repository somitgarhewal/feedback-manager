import React, {useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux';

const ViewEmployee = (props) => {
    const [selectedEmployeeName, setSelectedEmployeeName] = useState('')
    const [selectedEmployee, setSelectedEmployee] = useState('')
  
        //const employee = props.data.filter((item)=>item.name==selectedEmployee)       
   

    return (
        <div className="container-fluid p-3 pb-5 text-center bg-dark">
            <div className='row d-flex justify-content-center '>
                <FormControl className=' mt-5 bg-light w-75  '>
                    <NativeSelect defaultValue='' onChange={(e)=>setSelectedEmployeeName(e.target.value)}>
                        <option value='please select the one'> select Employee</option>
                        {props.data.map((emp, i) => <option key={i} value ={emp.name}>{emp.name} </option>)}
                       
                    </NativeSelect>
                </FormControl>
                
                {console.log("emp",selectedEmployee)}
            </div>
            <button className="btn btn-primary m-4" onClick={()=>setSelectedEmployee(props.data.find((item)=>item.name==selectedEmployeeName))}>View Employee</button>
            {!selectedEmployee ? " " :
            <div className="card col-md-3 bg- secondary mx-auto pt-3 ml-3 mr-3 mb-3 mt-3 my-auto border border-warning rounded m-lg-2 float-center text-center" >
            <div className="card-body">
              <h5 className="card-title">Name : {selectedEmployee.name}</h5>
              <h5 className="card-title">Id : {selectedEmployee.id}</h5>
              <h5 className="card-title">User Type : {selectedEmployee.type}</h5>
            </div>
          </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
  }
  
  export default connect(mapStateToProps)(ViewEmployee);