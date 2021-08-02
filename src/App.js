import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/home" component={Home} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
