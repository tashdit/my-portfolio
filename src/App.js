import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
          <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route  path="/ProjectDetails/:projectId">
             <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
