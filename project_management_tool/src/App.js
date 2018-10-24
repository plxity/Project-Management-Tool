import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import  ProjectDetails from './Components/projects/ProjectDetails';
import Signin from './Components/auth/Signin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/projects/:id' component={ProjectDetails}/>
            <Route exact path="/signin" component={Signin}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
