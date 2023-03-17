import { AgeFilterEnum } from 'enums/AgeFilter.enum';
import { GenderFilterEnum } from './../enums/GenderFilter.enum';

import { SortOrderEnum } from "enums/SortOrder.enum";
import { Patient } from "types/Patient.type";
import { Filters } from "types/Filters.type";

const sortByName = (patients: Patient[], sortOrder: SortOrderEnum) => {
    if (sortOrder === SortOrderEnum.None) {
        return patients;
    }
    return patients.sort((a, b) => {
        const nameA = a.fullName.toLowerCase();
        const nameB = b.fullName.toLowerCase();

        if (nameA < nameB) {
            return sortOrder === SortOrderEnum.Ascending ? -1 : 1;
        }
        if (nameA > nameB) {
            return sortOrder === SortOrderEnum.Ascending ? 1 : -1;
        }
        return 0;
    });
};


const filterByNameIdEmail = (patient: Patient, query: string) => {
    const queryLowerCase = query.toLowerCase();
    return (
        patient.fullName.toLowerCase().includes(queryLowerCase) ||
        patient.id.toLowerCase().includes(queryLowerCase) ||
        patient.email.toLowerCase().includes(queryLowerCase)
    );
};

const filterByGender = (patient: Patient, genderFilter: GenderFilterEnum) => {
    return genderFilter === GenderFilterEnum.ALL || patient.gender === genderFilter;
};

const filterByAge = (patient: Patient, ageFilter: AgeFilterEnum) => {
    if (ageFilter === AgeFilterEnum.ALL) return true;

    const age = patient.age;
    if (ageFilter === AgeFilterEnum.FROM_18_TO_30) return age >= 18 && age <= 30;
    if (ageFilter === AgeFilterEnum.FROM_31_TO_45) return age >= 31 && age <= 45;
    if (ageFilter === AgeFilterEnum.ABOVE_45) return age > 45;

    return false;
};


export const applyFilters = (patients: Patient[], filters: Filters, sortOrder: SortOrderEnum
) => {
    const { query, genderFilter, ageFilter } = filters;
    const filteredPatients = patients.filter((patient) =>
        filterByNameIdEmail(patient, query) &&
        filterByGender(patient, genderFilter) &&
        filterByAge(patient, ageFilter)
    );

    return sortByName(filteredPatients, sortOrder);
};
