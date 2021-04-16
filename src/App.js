import './App.scss';
import Navbar from './components/Navbar';
import Container from './components/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id">
            <Navbar />
            <Container 
            requete = "all"
            />
          </Route>
          <Route path="/">
            <Navbar />
            <Container />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
