import { createSelector } from "@reduxjs/toolkit";

export const selectSigns = (state) => state.signs;

export const selectFilters = (state) => state.filters;

export const filteredSigns = createSelector(
  [selectSigns, selectFilters],
  ({ signs }, { filters }) => {
    return signs
      .filter((sign) =>
        filters.category && filters.category !== "All"
          ? sign.category === filters.category
          : true
      )
      .filter((sign) =>
        sign.name
          .toLowerCase()
          .trim()
          .includes(filters.keyword.toLowerCase().trim())
      )
      .sort((a, b) =>
        filters.sort && filters.sort !== "by-default"
          ? filters.sort === "price-low-to-high"
            ? a.price - b.price
            : b.price - a.price
          : null
      );
  }
);
