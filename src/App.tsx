import { Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";

function App() {
  const navOptions = ["Home", "Portfolio", "Contact"];

  return (
    <>
      <Header navOptions={navOptions} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<div>portfolio page</div>} />
        <Route path="/contact" element={<div>contact page</div>} />
      </Routes>
    </>
  );
}

export default App;
