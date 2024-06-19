import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Todo from './components/Todo';
import Prikaz from './components/Prikaz';
import Navbar from './components/NAvbar';
import Glow from './components/Glow';

function App() {
  return (
    <Router>
      <div className="App">
        <Glow /> {/**/}
        <Navbar /> {/**/}
        <header className="App-header">
          <h1>My App</h1>
        </header>
        <main>
          <Switch>
            <Route path="/prikaz" component={Prikaz} />
            <Route path="/todo" component={Todo} />
            <Route path="/calculator" component={Calculator} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
