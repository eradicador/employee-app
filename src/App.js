//import react module
import React from "react";
//import the components for the main page 
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import "./App.css";
//function that returns the component SearchResultContainer
function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
        <Header />
        {/* <Main />
      </Wrapper> */}
    </div>
  );

}

export default App;
