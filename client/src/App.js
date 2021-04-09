import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./createApolloClient";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Products, AppBar } from "./components";

const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <AppBar />
          <Products />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
