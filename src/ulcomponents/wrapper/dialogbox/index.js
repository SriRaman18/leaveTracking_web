import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { MulButton } from "../../atom";
import "./dialogstyle.css";
import MuiSnackbar from "../../atom/snackbar";
import { setSnackBarOpen } from "../../../redux/slices/screens";
import { useSelector, useDispatch } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function DialogWrapper({
  children,
  handleClose,
  // changeSendValue,
  // onSave,
  sendData,
  open,
  fullWidth = true,
  maxWidth = "md",
  title = "",
  confirmText = "Save",
  closeText = "Close",

  // onClick,
  // snackBarOpen,
  // autoHideDuration,
  // onClose,
  // message,
}) {
  const dispatch = useDispatch();

  const snackBarOpen = useSelector((state) => state.screens.snackBarOpen);

  const handleClick = () => {
    dispatch(setSnackBarOpen(true));
  };

  const snackBarhandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackBarOpen(false));
  };

  return (
    <BootstrapDialog
      id="dialog-wrapper"
      onClose={handleClose}
      aria-labelledby={`${title}_dialog_title`}
      open={open}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id={`${title}_dialog_title`}>
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <MulButton
          handleClick={handleClose}
          child={closeText}
          variant="contained"
        />
        <MulButton
          classes="confirm-button"
          handleClick={() => {
            handleClick();
            handleClose();
            sendData();
          }}
          child={confirmText}
          variant="contained"
        />
        <MuiSnackbar
          // onClick={onClick}
          snackBarOpen={snackBarOpen}
          autoHideDuration={3000}
          onClose={snackBarhandleClose}
          message="customer created success"
        />
      </DialogActions>
    </BootstrapDialog>
  );
}

export { DialogWrapper };
