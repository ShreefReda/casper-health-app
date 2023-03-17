import { Patient } from "types/Patient.type";

const patientsData = require("data/mock_data.json");

interface PatientData {
  patient_id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  avatar: string;
}

const intialPatients: Patient[] = patientsData.map((data: PatientData) => ({
  id: data.patient_id.toString(),
  firstName: data.first_name,
  lastName: data.last_name,
  fullName: `${data.first_name + ' ' + data.last_name}`,
  age: data.age,
  gender: data.gender,
  email: data.email,
  avatar: data.avatar
}));


const patientService = {
  getAllPatients: (): Promise<Patient[]> => {
    return Promise.resolve(intialPatients);
  },

  getPatientById: (id: string, patients: Patient[]): Patient | undefined => {
    return patients.find((p: { id: string; }) => p.id === id);
  },

  deletePatient: (id: string, patients: Patient[]): void => {
    const index = patients.findIndex((pateint: { id: string; }) => pateint.id === id);
    if (index !== -1) {
      patients.splice(index, 1);

    }
  },
};

export default patientService;
