import React from "react";
import { SearchContextProvider } from "./SearchContext";
import { PatientContextProvider } from "./PatientContext";

interface CombinedProviderProps {
  children: React.ReactNode;
}

const CombinedProvider: React.FC<CombinedProviderProps> = ({ children }) => {
  return (
    <PatientContextProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </PatientContextProvider>
  );
};

export default CombinedProvider;