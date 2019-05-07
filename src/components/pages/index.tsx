import * as React from "react";
import { Header, SearchResult } from "../organisms";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import ApiClient from "../../services/api/apiClient";

function App() {
  const handlerSubmit = async () => {
    // const result = await ApiClient.search("花火");
    // console.log(result);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header onSubmit={handlerSubmit} />
      <Container>
        <SearchResult />
      </Container>
    </React.Fragment>
  );
}

export default App;
