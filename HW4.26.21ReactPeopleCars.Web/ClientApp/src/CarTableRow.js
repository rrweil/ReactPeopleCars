import React from 'react';

export default function CarTableRow ({car}){
    const {make, model, year} = car;
    return (
        <tr>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
    );
}