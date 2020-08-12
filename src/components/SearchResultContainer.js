//import react module
import React, { Component } from "react"
import API from "../utils/API";
import SearchBox from "./SearchForm"
import EmpTable from "./Table"


class EmployeeTable extends Component {
    //search starts as an empty string
    //employess and filteredEmployess are empty arrays because that it's the structure of the data we'll be working with
    //order is the array the employees come by default, they come in ascending order
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""

    };
    // When this component mounts, the application loaded for the first time
    componentDidMount() {
      //search the randomuser API for people's information
        API.search().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }
    //if "First Name" it's clicked employee are shown by asc/desc order
    sortByName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "desc"
            })
        } else {

            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "asc"
            })
        }
    }
    //when typing in input, it will dynamically show the employees names that match in the table
    handleInputChange = event => {
        event.preventDefault();
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            //change the state of filteredEmployes and it holds all the employees that matches names typed
            filteredEmployees,
        });
    };
    //API call triggered when application it's loaded or refreshed
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                //holds both states data from the API call and will be passed down trough props like that
                //employee will remain the same and filteredEmployes will be changed and passed down during application's life. Employees will always hold all employess.
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }
    //when button search it's clicked, search the randomuser API for `this.state.search`
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;
        //filters the object looking for the value that matches the value entered in the input box by the user  (search.this.state)
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));
        this.setState({
            filteredEmployees
        });
    }
    render() {

        return (
            <div>
                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <EmpTable results={this.state.filteredEmployees}
                    sortByName={this.sortByName}
                />
            </div >
        )
    }
}

export default EmployeeTable