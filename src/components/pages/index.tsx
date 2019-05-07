import * as React from "react";
import { useState, useEffect } from "react";

import { Header, SearchResult } from "../organisms";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ApiClient, { SearchResponse } from "../../services/api/apiClient";

function App() {
  const [query, setQuery] = useState("花火");
  const [searchResult, setSearchResult] = useState<SearchResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await ApiClient.search(query);
      setSearchResult(result);
    };

    fetchData();
  }, [query]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header onSubmit={setQuery} />
      <Container>
        <SearchResult items={searchResult} />
      </Container>
    </React.Fragment>
  );
}

export default App;
