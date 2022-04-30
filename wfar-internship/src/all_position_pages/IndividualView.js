import React from 'react';

// COMPONENTS
import Banner from '../components/Banner';

const IndividualView = () => {
    return (
        <>

            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">YOUR WEEKLY SUBMISSION</h5>
                </div>
            </div>

            {/* BANNER */}
            <div className="container-fluid">
                <Banner />
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header  bg-light-blue">
                                <div className="col-xl-7 col-lg-12">
                                    <h4 className="h4 card-title">Week No.</h4>
                                </div>
                                <div className="col-xl-5 col-lg-12">
                                    <button type="button" className="float-right btn btn-rounded btn-info" style={{width: "fit-content"}}><span className="btn-icon-left text-info"><i className="fa fa-download" ></i></span>Download</button>
                                    <button type="button" className="float-right mr-1 btn btn-rounded btn-secondary" style={{width: "fit-content"}}><span className="btn-icon-left text-secondary"><i className="fa fa-print"></i></span>Print</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="wfartable" className="display" style={{minWidth: "845px"}}>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Subject</th>
                                                <th>Course, Year, <br/> Section</th>
                                                <th>No. of Attendees</th>
                                                <th>Link of Meet <br/> Recording</th>
                                                <th>Learning <br/> Activities</th>
                                                <th>Attachments</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>03/03/2022</td>
                                                <td>CAP 1 - Capstone Project and Research 1</td>
                                                <td>BSIT 3K</td>
                                                <td>24</td>
                                                <td><a href="https://bulsumain.sharepoint.com/:v:/s/IT312-BSIT3K/EWku0Ug4rZxHkU1uBjOh6W4Bmi8MY0lxrG1mwhL23ExkAQ?e=Ve2uV"><strong>Recording Link</strong></a></td>
                                                <td>1.	Combined the orientation of IT 312 because there was a curriculum revision meeting held at the school on their supposed schedule. 03/02/2022.</td>
                                                <td>
                                                    <div className="dropdown ml-auto text-center">
                                                        <div className="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03/03/2022</td>
                                                <td>CAP 1 - Capstone Project and Research 1</td>
                                                <td>BSIT 3K</td>
                                                <td>24</td>
                                                <td><a href="https://bulsumain.sharepoint.com/:v:/s/IT312-BSIT3K/EWku0Ug4rZxHkU1uBjOh6W4Bmi8MY0lxrG1mwhL23ExkAQ?e=Ve2uV"><strong>Recording Link</strong></a></td>
                                                <td>1.	Combined the orientation of IT 312 because there was a curriculum revision meeting held at the school on their supposed schedule. 03/02/2022.</td>
                                                <td>
                                                    <div className="dropdown ml-auto text-center">
                                                        <div className="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03/03/2022</td>
                                                <td>CAP 1 - Capstone Project and Research 1</td>
                                                <td>BSIT 3K</td>
                                                <td>24</td>
                                                <td><a href="https://bulsumain.sharepoint.com/:v:/s/IT312-BSIT3K/EWku0Ug4rZxHkU1uBjOh6W4Bmi8MY0lxrG1mwhL23ExkAQ?e=Ve2uV"><strong>Recording Link</strong></a></td>
                                                <td>1.	Combined the orientation of IT 312 because there was a curriculum revision meeting held at the school on their supposed schedule. 03/02/2022.</td>
                                                <td>
                                                    <div className="dropdown ml-auto text-center">
                                                        <div className="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a className="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mt-5">
                                        <label for="comment" className="text-black font-w600">All Comment/s</label>
                                        <textarea rows="5" className="form-control" name="comment" placeholder="Comment" id="comment" readonly></textarea>
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

export default IndividualView
