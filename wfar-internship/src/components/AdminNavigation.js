import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// IMAAGES
import cictLogo from '../img/CICT.png';
import sampleImage from '../img/user-sample.png';

const AdminNavigation = () => {

    // CHANGE HIGHLIGHTED BUTTON ON SIDEBAR
    const [isSideClicked, setSideClicked] = useState("Dashboard");

    return (
        <>
            {/* Top Header */}
            <div className="nav-header">
                <NavLink to="/Admin" className="brand-logo">
                    <img src={cictLogo} alt="Logo" />
                    <div className="brand-title">
                        <h2>WFAR</h2>
                    </div>
                </NavLink>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span><span className="line"></span><span className="line"></span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="input-group search-area right d-lg-inline-flex d-none" >
                                    <input type="text" className="form-control" placeholder="Search here..." style={{ margin: "auto" }} />
                                    <div className="input-group-append" style={{ height: "40px" }}>
                                        <span className="input-group-text">
                                            <NavLink to="/SamplePage" style={{ color: "gray" }}>
                                                <i className="flaticon-381-search-2"></i>
                                            </NavLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav header-right main-notification">
                                <li className="nav-item dropdown notification_dropdown">
                                    <a className="nav-link  ai-icon" href="javascript:void(0)" role="button" data-toggle="dropdown">
                                        <svg className="bell-icon" height="26" width="27" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.75 15.8385V13.0463C22.7471 10.8855 21.9385 8.80353 20.4821 7.20735C19.0258 5.61116 17.0264 4.61555 14.875 4.41516V2.625C14.875 2.39294 14.7828 2.17038 14.6187 2.00628C14.4546 1.84219 14.2321 1.75 14 1.75C13.7679 1.75 13.5454 1.84219 13.3813 2.00628C13.2172 2.17038 13.125 2.39294 13.125 2.625V4.41534C10.9736 4.61572 8.97429 5.61131 7.51794 7.20746C6.06159 8.80361 5.25291 10.8855 5.25 13.0463V15.8383C4.26257 16.0412 3.37529 16.5784 2.73774 17.3593C2.10019 18.1401 1.75134 19.1169 1.75 20.125C1.75076 20.821 2.02757 21.4882 2.51969 21.9803C3.01181 22.4724 3.67904 22.7492 4.375 22.75H9.71346C9.91521 23.738 10.452 24.6259 11.2331 25.2636C12.0142 25.9013 12.9916 26.2497 14 26.2497C15.0084 26.2497 15.9858 25.9013 16.7669 25.2636C17.548 24.6259 18.0848 23.738 18.2865 22.75H23.625C24.321 22.7492 24.9882 22.4724 25.4803 21.9803C25.9724 21.4882 26.2492 20.821 26.25 20.125C26.2486 19.117 25.8998 18.1402 25.2622 17.3594C24.6247 16.5786 23.7374 16.0414 22.75 15.8385ZM7 13.0463C7.00232 11.2113 7.73226 9.45223 9.02974 8.15474C10.3272 6.85726 12.0863 6.12732 13.9212 6.125H14.0788C15.9137 6.12732 17.6728 6.85726 18.9703 8.15474C20.2677 9.45223 20.9977 11.2113 21 13.0463V15.75H7V13.0463ZM14 24.5C13.4589 24.4983 12.9316 24.3292 12.4905 24.0159C12.0493 23.7026 11.716 23.2604 11.5363 22.75H16.4637C16.284 23.2604 15.9507 23.7026 15.5095 24.0159C15.0684 24.3292 14.5411 24.4983 14 24.5ZM23.625 21H4.375C4.14298 20.9999 3.9205 20.9076 3.75644 20.7436C3.59237 20.5795 3.50014 20.357 3.5 20.125C3.50076 19.429 3.77757 18.7618 4.26969 18.2697C4.76181 17.7776 5.42904 17.5008 6.125 17.5H21.875C22.571 17.5008 23.2382 17.7776 23.7303 18.2697C24.2224 18.7618 24.4992 19.429 24.5 20.125C24.4999 20.357 24.4076 20.5795 24.2436 20.7436C24.0795 20.9076 23.857 20.9999 23.625 21Z" fill="#EB8153"></path>
                                        </svg>
                                        <div className="pulse-css"></div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div id="dlab_W_Notification1" className="widget-media dz-scroll p-3 height250">
                                            <ul className="timeline">
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media mr-2">
                                                            <img alt="image" width="50" src={sampleImage} />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Admin promoted you to Area Chair.</h6>
                                                            <small className="d-block">05 April 2022 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media mr-2">
                                                            <img alt="image" width="50" src={sampleImage} />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Area Chair commented on your submission.</h6>
                                                            <small className="d-block">05 April 2022 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media mr-2">
                                                            <img alt="image" width="50" src={sampleImage} />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Area Chair commented on your submission.</h6>
                                                            <small className="d-block">05 April 2022 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a className="all-notification" href="javascript:void(0)">See all notifications <i className="ti-arrow-right"></i></a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown header-profile">
                                    <NavLink className="nav-link" to="/SamplePage" role="button" data-toggle="dropdown">
                                        <img src={sampleImage} width="20" alt="" />
                                        <div className="header-info">
                                            <span>Juan dela Cruz</span>
                                            <small>Admin</small>
                                        </div>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <NavLink to="/SamplePage" className="dropdown-item ai-icon">
                                            <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            <span className="ml-2">Profile </span>
                                        </NavLink>
                                        <a href="javascript:void(0);" className="dropdown-item ai-icon">
                                            <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line x1="21" y1="12" x2="9" y2="12"></line>
                                            </svg>
                                            <span className="ml-2">Logout </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Sidebar */}
            <div className="deznav">
                <div className="deznav-scroll">
                    <div className="main-profile">
                        <div className="image-bx">
                            <img src={sampleImage} alt="" />
                            <NavLink to="/SamplePage"><i className="fa fa-cog" aria-hidden="true"></i></NavLink>
                        </div>
                        <h5 className="name"><span className="font-w400">Hello,</span> Cruz</h5>
                    </div>
                    <ul className="metismenu" id="menu">
                        <li className="nav-label first">Main Menu</li>
                        <li
                            className={
                                isSideClicked === "Dashboard" ? "mm-active" : ""
                            }
                        >
                            <NavLink to="/Admin"
                                className="ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("Dashboard") }
                                }
                            >
                                <i class="flaticon-001-monitor"></i>
                                <span className="nav-text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li
                            className={
                                isSideClicked === "profile" ? "mm-active" : ""
                            }
                        >
                            <NavLink to="/SamplePage"
                                className="ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("profile") }
                                }
                            >
                                <i className="flaticon-153-user"></i>
                                <span className="nav-text">Profile</span>
                            </NavLink>
                        </li>
                        <li
                            className={
                                isSideClicked === "notifications" ? "mm-active" : ""
                            }
                        >
                            <NavLink to="/SamplePage"
                                className="ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("notifications") }
                                }
                            >
                                <i className="flaticon-381-notification"></i>
                                <span className="nav-text">Notifications</span>
                            </NavLink>
                        </li>
                        <li className="nav-label first">MANAGE</li>
                        <li
                            className={
                                isSideClicked === "Accounts" ? "mm-active" : ""
                            }
                        >
                            <a href="javascript:void(0);"
                                className="has-arrow ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("Accounts") }
                                }
                            >
                                <i class="flaticon-028-user-1"></i>
                                <span class="nav-text">Accounts</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><NavLink to="/AdminAccountRequest">Account Request/s</NavLink></li>
                                <li><NavLink to="/AdminPromoteDemote">Promotion and Demotion</NavLink></li>
                                <li><NavLink to="/AdminFacultyAssignment">Faculty Assignment</NavLink></li>
                            </ul>
                        </li>
                        <li
                            className={
                                isSideClicked === "Submissions" ? "mm-active" : ""
                            }
                        >
                            <NavLink to="/AdminAllWfarSubmissions"
                                className="ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("Submissions") }
                                }
                            >
                                <i class="flaticon-044-file"></i>
                                <span class="nav-text">WFAR Submissions</span>
                            </NavLink>
                        </li>
                        <li
                            className={
                                isSideClicked === "Contents" ? "mm-active" : ""
                            }
                        >
                            <NavLink to="/SamplePage"
                                className="ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("Contents") }
                                }
                            >
                                <i class="flaticon-162-edit"></i>
                                <span class="nav-text">Contents</span>
                            </NavLink>
                        </li>
                        <li className="nav-label first">GENERATE</li>
                        <li
                            className={
                                isSideClicked === "Reports" ? "mm-active" : ""
                            }
                        >
                            <a herf="javascript:void(0);"
                                className="has-arrow ai-icon"
                                aria-expanded="false"
                                onClick={
                                    () => { setSideClicked("Reports") }
                                }
                            >
                                <i class="flaticon-119-printer"></i>
                                <span class="nav-text">Reports</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><NavLink to="/AdminReport">Completed Requirements</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default AdminNavigation
