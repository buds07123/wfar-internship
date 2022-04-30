import React from 'react'

// COMPONENTS
import Banner from '../components/Banner'

const AdminReport = () => {
    return (
        <>
            <div class="container-fluid">
                <Banner />
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header bg-light-blue">
                                <div class="col-xl-7 col-lg-12">
                                    <h4 class="h4 card-title">SUMMARY OF COMPLETED REQUIREMENTS</h4>
                                </div>
                                <div class="col-xl-5 col-lg-12">
                                    <button type="button" class="float-right btn btn-rounded btn-info" style={{width: "fit-content"}}><span class="btn-icon-left text-info"><i class="fa fa-download color-success"></i></span>Download</button>
                                    <button type="button" class="float-right mr-1 btn btn-rounded btn-secondary" style={{width: "fit-content"}}><span class="btn-icon-left text-secondary"><i class="fa fa-print color-success"></i></span>Print</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <div class="pb-5">
                                        <strong>Filter weeks: </strong>
                                        <a class="toggle-week" data-column="1">Week 1</a> -
                                        <a class="toggle-week" data-column="2">Week 2</a>
                                    </div>
                                    <table id="summary" class="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Faculty Name</th>
                                                <th>Week 1 (Sept 27 - Oct 3) <br/> Comments/Remarks</th>
                                                <th>Week 2 (Oct 4 - Oct 10) <br/> Comments/Remarks</th>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Gabriel M. Galang</td>
                                                <td>Ok</td>
                                                <td>Did not submit WFAR</td>
                                            </tr>
                                            <tr>
                                                <td>Juan dela Cruz</td>
                                                <td>Links not working</td>
                                                <td>Ok</td>
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

export default AdminReport
