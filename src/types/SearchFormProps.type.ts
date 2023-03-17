import { SearchData } from "./SearchData.type";
import { GenderFilterEnum } from "enums/GenderFilter.enum";
import { SortOrderEnum } from "enums/SortOrder.enum";
import { AgeFilterEnum } from "enums/AgeFilter.enum";

export type SearchFormProps = {
    searchData: SearchData
    onSearch: (query: string) => void;
    onSort: (query: SortOrderEnum) => void;
    onGenderFilter: (query: GenderFilterEnum) => void;
    onAgeFilterChange: (query: AgeFilterEnum) => void;
  };