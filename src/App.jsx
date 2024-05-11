import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

function App() {
  const handleLoginAsatidz = (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telephone_number: data.phone,
        password: data.password,
      }),
    };

    fetch("http://localhost:5000/asatidz/login", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleLoginSantri = (data) => {
    console.log(`santri no: ${data.phone}, pass: ${data.password}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/asatidz"
          element={<LoginPage asatidz={true} value={handleLoginAsatidz} />}
        />
        <Route
          path="/santri"
          element={<LoginPage asatidz={false} value={handleLoginSantri} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
