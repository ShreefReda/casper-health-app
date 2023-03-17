import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PatientDetailsComponent from "components/patientDetailsComponent";
import { usePatientContext } from "contexts/PatientContext";
import patientService from "services/patientService";
import { Patient } from "types/Patient.type";

import "./PatientDetailsPage-styles.css";

const DetailPage: any = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { patients } = usePatientContext();
  const [patient, setPatient] = useState<Patient | undefined>(undefined);
  const [isConfirmModalVisible, setIsConfirmModalVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchPatient = async () => {
      const fetchedPatient = id && patientService.getPatientById(id, patients);
      setPatient(fetchedPatient as Patient);
    };

    fetchPatient();
  }, [id,patients]);

  const handleDelete = async () => {
    if (patient) {
      patientService.deletePatient(patient.id, patients);
      navigate(-1);
    }
  };

  const handleConfirmModalConfirm = () => {
    setIsConfirmModalVisible(false);
    handleDelete();
  };

  const handleConfirmModalCancel = () => {
    setIsConfirmModalVisible(false);
  };

  const handleDeleteClick = () => {
    setIsConfirmModalVisible(true);
  };

  return (
    <>
      <div className="details-header">
        <h1 className="details-title">Patient Details</h1>
      </div>
      <PatientDetailsComponent
        patient={patient}
        handleConfirmModalConfirm={handleConfirmModalConfirm}
        handleConfirmModalCancel={handleConfirmModalCancel}
        isConfirmModalVisible={isConfirmModalVisible}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default DetailPage;
