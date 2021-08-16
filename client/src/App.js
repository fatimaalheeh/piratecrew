
import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Details from './components/Details';
import {Router}from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
      <Dashboard path='/pirates'/>
      <Form path='/pirate/new'/>
      <Details path='/pirate/:id'/>
      </Router>
    </div>
  );
}

export default App;
