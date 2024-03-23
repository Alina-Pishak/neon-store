import {
  Backdrop,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalWindow = ({ handleClose, open, sign }) => {
  const matches = useMediaQuery("(max-width:767px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "250px" : "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: matches ? 3 : 4,
    borderRadius: "12px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Card sx={style}>
          <CloseIcon
            onClick={handleClose}
            style={{ position: "absolute", top: "7px", right: "7px" }}
          />
          <CardMedia
            component="img"
            alt={sign.name}
            height={matches ? "250px" : "400px"}
            image={sign.img}
            sx={{ borderRadius: "12px", marginBottom: "12px" }}
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography gutterBottom variant="h5">
              {sign.name}
            </Typography>
            <Typography variant="body2" mb={2}>
              {sign.description}
            </Typography>
            <Typography variant="h6">{sign.price}$</Typography>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
