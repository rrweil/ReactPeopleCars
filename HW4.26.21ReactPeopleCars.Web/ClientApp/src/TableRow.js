import React from 'react';
import {Link} from 'react-router-dom';

export default function TableRow ({person}){
    const {firstName, lastName, age, cars, id} = person;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{cars.length}</td>
            <td>
                <Link to={`/AddCar/${id}`}>
                <button className="btn btn-primary">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/DeleteCars/${id}`}>
                <button className="btn btn-danger">Delete Cars</button>
                </Link>
            </td>
        </tr>
    );
}