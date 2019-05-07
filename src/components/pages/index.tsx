import * as React from "react";
import { useState, useEffect } from "react";

import { Header, SearchResult } from "../organisms";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ApiClient, { SearchResponse } from "../../services/api/apiClient";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  const [query, setQuery] = useState("花火");
  const [searchResult, setSearchResult] = useState<SearchResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await ApiClient.search(query);
        setSearchResult(result);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header onSubmit={setQuery} />
      <Container>
        {isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <SearchResult items={searchResult} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
