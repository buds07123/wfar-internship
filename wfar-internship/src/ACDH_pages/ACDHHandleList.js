import React from 'react'
import { NavLink } from 'react-router-dom';

const ACDHHandleList = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">ACCOUNT MANAGEMENT</h5>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header  bg-light-blue">
                                <h4 class="h4 card-intro-title">LIST OF HANDLE FACULTY</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Employee Number</th>
                                                <th>Faculty Name</th>
                                                <th>Email Address</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2018107260</td>
                                                <td>Gabriel M. Galang</td>
                                                <td>gabrielgalang@gmail.com</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <NavLink to="/ACDHIndividualHandle">
                                                            <button type="button" data-toggle="modal" data-target="#assign" class="btn btn-primary mr-1" style={{width: "fit-content"}}>
                                                                View Submissions
                                                            </button>
                                                        </NavLink>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ACDHHandleList
