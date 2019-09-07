import React from 'react';
import { BrowserRouter ,Switch,Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Dasboard from './components/dashbord/Dasboard';
import ProjectDetails from './components/projects/ProjectDetails'
import Signin from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import ProjectList from './components/projects/ProjectList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <NavBar />
       <Switch>
         <Route exact path='/' component={Dasboard} />
         <Route path='/project/:id' component={ProjectDetails} />
         <Route path='/signin' component={Signin} />
         <Route path='/signup' component={SignUp} />
         <Route path='/create' component={CreateProject} />
         <Route path='/projectList' component={ProjectList} />





       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
