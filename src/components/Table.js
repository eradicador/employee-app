import React from "react";
import Table from 'react-bootstrap/Table';

const EmpTable = ({results}) => {

console.log(results)

    return (


        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {results.map(emp =>
                <tr>
                    <td><img src={emp.picture.thumbnail}></img></td>
                    <td>{emp.name.first}</td>
                    <td>{emp.name.last}</td>
                    <td>{emp.email}</td>
                    <td>{emp.dob.date}</td>
                    
                </tr>
                )}
               
            </tbody>
        </Table>
    )
}
export default EmpTable;