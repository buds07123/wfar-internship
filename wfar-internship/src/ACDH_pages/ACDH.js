import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import '../css/style.css';

// COMPONENTS
import ACDHNavigation from '../components/ACDHNavigation';
import Footer from '../components/Footer';

// PAGES
import LoadingScreen from '../LoadingScreen';
import SamplePage from '../SamplePage';
import FacultyHome from '../faculty_pages/FacultyHome';
import ACDHAccountRequest from './ACDHAccountRequest';
import ACDHHandleList from './ACDHHandleList.js';
import ACDHIndividualHandle from './ACDHIndividualHandle';
import ACDHWfarReport from './ACDHWfarReport';
import ACDHWfarIndividualView from './ACDHWfarIndividualView';
import ACDHOwnSubmissions from '../all_position_pages/OwnSubmissions';
import ACDHAllWfarSubmissions from './ACDHAllWfarSubmissions';
import Upload from '../all_position_pages/Upload';
import IndividualView from '../all_position_pages/IndividualView';
import ACDHIndividualFaculty from './ACDHIndividualFaculty';

const ACDH = () => {
    return (
        <>
            {/* 
                <LoadingScreen />
            */}

            <div>
                <Router>
                    {/* HEADER */}
                    <ACDHNavigation />
                    <Switch>
                        {/* CONTENT */}
                        <div class="content-body">
                            <Route exact path="/ACDH" component={FacultyHome}>
                            </Route>
                            <Route exact path="/SamplePage" component={SamplePage}>
                            </Route>
                            <Route exact path="/ACDHAccountRequest" component={ACDHAccountRequest}>
                            </Route>
                            <Route exact path="/ACDHHandleList" component={ACDHHandleList}>
                            </Route>
                            <Route exact path="/ACDHIndividualHandle" component={ACDHIndividualHandle}>
                            </Route>
                            <Route exact path="/ACDHWfarReport" component={ACDHWfarReport}>
                            </Route>
                            <Route exact path="/ACDHWfarIndividualView" component={ACDHWfarIndividualView}>
                            </Route>
                            <Route exact path="/ACDHOwnSubmissions" component={ACDHOwnSubmissions}>
                            </Route>
                            <Route exact path="/ACDHAllWfarSubmissions" component={ACDHAllWfarSubmissions}>
                            </Route>
                            <Route exact path="/Upload" component={Upload}>
                            </Route>
                            <Route exact path="/IndividualView" component={IndividualView}>
                            </Route>
                            <Route exact path="/ACDHIndividualFaculty" component={ACDHIndividualFaculty}>
                            </Route>
                        </div>
                    </Switch>
                    {/* FOOTER */}
                    <div className="footer">
                        <Footer />
                    </div>
                </Router>

            </div>
        </>
    )
}

export default ACDH
