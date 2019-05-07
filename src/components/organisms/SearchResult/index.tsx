import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ItemGridList } from "../";
import Grid from "@material-ui/core/Grid";
import { SearchResponse } from "../../../services/api/apiClient";

const useStyles = makeStyles(theme => ({
  result: {
    padding: theme.spacing(2),
    paddingRight: "0px",
    textAlign: "right"
  }
}));

interface SearchResultProps {
  items: SearchResponse[];
}

const SearchResult: React.FC<SearchResultProps> = ({
  items
}: SearchResultProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item xs={2}>
          <div className={classes.result}>検索件数: {items.length}件</div>
        </Grid>
      </Grid>
      <ItemGridList items={items} />
    </React.Fragment>
  );
};

export default SearchResult;
