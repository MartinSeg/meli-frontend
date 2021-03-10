import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Results from "./components/Results";
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Header}/>
        <Route path='/items' component={Results}/>
      </Router>

    </div>
  );
}

export default App;
