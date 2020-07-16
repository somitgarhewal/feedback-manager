import React from 'react';
import { Link } from 'react-router-dom'

const AdminHome = () => {
    
    return(
        <div className="container bg-dark">
            <div className= "row">
                <div className="col-6 btn-group-vertical m-3" >
                    <Link to='/addEmployee' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-success rounded m-3" >Add New Employee </button>    
                    </Link>    
                    <Link to='/viewEmployee' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-primary rounded m-3" >View Employee</button>
                    </Link> 
                    <Link to='/updateEmployee' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-warning rounded m-3" >Update Employee Details</button>
                    </Link>
                    <Link to='/deleteEmployee' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-danger rounded m-3" >Delete Employee</button>
                    </Link>
                </div>
                <div className="col-5 btn-group-vertical m-3" >  
                    <Link to='/viewPerformance' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-info rounded m-3" >View Performance Review</button>
                    </Link> 
                    <Link to='/assignEmployee' style={{color: 'inherit',  textDecoration: 'none' }}>
                        <button type='button' className="btn btn-outline-warning rounded m-3" >Assign Employee</button>
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}
export default AdminHome;