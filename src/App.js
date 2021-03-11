import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import LeagueDetail from './component/LeagueDetail/LeagueDetail';
import LeagueNotMatch from './component/LeagueNotMatch/LeagueNotMatch';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/league/:leagueId">
            <LeagueDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/*">
            <LeagueNotMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
