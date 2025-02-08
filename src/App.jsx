import { Routes, Route } from "react-router-dom";
import Moonshot from "./components/moonshot";
import ProductOverview from "./components/product-overview";
import ProductGoal from "./components/product-goal";
import InnovationFeasibility from "./components/innovation-feasibility";
import TeamOrganization from "./components/team-organization";
import BusinessModel from "./components/business-model";
import PartnershipsSupport from "./components/partnerships-support";
import ThankYou from "./components/thank-you";
import Report from "./components/report";
import { SurveyProvider } from "./SurveyContext";

function App() {
  return (
    <SurveyProvider>
      <Routes>
        <Route path="/" element={<Moonshot />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/product-goal" element={<ProductGoal />} />
        <Route
          path="/innovation-feasibility"
          element={<InnovationFeasibility />}
        />
        <Route path="/team-organization" element={<TeamOrganization />} />
        <Route path="/business-model" element={<BusinessModel />} />
        <Route path="/partnerships-support" element={<PartnershipsSupport />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </SurveyProvider>
  );
}

export default App;
