//import react module
import React from "react";
import "../styles/searchbox.css";

const SearchForm = (props) => {

    return (
        <form>
            <div className="searchbox">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={e => props.handleInputChange(e)}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search Employee"
                   
                />
                <button onClick={props.handleFormSubmit}>SEARCH</button>
            </div>
        </form>
    );
}

export default SearchForm;
