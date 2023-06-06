import "./App.css";
// react-router imports
import { BrowserRouter as Router } from "react-router-dom";
//local imports
import AppRoutes from "./Routes/Routes";
import Navigation from "./components/General/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
