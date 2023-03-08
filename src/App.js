import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

 

  return (
    <Router>
      <Navbar
        title="TextMaster"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Alert alert={alert} />
              <div className="container my-3">
                <TextForm
                  heading="Enter your text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Alert alert={alert} />
              <div className="container my-3">
                <About />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );

}

export default App;
