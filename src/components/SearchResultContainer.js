//import react module
import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import EmpTable from "./Table";


class EmployeeTable extends Component {
  state = {
    search: "",
    results: [],
    original: []
  };


  // When this component mounts, search the randomuser API for people's information
  componentDidMount() {
    console.log("results:", this.state.results)
    this.searchEmployee();
  }

  searchEmployee = () => {
    console.log("search")
    API.search()
      .then(res => {
        console.log("data:", res)
        this.setState({ results: res.data.results, original: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("---->", name, value)
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("name search: ", this.state.search)
    // let newData = original.filter(emp=> emp.name.first.include(this.state.search) filter de array sobre el original
    // let newData = original.filter(emp => emp.name.first.include(this.state.search)
    // update the results this.setState({results: newData})
    // this.setState({results: newData})
    // this.searchEmployee(this.state.search);
    // this.searchEmployee(this.state.search)
    };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.results.length > 0 ?
          (<EmpTable results={this.state.results} />) : (<p></p>)
        }
      </div>
    );
  }
}

export default EmployeeTable;
