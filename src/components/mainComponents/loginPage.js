import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/adminActions'
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    
    const handleLogin = () => {
        var loginData = { userName: userName, password: password, userType: userType }
        props.loginUser(loginData); 
    }
    return (
        <div className="container-fluid pt-5 pb-5 bg-dark">
            <div className="form-group text-center ">
                <form>
                    <input type="text" placeholder="user name" onChange={(event) => setUserName(event.target.value)} /><br /><br />
                    <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} /><br /><br />
                    <div className="btn-group btn-group-toggle text-white" data-toggle="buttons">
                        <div className="col-6">
                            <input type="radio" name="userType" id="admin" onClick={(event) => setUserType(event.target.id)} /> admin
                        </div>
                        <div className="col-6">
                            <input type="radio" name="userType" id="employee" onClick={(event) => setUserType(event.target.id)} /> employee
                        </div>{console.log("active user",props.activeUser)}
                        <div className="col-6"></div>
                    </div><br /><br />
                    <button type='button' className="text-danger" onClick={() => {handleLogin()}}> Submit </button>
                </form>
                <div>
                    {props.activeUser.person ? 
                        (props.activeUser.person.type === "admin" ? 
                        <Redirect to= '/adminHome' /> : <Redirect to= '/pendingReviews' />)
                        : " "
                     }
                </div>    
            </div>
        </div>
    )
}

const mapDispatchToProps = {loginUser}

const mapStateToProps = (state) => {
    return {
     activeUser: state.activeUser
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);