import React, { Component } from "react";
import "./App.css";
import { Alert } from "reactstrap";

import LoadButton from "./LoadButton";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

function App() {
    return (
      <div className="App">
        <Alert color="info">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </Alert>
        <LoadButton />
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }

export default App;
