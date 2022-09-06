import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardLaunchpad from "./components/Card";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CardLaunchpad name="pikachu" />
      </div>
    </ApolloProvider>
  );
}

export default App;
