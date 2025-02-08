import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
  const [formData, setFormData] = useState({
    challenges: "",
    customerAcquisition: "",
    experience: "",
    feasibility: "",
    funding: "",
    goal: "",
    innovation: "",
    marketSize: "",
    milestones: "",
    partnerships: "",
    plan: "",
    problem: "",
    prototype: "",
    revenueModel: "",
    roles: "",
    stage: "",
    summary: "",
    support: "",
    teamMembers: "",
    users: "",
  });

  return (
    <SurveyContext.Provider value={{ formData, setFormData }}>
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  return useContext(SurveyContext);
}
