import React from "react";
import Table from 'react-bootstrap/Table';

const EmpTable = ({results}) => {

console.log(results)

    return (


        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Cell Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {results.map(emp =>
                <tr>
                    <td><img src={emp.picture.medium}></img></td>
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