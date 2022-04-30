import React from 'react'

// COMPONENTS
import Banner from '../components/Banner'

const AdminFacultyAssignment = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">ACCOUNT MANAGEMENT</h5>
                </div>
            </div>
            <div class="container-fluid">
                <Banner />
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header  bg-light-blue">
                                <h4 class="h4 card-intro-title">FACULTY ASSIGNMENT</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{ minWidth: "845px" }}>
                                        <thead>
                                            <tr>
                                                <th>Employee Number</th>
                                                <th>Faculty Name</th>
                                                <th>Area Chair in Charge</th>
                                                <th>Department Head In Charge</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2018107260</td>
                                                <td>Juan dela Cruz</td>
                                                <td>None</td>
                                                <td>Rosemarie M. Bautista, DIT</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" data-toggle="modal" data-target="#assign" class="btn btn-success mr-1" style={{width: "fit-content"}}>Assign</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2018234541</td>
                                                <td>Maria Bautista</td>
                                                <td>Gabriel Galang</td>
                                                <td>Rosemarie M. Bautista, DIT</td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" data-toggle="modal" data-target="#assign" class="btn btn-success mr-1" style={{width: "fit-content"}}>Assign</button>
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

            {/*<!-- Assign Modal -->*/}
            <div class="modal fade" id="assign">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="h5 modal-title">Faculty Assignment</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="h5 text-primary d-inline">Assign the responsibility of checking to:</h5>
                            <form>
                                <div class="row mt-4 sp4">
                                    <select class="form-control default-select form-control-lg">
                                        <option value="" selected disabled hidden>Select Area Chair</option>
                                        <option value="">Gabriel M. Galang, MSIT</option>
                                        <option value="">Josephine R. Bayonito, PhD</option>
                                        <option value="">Melanie M. Orbeso, MSIT</option>
                                    </select>
                                    <select class="form-control default-select form-control-lg mt-4">
                                        <option value="" selected disabled hidden>Select Department Head</option>
                                        <option value="">Rosemarie M. Bautista, DIT</option>
                                        <option value="">Aaron Paul M. Dela Rosa, MSIT</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Assign</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminFacultyAssignment
