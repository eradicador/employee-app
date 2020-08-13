import React from "react";
import Table from 'react-bootstrap/Table';
import "../styles/Table.css"

function EmpTable(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={props.sortByName}>First Name</th>
                    <th>Last Name</th>
                    <th>Cell Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(emp =>
                    <tr>
                        <td><img src={emp.picture.medium} alt="users pictures"></img></td>
                        <td>{emp.name.first}</td>
                        <td>{emp.name.last}</td>
                        <td>{emp.cell}</td>
                        <td>{emp.email}</td>
                        <td>{emp.dob.age}</td>

                    </tr>
                )}

            </tbody>
        </Table>
    )
}
export default EmpTable;