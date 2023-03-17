import React from "react";

import { useNavigate } from "react-router-dom";

import SearchForm from "components/searchFormComponent";

import { SearchData } from "types/SearchData.type";
import { SortOrderEnum } from "enums/SortOrder.enum";
import { AgeFilterEnum } from "enums/AgeFilter.enum";
import { GenderFilterEnum } from "enums/GenderFilter.enum";
import { Patient } from "types/Patient.type";

import Table from "shared/tableComponent/TableComponent";

import "./PatientListComponent-styles.css";

type Props = {
  patients: Patient[];
  searchData: SearchData;
  onSearch: (query: string) => void;
  onSort: (sortOption: SortOrderEnum) => void;
  onAgeFilterChange: (ageFilter: AgeFilterEnum) => void;
  onGenderFilter: (genderFilter: GenderFilterEnum) => void;
};

const PatientListComponent: React.FC<Props> = ({
  patients,
  searchData,
  onSearch,
  onSort,
  onGenderFilter,
  onAgeFilterChange,
}) => {
  const navigate = useNavigate();
  const navigateToPatientDetails = (id: string) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="patient-list">
      <SearchForm
        searchData={searchData}
        onSearch={onSearch}
        onSort={onSort}
        onGenderFilter={onGenderFilter}
        onAgeFilterChange={onAgeFilterChange}
      />
      <Table
        data={patients}
        columnNames={["id", "Full Name"]}
        dataValues={["id", "fullName"]}
        noDataFoundMsg={"No Patients Found"}
        onRowClick={navigateToPatientDetails}
      />
    </div>
  );
};

export default PatientListComponent;
