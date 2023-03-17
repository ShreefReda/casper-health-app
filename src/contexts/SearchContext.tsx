// SearchResultContext.tsx

import { AgeFilterEnum } from "enums/AgeFilter.enum";
import { GenderFilterEnum } from "enums/GenderFilter.enum";
import { SortOrderEnum } from "enums/SortOrder.enum";
import { createContext, useContext, useState } from "react";

interface SearchContextData {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  genderFilter: GenderFilterEnum;
  setGenderFilter: React.Dispatch<React.SetStateAction<GenderFilterEnum>>;
  ageFilter: AgeFilterEnum;
  setAgeFilter: React.Dispatch<React.SetStateAction<AgeFilterEnum>>;
  sortOption: SortOrderEnum;
  setSortOption: React.Dispatch<React.SetStateAction<SortOrderEnum>>;
}

const SearchContext = createContext<SearchContextData | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchContextProvider: React.FC<any> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState(GenderFilterEnum.ALL);
  const [ageFilter, setAgeFilter] = useState(AgeFilterEnum.ALL);
  const [sortOption, setSortOption] = useState(SortOrderEnum.None);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        genderFilter,
        setGenderFilter,
        ageFilter,
        setAgeFilter,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
