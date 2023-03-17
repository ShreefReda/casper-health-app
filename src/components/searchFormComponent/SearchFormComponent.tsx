import React from "react";
import { useState } from "react";
import { SortOrderEnum } from "enums/SortOrder.enum";
import { SearchFormProps } from "types/SearchFormProps.type";
import { AgeFilterEnum } from "enums/AgeFilter.enum";
import { GenderFilterEnum } from "enums/GenderFilter.enum";

import "./SearchFormComponent-styles.css";

const SearchForm = ({
  searchData,
  onSearch,
  onSort,
  onGenderFilter,
  onAgeFilterChange,
}: SearchFormProps) => {
  const { query, gender, age, sortOption } = searchData;
  const [searchText, setSeachText] = useState(query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeachText(value);
    onSearch(value);
  };

  const handleGenderFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value as GenderFilterEnum;
    onGenderFilter(value);
  };

  const handleAgeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as AgeFilterEnum;
    onAgeFilterChange(value);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOrderEnum;
    onSort(value);
  };

  return (
    <div className={"form-control"}>
      {/* <form> */}
      {/* <Form.Label>Search : </Form.Label> */}
      <h1 className={"form-title"}>Patient List</h1>
      <div className={"form-inputs"}>
        <input
          type="text"
          className={""}
          placeholder="Search by name, ID or email"
          value={searchText}
          onChange={handleInputChange}
        />

        {/* <Form.Label>Gender: </Form.Label> */}
        <label>Gender:</label>
        <select
          className={""}
          value={gender}
          onChange={handleGenderFilterChange}
        >
          <option value={GenderFilterEnum.ALL}>All</option>
          <option value={GenderFilterEnum.MALE}>Male</option>
          <option value={GenderFilterEnum.FEMALE}>Female</option>
        </select>

        <label>Age Filter: </label>
        <select value={age} onChange={handleAgeFilterChange}>
          <option value={AgeFilterEnum.ALL}>All</option>
          <option value={AgeFilterEnum.FROM_18_TO_30}>18-30</option>
          <option value={AgeFilterEnum.FROM_31_TO_45}>31-45</option>
          <option value={AgeFilterEnum.ABOVE_45}> &gt; 45</option>
        </select>

        <label>Sort by: </label>
        <select value={sortOption} onChange={handleSort}>
          <option value={SortOrderEnum.None}>None</option>
          <option value={SortOrderEnum.Ascending}>Ascending</option>
          <option value={SortOrderEnum.Descending}>Descending</option>
        </select>

        {/* </form> */}
      </div>
    </div>
  );
};

export default SearchForm;
