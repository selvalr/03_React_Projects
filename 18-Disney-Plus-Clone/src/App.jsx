import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
