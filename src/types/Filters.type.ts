import { GenderFilterEnum } from 'enums/GenderFilter.enum';
import { AgeFilterEnum } from 'enums/AgeFilter.enum';

export type Filters = {
    query: string;
    genderFilter: GenderFilterEnum;
    ageFilter: AgeFilterEnum;
}