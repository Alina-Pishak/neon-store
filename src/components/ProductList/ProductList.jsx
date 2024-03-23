import { useDispatch, useSelector } from "react-redux";
import { filteredSigns } from "../../redux/products/selectors";
import { getSignsThunk } from "../../redux/products/thunks";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import ProductsListItem from "../ProductsListItem/ProductsListItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const signs = useSelector(filteredSigns);
  useEffect(() => {
    dispatch(getSignsThunk());
  }, [dispatch]);
  const handleChange = (_, p) => {
    setPage(p);
  };
  const totalPages = Math.ceil(signs.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSigns = signs.slice(startIndex, endIndex);
  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        {currentSigns.map((sign) => (
          <Grid item xs={12} sm={6} md={4} key={sign.id}>
            <ProductsListItem sign={sign} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        color="primary"
        size="large"
        page={page}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      />
    </>
  );
};

export default ProductList;
