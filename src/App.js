//import react module
import React from "react";
//import the components for the main page 
import Main from "./components/Main";
import SearchForm from "./components/SearchForm"
import Table from "./components/Table"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import EmployeeTable from "./components/SearchResultContainer";
// import "./App.css";
//function that returns the component SearchResultContainer
function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
        <Header />
        <EmployeeTable />

        <Main />
      {/* </Wrapper> */}
    </div>
  );

}

export default App;
