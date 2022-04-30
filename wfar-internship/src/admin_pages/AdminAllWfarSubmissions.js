import React from 'react'
import { NavLink } from 'react-router-dom';

// COMPONENTS
import Banner from '../components/Banner'

// IMAGES
import fileImages from '../img/file.png';

const AdminAllWfarSubmissions = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">WFAR SUBMISSIONS</h5>
                </div>
            </div>
            <div class="container-fluid">
                <Banner />
                <div class="row row mx-0">
                    <div class="col-lg-12 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <button type="button" data-toggle="modal" data-target="#semester" class="btn btn-rounded btn-secondary" style={{ width: "fit-content" }}><span class="btn-icon-left text-secondary"><i class="fa fa-plus"></i></span>Create Semester</button>
                    </div>
                </div>
                <div class="row page-titles mx-0 mt-4 bg-white p-3">
                    <div class="col-sm-12 p-md-0 justify-content-sm-center mt-2 mt-sm-0 d-flex">
                        <h3 class="h3 p-2">SCHOOL YEAR: 2021-2022 - First Semester</h3>
                    </div>
                    <div class="col-sm-6 p-md-0">
                        <div class="col-sm-12 p-md-0 justify-content-sm-start mt-2 mt-sm-0 d-flex">
                            <div class="basic-form ">
                                <form>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">School Year</label>
                                        </div>
                                        <select class="form-control default-select">
                                            <option selected disabled hidden>Select year</option>
                                            <option value="1">2021-2022</option>
                                            <option value="2">2020-2021</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0">
                        <div class="col-sm-12 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                            <div class="basic-form ">
                                <form>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">Semester</label>
                                        </div>
                                        <select class="form-control default-select">
                                            <option selected disabled hidden>Select sem</option>
                                            <option value="1">First Semester</option>
                                            <option value="2">Second Semester</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="wfar-entry">
                                    <div class="wfar-img-content">
                                        <img class="img-fluid" src={fileImages} alt="" />
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/AdminIndividualFaculty">Gariel Galang</NavLink></h4>
                                        <h4 class="h4">Area Chair</h4>
                                        <NavLink to="/AdminIndividualFaculty" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
                                        </span>View</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="wfar-entry">
                                    <div class="wfar-img-content">
                                        <img class="img-fluid" src={fileImages} alt="" />
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/AdminIndividualFaculty">Juan dela Cruz</NavLink></h4>
                                        <h4 class="h4">Faculty</h4>
                                        <NavLink to="/AdminIndividualFaculty" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
                                        </span>View</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="wfar-entry">
                                    <div class="wfar-img-content">
                                        <img class="img-fluid" src={fileImages} alt="" />
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/AdminIndividualFaculty">Rosemarie M. Bautista</NavLink></h4>
                                        <h4 class="h4">Department Head</h4>
                                        <NavLink to="/AdminIndividualFaculty" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
                                        </span>View</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- Create Sem Modal -->*/}
            <div class="modal fade" id="semester">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="h5 modal-title">Semester</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="text-black font-w600">School Year <span class="required">*</span></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" class="form-control" placeholder="School Year"/>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-3">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="text-black font-w600">Semester<span class="required">*</span></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <select class="form-control default-select form-control-lg">
                                            <option value="" selected disabled hidden>Select Semester</option>
                                            <option value="">First Semester</option>
                                            <option value="">Second Semester</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Create Semester</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminAllWfarSubmissions
