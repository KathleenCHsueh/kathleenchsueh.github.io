import { Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";
import IndependentDesignerProject from "@pages/IndependentDesignerProject";
import VeggieEscape from "@pages/VeggieEscape";
import WIPPage from "@pages/WIPPage";

function App() {
  const navOptions = ["Home", "Portfolio", "Contact"];

  return (
    <>
      <Header navOptions={navOptions} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route
          path="/independent-designer-project"
          element={<IndependentDesignerProject />}
        />
        <Route path="/veggie-escape" element={<VeggieEscape />} />
        <Route path="/wip" element={<WIPPage />} />
      </Routes>
    </>
  );
}

export default App;
