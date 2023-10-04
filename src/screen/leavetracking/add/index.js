import React, { useState } from "react";
// import { AppBarButtonWrapper } from "../../../ulcomponents/wrapper/appbarbutton";
import { Lable, MulButton } from "../../../ulcomponents/atom";
// import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 70, // You can adjust the font size as needed
    fontWeight: "bold",
  },
  addButton: {
    fontSize: 70, // You can adjust the font size as needed

    backgroundColor: "violet", // Change this to your desired button color
    // color: '#fff', // Text color
    // borderRadius: '5px', // Border radius
    // padding: '0.5rem 1rem', // Padding
    // cursor: 'pointer',
  },
}));

function Add() {
  const { openDialog, setOpenDialog } = useState(false);
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      justifyContent="space-between"
      alignContent={"space-around"}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>
          <Lable variant={"h5"} label="Leave List" className={classes.title} />
        </Grid>
        <Grid>
          <MulButton
            classes="create-button"
            child="+ ADD"
            variant="contained"
            className={classes.addButton}
            handleClick={() => {
              setOpenDialog(true);
            }}
          />
        </Grid>
      </Grid>
      {/* {openDialog && (
        <CreateCutomerDialog
          handleClose={() => {
            dispatch(setOpenDialog(false));
          }}
          open={openDialog}
          formData={formData}
          sendData={sendData}
          handleChangeInputs={handleChangeInputs}
          // onClick={handleClick}
          // snackBarOpen={snackBarOpen}
          // autoHideDuration={3000}
          // onClose={snackBarhandleClose}
          // message="customer created successfully"
        />
      )} */}
    </Grid>
  );
}
export default Add;
