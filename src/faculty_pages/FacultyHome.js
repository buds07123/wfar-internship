import React,{useEffect,useState} from 'react'

// IMAGES
import image1 from '../img/sample//img1.jpg'
import image2 from '../img/sample//img2.jpg'
import image3 from '../img/sample//img3.jpg'

const FacultyHome = () => {

    return (
        <>
                <div className="sub-header">
                    <div className="d-flex align-items-center flex-wrap mr-auto">
                        <h5 className="dashboard_bar">HOME</h5>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row page-titles mx-0">
                        <div className="col-lg-12">
                            <div className="welcome-text">
                                <h4>Hi, welcome back!</h4>
                                <h3 className="mt-3">Upload your individual weekly accomplishment reports with ease.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h1 className="card-intro-title mb-4">Create, Manage, Monitor</h1>
                                    <div className="bootstrap-carousel">
                                        <div data-ride="carousel" className="carousel slide" id="carouselCaptions">
                                            <ol className="carousel-indicators">
                                                <li className="active" data-slide-to="0" data-target="#carouselCaptions">
                                                </li>
                                                <li data-slide-to="1" data-target="#carouselCaptions" className=""></li>
                                                <li data-slide-to="2" data-target="#carouselCaptions" className=""></li>
                                            </ol>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block w-100" src={image1} alt="" />
                                                    <div className="carousel-caption d-none d-md-block" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                                                        <h5>Improves Productivity, Accuracy and Timeliness</h5>
                                                        <p>The system will enable the faculty members to submit their accomplishment reports with less hassle, and helps the Department Head to automate reports to save countless hours of sifting through mounds of paperwork in search for data and results.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block w-100" src={image2} />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Identifies Potential Problems Early</h5>
                                                        <p>The system will allow the Admin and Department Head to closely monitor the faculty members' accomplishment reports and notify them about of what are still lacking.</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img alt="" className="d-block w-100" src={image3} />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5>Increase Communication</h5>
                                                        <p>Because the WFAR System is used by the entire department, there will be improved communication between admin, department head and other faculty members which helps to identify problem areas and discover mutually agreeable solutions faster.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a data-slide="prev" href="#carouselCaptions" className="carousel-control-prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span>
                                            </a><a data-slide="next" href="#carouselCaptions" className="carousel-control-next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
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

export default FacultyHome
