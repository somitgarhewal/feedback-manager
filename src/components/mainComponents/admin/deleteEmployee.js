import React, {useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux';
import { deleteUser } from '../../../redux/actions/adminActions'

const DeleteEmployee = (props) => {
    const [selectedEmployee, setSelectedEmployee] = useState("")

    const handleDelete = () => {
        console.log(props)
        console.log(selectedEmployee._id)
        props.deleteUser(selectedEmployee._id)
        alert(selectedEmployee.name + " deleted")
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
            <button className="btn btn-primary m-4" onClick={()=>handleDelete()}>Delete Employee</button>
        </div>
    )
}

const mapDispatchToProps = {deleteUser}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteEmployee);