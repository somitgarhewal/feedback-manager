import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux';
import { updateUser } from '../../../redux/actions/adminActions'

const UpdateEmployee = (props) => {
    //  const [selectedEmployeeName, setSelectedEmployeeName] = useState('')
    const [selectedEmployee, setSelectedEmployee] = useState({
        assignedEmployees: null,
        id: null,
        name: null,
        password: null,
        reviews: null,
        type: null,
        username: null,
        _id: null
    })
    const [selectedEmployeeName, setSelectedEmployeeName] = useState("")
    const [selectedEmployeeUsername, setSelectedEmployeeUsername] = useState("")
    const [selectedEmployeeId, setSelectedEmployeeId] = useState("")
    const [selectedEmployeePassword, setSelectedEmployeePassword] = useState("")
    const [prevSelected, setPrevSelected] = useState(selectedEmployee)

    useEffect(() => {
        if (prevSelected !== selectedEmployee) {
            setSelectedEmployeeName(selectedEmployee.name)
            setSelectedEmployeeUsername(selectedEmployee.username)
            setSelectedEmployeeId(selectedEmployee.id)
            setSelectedEmployeePassword(selectedEmployee.password)
            setPrevSelected(selectedEmployee)
        }
    });

    const handleUpdate = () => {
        const updatedData = { name: selectedEmployeeName, id: selectedEmployeeId, username: selectedEmployeeUsername, password: selectedEmployeePassword }
        props.updateUser(selectedEmployee._id, updatedData)
        alert("user Updated")   
    }

    return (

        <div className="container-fluid p-3 bg-dark">
            <div className='row d-flex justify-content-center '>
                <FormControl className=' mt-5 bg-light w-75  '>
                    <NativeSelect defaultValue='null' onChange={(e) => setSelectedEmployee(props.data.find((item) => item.name == e.target.value))}>
                        <option value=''> select Employee </option>
                        {props.data.map((emp, i) => <option key={i} value={emp.name}>{emp.name} </option>)}
                    </NativeSelect>
                </FormControl>
            </div>

            <div className="form-group container p-3 ml-lg-5 row ">
                <div className="col-lg-4"></div>
                <form className="text-white text-center  border rounded">
                    <div className="text-right pl-5 pr-5">

                        <label className="float-center">Name :</label>
                        <input type="text" className="m-2" placeholder="name" value={selectedEmployeeName} onChange={(e) => setSelectedEmployeeName(e.target.value)} /><br />
                    </div>

                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">User Name :</label>
                        <input type="text" className="m-2" placeholder="user name" value={selectedEmployeeUsername} onChange={(e) => setSelectedEmployeeUsername(e.target.value)} /><br />
                    </div>
                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">Id :</label>
                        <input type="text" className="m-2" placeholder="id" value={selectedEmployeeId} onChange={(e) => setSelectedEmployeeId(e.target.value)} /><br />
                    </div>
                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">Password :</label>
                        <input type="password" className="m-2" placeholder="password" value={selectedEmployeePassword} onChange={(e) => setSelectedEmployeePassword(e.target.value)} /><br />
                    </div>
                    <button type='button' className="m-4" onClick={() => handleUpdate()}> Update Employee </button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = { updateUser }


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee);