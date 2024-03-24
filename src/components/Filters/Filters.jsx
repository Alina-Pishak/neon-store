import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import categories from "../../data/categories.json";
import { setFilters } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";

const Filters = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const setChangeFilters = ({ target }) => {
    if (target.name === "sort") {
      setSort(target.value);
    } else if (target.name === "category") {
      setCategory(target.value);
    } else {
      setKeyword(target.value);
    }
    dispatch(setFilters({ [target.name]: target.value }));
  };

  return (
    <Box
      component={"form"}
      sx={{
        marginBottom: "50px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        paddingTop: "20px",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={setChangeFilters}
          name="category"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-by-select-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-select"
          id="sort-by-select"
          value={sort}
          label="Sort by"
          onChange={setChangeFilters}
          name="sort"
        >
          <MenuItem value="by-default">By default</MenuItem>
          <MenuItem value="price-low-to-high">Price low to high</MenuItem>
          <MenuItem value="price-high-to-low">Price high to low</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          id="keyword-input"
          label="Find product by name"
          variant="filled"
          value={keyword}
          onChange={setChangeFilters}
          name="keyword"
        />
      </FormControl>
    </Box>
  );
};

export default Filters;
