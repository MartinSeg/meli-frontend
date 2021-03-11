import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Results from "./components/Results";
import './App.scss'
import ItemDetails from "./components/ItemDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path='/'  component={Header}/>
        <Route path='/items' exact component={Results}/>
        <Route path='/items/:id' component={ItemDetails}/>
      </Router>

    </div>
  );
}

export default App;
