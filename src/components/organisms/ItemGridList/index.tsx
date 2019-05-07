import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Item } from "../";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

// interface ItemGridListProps {}

const ItemGridList: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Item />
        </Grid>
        <Grid item xs={2}>
          <Item />
        </Grid>
        <Grid item xs={2}>
          <Item />
        </Grid>
        <Grid item xs={2}>
          <Item />
        </Grid>
        <Grid item xs={2}>
          <Item />
        </Grid>
        <Grid item xs={2}>
          <Item />
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemGridList;
