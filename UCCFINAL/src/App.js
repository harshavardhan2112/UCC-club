import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Events } from "./components/Pages/Events";
import { Team } from "./components/Pages/Team";
import { Contact } from "./components/Pages/Contact";
import Form from './components/Pages/form'

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Events" component={Events} />
            <Route path="/Team" component={Team} />
            <Route path="/contact" component={Contact} />
            <Route path='/form' component={Form}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
