import React from 'react'

// COMPONENTS
import Banner from '../components/Banner'

const AdminPromoteDemote = () => {
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
                                <h4 class="h4 card-intro-title">ACCOUNT PROMOTION AND DEMOTION</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Employee Number</th>
                                                <th>Faculty Name</th>
                                                <th>Position</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2018107260</td>
                                                <td>Juan dela Cruz</td>
                                                <td>Department Head</td>
                                                <td>
                                                    <span class="badge light badge-success">
                                                        Promoted
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" data-toggle="modal" data-target="#promote" class="btn btn-success btn-xs sharp mr-1"><i class="ti-arrow-up"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs sharp"><i class="ti-arrow-down"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2018234541</td>
                                                <td>Maria Bautista</td>
                                                <td>Faculty</td>
                                                <td>
                                                    <span class="badge light badge-danger">
                                                        Demoted
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" data-toggle="modal" data-target="#promote" class="btn btn-success btn-xs sharp mr-1"><i class="ti-arrow-up"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs sharp"><i class="ti-arrow-down"></i></button>
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

            {/*<!-- Promote Modal -->*/}
            <div class="modal fade" id="promote">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="h5 modal-title">Account Promotion</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="h5 text-primary d-inline">Promote as:</h5>
                            <form>
                                <div class="row mt-4 sp4">
                                    <select class="form-control default-select form-control-lg">
                                        <option value="" selected disabled hidden>Choose a position</option>
                                        <option value="Department Head">Department Head</option>
                                        <option value="Area Chair">Area Chair</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Promote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminPromoteDemote
