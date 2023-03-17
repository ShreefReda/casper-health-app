// SearchResultContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import patientService from "services/patientService";

import { Patient } from "types/Patient.type";

interface PatientContextData {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const PatientContext = createContext<PatientContextData>(
  {} as PatientContextData
);

export const usePatientContext = () => useContext(PatientContext);

export const PatientContextProvider: React.FC<any> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const patients: Patient[] = await patientService.getAllPatients();
      setPatients(patients);
    };
    fetchData();
  },[patients]);
  return (
    <PatientContext.Provider
      value={{
        patients,
        setPatients,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
