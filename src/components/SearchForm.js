//import react module
import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../styles/SearchForm.css";

const SearchForm = (props) => {

    return (
        <Row>
            <Col></Col>
            <Col className="searchbox pb-3">
                <div>
                    <form>
                        <input
                            onChange={e => props.handleInputChange(e)}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control mr-sm-2"
                            placeholder="Search Employee"

                        />
                        <button onClick={props.handleFormSubmit}>SEARCH</button>
                    </form>
                </div>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default SearchForm;
