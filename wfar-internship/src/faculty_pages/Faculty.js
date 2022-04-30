import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import '../css/style.css';

// COMPONENTS
import FacultyNavigation from '../components/FacultyNavigation';
import Footer from '../components/Footer';

// PAGES
import FacultyHome from './FacultyHome';
import SamplePage from '../SamplePage';
import IndividualView from '../all_position_pages/IndividualView';
import FacultyOwnSubmissions from '../all_position_pages/OwnSubmissions';
import Upload from '../all_position_pages/Upload';

const Faculty = () => {
    return (
        <>
            {/* 
                <LoadingScreen />
            */}

            <div>
                <Router>
                    {/* HEADER */}
                    <FacultyNavigation />
                    <Switch>
                        {/* CONTENT */}
                        <div class="content-body">
                            <Route exact path="/Faculty" component={FacultyHome}>
                            </Route>
                            <Route exact path="/SamplePage" component={SamplePage}>
                            </Route>
                            <Route exact path="/IndividualView" component={IndividualView}>
                            </Route>
                            <Route exact path="/FacultyOwnSubmissions" component={FacultyOwnSubmissions}>
                            </Route>
                            <Route exact path="/Upload" component={Upload}>
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

export default Faculty
