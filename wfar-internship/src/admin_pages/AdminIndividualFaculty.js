import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminIndividualFaculty = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header  bg-light-blue">
                                <h4 class="h4 card-intro-title">GABRIEL M. GALANG</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Week No.</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>April 4, 2022</td>
                                                <td>April 8, 2022</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <NavLink to="/AdminWfarIndividualView">
                                                            <button type="button" data-toggle="modal" data-target="#assign" class="btn btn-primary mr-1" style={{ width: "fit-content" }}>View</button></NavLink>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>April 11, 2022</td>
                                                <td>April 15, 2022</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <NavLink to="/AdminWfarIndividualView">
                                                            <button type="button" class="btn btn-primary mr-1" style={{ width: "fit-content" }}>View</button></NavLink>
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

export default AdminIndividualFaculty
