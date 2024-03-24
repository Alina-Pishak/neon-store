import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalWindow from "../Modal/Modal";

const ProductsListItem = ({ sign }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardMedia
          component="img"
          alt={sign.name}
          height="240"
          image={sign.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sign.name}
          </Typography>
          <Typography variant="body2">{sign.price}$</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{ bgcolor: "primary.main", color: "#fff" }}
            onClick={() => setShowModal(true)}
          >
            View more details
          </Button>
        </CardActions>
      </Card>
      {showModal &&
        createPortal(
          <ModalWindow
            handleClose={() => setShowModal(false)}
            open={showModal}
            sign={sign}
          />,
          document.body
        )}
    </>
  );
};

export default ProductsListItem;
