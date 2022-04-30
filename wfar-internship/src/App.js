import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// WEBPAGES
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Faculty from './faculty_pages/Faculty';
import ACDH from './ACDH_pages/ACDH';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import Admin from './admin_pages/Admin';

// STYLES CSS
import './css/styles.css';

function App() {

  return (

    <Router>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/Signup" component={Signup}>
          </Route>
          <Route exact path="/Login" component={Login}>
          </Route>
          <Route exact path='/Faculty' component={Faculty}>
          </Route>
          <Route exact path='/ACDH' component={ACDH}>
          </Route>
          <Route exact path='/AdminLogin' component={AdminLogin}>
          </Route>
          <Route exact path='/AdminRegister' component={AdminRegister}>
          </Route>
          <Route exact path='/Admin' component={Admin}>
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
