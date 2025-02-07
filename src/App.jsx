import { Routes, Route } from "react-router-dom";
import Moonshot from "./components/moonshot";
import ProductOverview from "./components/product-overview";
import ProductGoal from "./components/product-goal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Moonshot />} />
      <Route path="/product-overview" element={<ProductOverview />} />
      <Route path="/product-goal" element={<ProductGoal />} />
    </Routes>
  );
}

export default App;
