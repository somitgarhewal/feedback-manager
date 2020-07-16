import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../../redux/actions/adminActions'

const EditReview = (props) =>{
    const [data, setData] = useState(props.selectedEmployee.reviews)

    const handleSubmit = () => {
        const updatedData = {reviews:data}
        props.updateUser(props.selectedEmployee._id, updatedData)
        alert("review updated")
        props.setIsView(false)
    }

    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="form-group container p-3 ml-lg-5 row ">
                <div className="col-lg-4"></div>
                <form className="text-white text-center  border rounded">
                    <div className="text-right pl-5 pr-5">
                        <input type="text" className="m-2" value={data} onChange={(event)=>setData(event.target.value)}/><br />
                    {console.log(props)}
                    </div>
                    <button type='button' className="m-4" onClick={()=> handleSubmit()}> Submit </button>
                </form>
            </div>
        </div>
    )
}

 const mapDispatchToProps = {updateUser}

const mapStateToProps = (state) => {
    return {
        currentUser: state.activeUser,
        data: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);