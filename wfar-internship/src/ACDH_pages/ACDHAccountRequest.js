import React from 'react'

// COMPONENTS
import Banner from '../components/Banner';


const ACDHAccountRequest = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">ACCOUNT REQUEST/S</h5>
                </div>
            </div>

            <div class="container-fluid">
                
                <Banner />

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header  bg-light-blue">
                                <h4 class="h4 card-intro-title">ACCOUNT MANAGEMENT</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Date of Request</th>
                                                <th>Faculty Name</th>
                                                <th>Email Address</th>
                                                <th>Position</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>03/01/2022</td>
                                                <td>John Reyes</td>
                                                <td>johnreyes@gmail.com</td>
                                                <td>Faculty</td>
                                                <td>
                                                    <span class="badge light badge-warning">
                                                        <i class="fa fa-circle text-warning mr-1"></i>
                                                        Pending
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" class="btn btn-success btn-xs sharp mr-1"><i class="fa fa-check"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs sharp"><i class="fa fa-remove"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03/02/2022</td>
                                                <td>Maria Bautista</td>
                                                <td>mariabautista@gmail.com</td>
                                                <td>Faculty</td>
                                                <td>
                                                    <span class="badge light badge-danger">
                                                        <i class="fa fa-circle text-danger mr-1"></i>
                                                        Rejected
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" class="btn btn-success btn-xs sharp mr-1"><i class="fa fa-check"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs sharp"><i class="fa fa-remove"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03/03/2022</td>
                                                <td>Juan dela Cruz</td>
                                                <td>juandelacruz@gmail.com</td>
                                                <td>Faculty</td>
                                                <td>
                                                    <span class="badge light badge-success">
                                                        <i class="fa fa-circle text-success mr-1"></i>
                                                        Active
                                                    </span>
                                                </td>
                                                <td>
                                                    <div class="d-flex">
                                                        <button type="button" class="btn btn-success btn-xs sharp mr-1"><i class="fa fa-check"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs sharp"><i class="fa fa-remove"></i></button>
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

export default ACDHAccountRequest
