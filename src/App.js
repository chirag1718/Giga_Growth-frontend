import "./App.css";
// react-router imports
import { BrowserRouter as Router } from "react-router-dom";
//local imports
import AppRoutes from "./Routes/Routes";
import Navigation from "./components/General/Navigation";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Navigation />
          <AppRoutes />
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
