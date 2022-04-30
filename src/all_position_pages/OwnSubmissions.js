import React from 'react';
import { NavLink } from 'react-router-dom';

// IMAGES
import fileImages from '../img/file.png';

const OwnSubmissions = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">WFAR SUBMISSIONS</h5>
                </div>
            </div>        
            <div class="container-fluid">
                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        <div class="welcome-text">
                            <h4 class="h4">Hi, welcome back!</h4>
                            <h6 class="h6 mt-3">Upload your individual weekly accomplishment reports with ease.</h6>
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <NavLink to="/Upload" style={{width: "390px", textAlign: "right"}}>
                            <button type="button" class="btn btn-rounded btn-secondary"><span class="btn-icon-left text-secondary"><i class="fa fa-upload"></i></span>Upload WFAR</button></NavLink>
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
                                        <img class="img-fluid" src={fileImages} alt=""/>
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/IndividualView">Week 1</NavLink></h4>
                                        <h4 class="h4">April 4, 2022 to April 8, 2022</h4>
                                        <NavLink to="/IndividualView" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
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
                                        <img class="img-fluid" src={fileImages} alt=""/>
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/IndividualView">Week 2</NavLink></h4>
                                        <h4 class="h4">April 4, 2022 to April 8, 2022</h4>
                                        <NavLink to="/IndividualView" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
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
                                        <img class="img-fluid" src={fileImages} alt=""/>
                                    </div>
                                    <div class="wfar-content text-center mt-3">
                                        <h4 class="h4"><NavLink to="/IndividualView">Week 3</NavLink></h4>
                                        <h4 class="h4">April 4, 2022 to April 8, 2022</h4>
                                        <NavLink to="/IndividualView" class="btn btn-rounded btn-warning"><span class="btn-icon-left text-warning"><i class="fa fa-eye color-warning"></i>
                                        </span>View</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OwnSubmissions;