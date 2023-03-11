import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import SingleLaunch from "./screens/SingleLaunch";
import Search from "./screens/Search";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/launch-details/:id"
              element={<SingleLaunch />}
            />
            <Route exact path="/search/:date" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
