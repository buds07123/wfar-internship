import React from 'react'

// IMAGES
import image1 from '../img/sample//img1.jpg'
import image2 from '../img/sample//img2.jpg'
import image3 from '../img/sample//img3.jpg'

const ACDHWfarIndividualView = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">YOUR WEEKLY SUBMISSION</h5>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header bg-light-blue">
                                <div class="col-xl-7 col-lg-12">
                                    <h4 class="h4 card-title">Week No.</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="wfartable" class="display" style={{ minWidth: "845px" }}>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Subject</th>
                                                <th>Course, Year, <br /> Section</th>
                                                <th>No. of Attendees</th>
                                                <th>Link of Meet <br /> Recording</th>
                                                <th>Learning <br /> Activities</th>
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
                                                    <div class="dropdown ml-auto text-center">
                                                        <div class="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
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
                                                    <div class="dropdown ml-auto text-center">
                                                        <div class="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
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
                                                    <div class="dropdown ml-auto text-center">
                                                        <div class="btn-link" data-toggle="dropdown">
                                                            <svg width="24px" height="24px" viewbox="0 0 24 24" version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Team Meet Screenshot</a>
                                                            <a class="dropdown-item" href="attachment" data-toggle="modal" data-target="#attachment">Provided Activities</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group mt-5">
                                        <label for="comment" class="text-black font-w600">All Comment/s</label>
                                        <textarea rows="5" class="form-control" name="comment" placeholder="Comment" id="comment" readonly></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- Attachments Modal -->*/}
            <div class="modal fade" id="attachment">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="h5 modal-title">Attachments</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="attachments">
                                <h5 class="h5 text-primary d-inline">Uploaded Screenshot/s</h5>
                                <div class="row mt-4 sp4" id="lightgallery">
                                    <a href="img/sample/img1.jpg" data-exthumbimage="img/sample/img1.jpg" data-src="img/sample/img1.jpg" class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                        <img src={image1} alt="" class="img-fluid" />
                                    </a>
                                    <a href="img/sample/img2.jpg" data-exthumbimage="img/sample/img2.jpg" data-src="img/sample/img2.jpg" class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                        <img src={image2} alt="" class="img-fluid" />
                                    </a>
                                    <a href="img/sample/img3.jpg" data-exthumbimage="img/sample/img3.jpg" data-src="img/sample/img3.jpg" class="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                        <img src={image3} alt="" class="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ACDHWfarIndividualView
