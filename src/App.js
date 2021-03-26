import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
