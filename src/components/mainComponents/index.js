import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Home extends Component {
    state ={
        activeUser:null
    }
    render(){

        const img = require('../../assets/images/bg1.png');
        return(
            <div className="container text-center text-danger" style= {{
                width: '95%',
                height: '600px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover'
            }}>
                <div className ="container h-100 d-flex justify-content-center">
                    <div className="my-auto">
                        <div className="pt-5 font-weight-bold">
                            <h1>Hello</h1> 
                            {!this.state.activeUser?
                            <Link to={`/loginPage`}>  
                                <button className="btn btn-warning"> Get Started </button> 
                            </Link>:
                            <h1>{this.state.activeUser}</h1> }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.activeUser,
        data: state.data        
    }
  }
  
  export default connect(mapStateToProps)(Home);