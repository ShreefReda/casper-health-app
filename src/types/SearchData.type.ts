import { SortOrderEnum } from "enums/SortOrder.enum";

export type SearchData = {
    query: string;
    gender: string;
    age: string;
    sortOption: SortOrderEnum;
  };
  