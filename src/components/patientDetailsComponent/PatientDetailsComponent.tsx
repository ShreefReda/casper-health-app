import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import ConfirmationModal from "shared/confirmationModalComponent";
import { Patient } from "types/Patient.type";
import "./PatientDetailsComponent-styles.css";

interface PatientDetailsProps {
  patient: Patient;
  isConfirmModalVisible: boolean;
  handleConfirmModalConfirm: () => void;
  handleDeleteClick: () => void;
  handleConfirmModalCancel: () => void;
}

const PatientDetailsComponent: React.FC<any> = ({
  patient,
  isConfirmModalVisible,
  handleConfirmModalConfirm,
  handleDeleteClick,
  handleConfirmModalCancel,
}: PatientDetailsProps) => {
  const navigate = useNavigate();

  return (
    <>
      {patient ? (
        <div className="patient-details-container">
          <div className="patient-details-body">
            <img src={patient.avatar} className="avatar" />
            <div className="patient-details-text">
              <h4 className="patient-details-name">{patient.fullName}</h4>
              <div className="patient-details-info">
                <div className="patient-details-info-row">
                  <div className="patient-details-info-label">ID:</div>
                  <div className="patient-details-info-value">{patient.id}</div>
                </div>
                <div className="patient-details-info-row">
                  <div className="patient-details-info-label">Email:</div>
                  <div className="patient-details-info-value">
                    {patient.email}
                  </div>
                </div>
                <div className="patient-details-info-row">
                  <div className="patient-details-info-label">Gender:</div>
                  <div className="patient-details-info-value">
                    {patient.gender}
                  </div>
                </div>
                <div className="patient-details-info-row">
                  <div className="patient-details-info-label">Age:</div>
                  <div className="patient-details-info-value">
                    {patient.age}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
            <button className="btn btn-danger" onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete Patient
            </button>
          </div>
          <ConfirmationModal
            show={isConfirmModalVisible}
            title={"Delete Patient"}
            body={`Are you sure you want to delete this patient #${patient.id}`}
            onConfirm={handleConfirmModalConfirm}
            onCancel={handleConfirmModalCancel}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PatientDetailsComponent;
