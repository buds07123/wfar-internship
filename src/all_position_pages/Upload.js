import React from 'react'

// COMPONENTS
import Banner from '../components/Banner';


const Upload = () => {
    return (
        <>
            <div className="sub-header">
                <div className="d-flex align-items-center flex-wrap mr-auto">
                    <h5 className="dashboard_bar">UPLOAD</h5>
                </div>
            </div> 
            <div class="container-fluid">
                
                <Banner />

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-light-blue">
                                <div class="col-xl-7 col-lg-12">
                                    <h4 class="h4 card-title">Please complete the WFAR information below.</h4>
                                </div>
                                <div class="col-xl-5 col-lg-12">
                                    <input type="button" class="addEntry float-right btn btn-secondary" value="Add Entry" />
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form class="form" action="#" method="post" id="form">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Week No.</label>
                                            <div class="col-sm-9">
                                                <select class="form-control default-select form-control-lg" style={{minWidth: "100%"}}>
                                                    <option selected disabled hidden>Select a week</option>
                                                    <option>Week 1</option>
                                                    <option>Week 2</option>
                                                    <option>Week 3</option>
                                                    <option>Week 4</option>
                                                    <option>Week 5</option>
                                                    <option>Week 6</option>
                                                    <option>Week 7</option>
                                                    <option>Week 8</option>
                                                    <option>Week 9</option>
                                                    <option>Week 10</option>
                                                    <option>Week 11</option>
                                                    <option>Week 12</option>
                                                    <option>Week 13</option>
                                                    <option>Week 14</option>
                                                    <option>Week 15</option>
                                                    <option>Week 16</option>
                                                    <option>Week 17</option>
                                                    <option>Week 18</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="wfar-entry" id="entry">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Date of Class/ Accomplishment</label>
                                                <div class="col-sm-9">
                                                    <input type="date" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Subject being Taught</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control input-default " placeholder="Subject"/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Course, Year and Section</label>
                                                <div class="col-sm-4">
                                                    <input type="text" class="form-control" placeholder="Course"/>
                                                </div>
                                                <div class="col mt-2 mt-sm-0">
                                                    <input type="number" min="0" max="4" class="form-control input-default " placeholder="Year"/>
                                                </div>
                                                <div class="col mt-2 mt-sm-0">
                                                    <input type="text" class="form-control" placeholder="Section"/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">No. of Attendees</label>
                                                <div class="col-sm-9">
                                                    <input type="number" min="0" oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" class="form-control input-default " placeholder="No. of Attendees"/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Link of MS Teams Recordings</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control input-default " placeholder="Link of MS Teams Recordings"/>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Learning Activities</label>
                                                <div class="col-sm-9">
                                                    <textarea class="form-control" rows="4"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Attachments</label>
                                                <div class="col-sm-9">
                                                    <div class="card shadow-sm w-100">
                                                        <div class="bg-light-blue card-header d-flex justify-content-between">
                                                            <h6 class="h6">Team Meet Screenshot/s</h6>
                                                            <input type="file" name="meet-image" id="image" multiple="" class="meet d-none" onchange="image_select()"/>
                                                                <button class="btn btn-sm btn-secondary" type="button" onclick="document.getElementById('image').click()">Choose Image/s</button>
                                                        </div>
                                                        <div class="card-body d-flex flex-wrap align-items-center" id="container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"></label>
                                                <div class="col-sm-9">
                                                    <div class="card shadow-sm w-100">
                                                        <div class="bg-light-blue card-header d-flex justify-content-between">
                                                            <h6 class="h6">Provided Activity Screenshot/s</h6>
                                                            <input type="file" name="act-image" id="act-image" multiple="" class="d-none" onchange="select_image()"/>
                                                                <button class="btn btn-sm btn-secondary" type="button" onclick="document.getElementById('act-image').click()">Choose Image/s</button>
                                                        </div>
                                                        <div class="card-body d-flex flex-wrap justify-content-start" id="act-container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new-entry pb-5"></div>
                                        <div class="card-footer">
                                            <button type="submit" class="card-link float-right btn btn-primary"><i class="fa fa-cloud-upload"></i>&nbsp;Save and Upload</button>
                                            <button class="card-link float-right btn btn-success mr-4"><i class="fa fa-save"></i>&nbsp;Save</button>
                                        </div>
                                    </form>
                                    <form id="copy">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Upload
