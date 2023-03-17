import React, { useEffect, useState } from "react";

import PatientListComponent from "components/patientListComponent";
import { useSearchContext } from "contexts/SearchContext";
import { usePatientContext } from "contexts/PatientContext";

import patientService from "services/patientService";
import { applyFilters } from "utils/filterPatients";

import { SortOrderEnum } from "enums/SortOrder.enum";
import { AgeFilterEnum } from "enums/AgeFilter.enum";
import { GenderFilterEnum } from "enums/GenderFilter.enum";
import { Filters } from "types/Filters.type";

const ListPage: React.FC = () => {
  const {
    query,
    setQuery,
    genderFilter,
    setGenderFilter,
    ageFilter,
    setAgeFilter,
    sortOption,
    setSortOption,
  } = useSearchContext();

  const { patients } = usePatientContext();

  const [filteredPatients, setFilteredPatients] = useState(patients);

  useEffect(() => {
    const fetchPatients = async () => {
      const patients = await  patientService.getAllPatients();
      const filters: Filters = {
        query: query,
        genderFilter: genderFilter,
        ageFilter: ageFilter,
      };
      const filteredPatients = applyFilters(patients, filters, sortOption);
      setFilteredPatients(filteredPatients);
    };
    fetchPatients();
  }, [patients, sortOption, query, genderFilter, ageFilter]);

  const handleSearchQueryChange = (query: string) => {
    setTimeout(() => {
      setQuery(query);
    }, 500);
  };

  const handleGenderFilterChange = (gender: GenderFilterEnum) => {
    setGenderFilter(gender);
  };

  const handleAgeFilterChange = (age: AgeFilterEnum) => {
    setAgeFilter(age);
  };

  const handleSortChange = (sortOption: SortOrderEnum) => {
    setSortOption(sortOption);
  };

  return (
    <>
      <PatientListComponent
        searchData={{
          query: query,
          gender: genderFilter,
          age: ageFilter,
          sortOption: sortOption,
        }}
        patients={filteredPatients}
        onSearch={handleSearchQueryChange}
        onGenderFilter={handleGenderFilterChange}
        onAgeFilterChange={handleAgeFilterChange}
        onSort={handleSortChange}
      />
    </>
  );
};

export default ListPage;
