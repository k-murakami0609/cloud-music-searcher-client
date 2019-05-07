import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Item } from "../";
import { SearchResponse } from "../../../services/api/apiClient";

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

interface ItemGridListProps {
  items: SearchResponse[];
}

const ItemGridList: React.FC<ItemGridListProps> = ({
  items
}: ItemGridListProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map(item => {
          return (
            <Grid item xs={3} key={item.url}>
              <Item item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ItemGridList;
