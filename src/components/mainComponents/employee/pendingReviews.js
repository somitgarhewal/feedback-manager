import React, { useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import { connect } from 'react-redux';
import { updateUser } from '../../../redux/actions/adminActions'
import { deAssignEmployee } from '../../../redux/actions/adminActions'

const PendingReviews = (props) => {

    const [selectedEmployeeName, setSelectedEmployeeName] = useState('')
    const [selectedEmployee, setSelectedEmployee] = useState('')
    const [review, setReview] = useState('')

    const handleSubmitReview = () => {
        const updatedReview = selectedEmployee.reviews + " " + review
        const data={reviews: updatedReview}
        props.updateUser(selectedEmployee._id, data)
        props.deAssignEmployee(props.activeUser.person._id, {username:selectedEmployee.username})
        setSelectedEmployee("")
        console.log(props)
    }

    return (
        <div className="container-fluid p-3 pb-5 text-center bg-dark">
            {props.activeUser.person.assignedEmployees.length ?
                <div>
                    <div className='row d-flex justify-content-center '>
                        <FormControl className=' mt-5 bg-light w-75  '>
                            <NativeSelect defaultValue='' onChange={(e) => setSelectedEmployeeName(e.target.value)}>
                                <option value='please select the one'> select Employee</option>
                                {props.activeUser.person.assignedEmployees.map((emp, i) => <option key={i} value={emp.username}>{emp.username} </option>)}
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <button className="btn btn-primary m-4" onClick={() => setSelectedEmployee(props.data.find((item) => item.username == selectedEmployeeName))}>Add Review</button>
                {console.log(selectedEmployee)}
                </div>
                : <h1 className="text-warning">There is no pending Reviews</h1>
            }
            {selectedEmployee ?
            <div>
                <input type="text" className="m-2" placeholder="review" value={review} onChange={(e) => setReview(e.target.value)} /><br />
                <button className="btn btn-primary m-4" onClick={() => handleSubmitReview()}>Submit Review</button>

            </div>
            :console.log(props)}
        </div>
    )
}

const mapDispatchToProps = { updateUser, deAssignEmployee }

const mapStateToProps = (state) => {
    return {
        data: state.data,
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingReviews);