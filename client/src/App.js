import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./createApolloClient";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LandingPage from "./components/LandingPage.jsx";

const theme = createMuiTheme();
const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
