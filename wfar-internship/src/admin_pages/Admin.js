import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import '../css/style.css';

// COMPONENTS
import AdminNavigation from '../components/AdminNavigation';
import Footer from '../components/Footer';

// PAGES
import LoadingScreen from '../LoadingScreen';
import SamplePage from '../SamplePage';
import FacultyHome from '../faculty_pages/FacultyHome';
import AdminAccountRequest from './AdminAccountRequest';
import AdminPromoteDemote from './AdminPromoteDemote';
import AdminFacultyAssignment from './AdminFacultyAssignment';
import AdminAllWfarSubmissions from './AdminAllWfarSubmissions';
import AdminIndividualFaculty from './AdminIndividualFaculty';
import AdminWfarIndividualView from './AdminWfarIndividualView';
import AdminReport from './AdminReport';

const Admin = () => {
    return (
        <>
            {/* 
                <LoadingScreen />
            */}

            <div>
                <Router>
                    {/* HEADER */}
                    <AdminNavigation />
                    <Switch>
                        {/* CONTENT */}
                        <div class="content-body">
                            <Route exact path="/Admin" component={FacultyHome}>
                            </Route>
                            <Route exact path="/AdminAccountRequest" component={AdminAccountRequest}>
                            </Route>
                            <Route exact path="/AdminPromoteDemote" component={AdminPromoteDemote}>
                            </Route>
                            <Route exact path="/AdminFacultyAssignment" component={AdminFacultyAssignment}>
                            </Route>
                            <Route exact path="/AdminAllWfarSubmissions" component={AdminAllWfarSubmissions}>
                            </Route>
                            <Route exact path="/AdminIndividualFaculty" component={AdminIndividualFaculty}>
                            </Route>
                            <Route exact path="/AdminWfarIndividualView" component={AdminWfarIndividualView}>
                            </Route>
                            <Route exact path="/AdminReport" component={AdminReport}>
                            </Route>
                            <Route exact path="/SamplePage" component={SamplePage}>
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

export default Admin
