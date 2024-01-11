import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/home/Home";
import Journey from "./pages/journey/Journey";
import Team from "./pages/team/Team";
import Store from "./pages/store/Store";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <div className="AppContainer">
        <Router>
          <Header />
          <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/team" element={<Team />} />
            <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
              
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
