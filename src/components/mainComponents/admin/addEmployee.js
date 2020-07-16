import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addEmployee } from '../../../redux/actions/adminActions'

const AddEmployee = (props) =>{

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        const newEmployeeData = { name:name, id:id, type:"employee", username:userName, password:password, assignedEmployee:[], reviews:"" }
        props.addEmployee(newEmployeeData)
        alert("Employee Added");
        setName("");
        setUserName("")
        setId("")
        setPassword("")
    }

    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="form-group container p-3 ml-lg-5 row ">
                <div className="col-lg-4"></div>
                <form className="text-white text-center  border rounded">
                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">Name :</label>
                        <input type="text" className="m-2" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} /><br />
                    </div>

                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">User Name :</label>
                        <input type="text" className="m-2" placeholder="user name" value={userName} onChange={(event) => setUserName(event.target.value)} /><br />
                    </div>
                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">Id :</label>
                        <input type="text" className="m-2" placeholder="id" value={id} onChange={(event) => setId(event.target.value)} /><br />
                    </div>
                    <div className="text-right pl-5 pr-5">
                        <label className="float-center">Password :</label>
                        <input type="password" className="m-2" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
                    </div>
                    <button type='button' className="m-4" onClick={()=>{handleClick()}}> Add Employee </button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = {addEmployee}

const mapStateToProps = (state) => {
    return {
        currentUser: state.activeUser,
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);