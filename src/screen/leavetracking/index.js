import React from "react";
import { Grid } from "@mui/material";

import List from "./list";
import Add from "./add";

function Leavetracking() {
  return (
    <Grid
      container
      className="page-grid"
      // alignContent={"end"}
      justifyContent="center"
      spacing={2}
      flexDirection="column">
      <Add />
      <List />
    </Grid>
  );
}

export default Leavetracking;
