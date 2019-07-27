import React from 'react';
import { BrowserRouter ,Switch,Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Dasboard from './components/dashbord/Dasboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <NavBar />
       <Switch>
         <Route path='/' component={Dasboard} />
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
