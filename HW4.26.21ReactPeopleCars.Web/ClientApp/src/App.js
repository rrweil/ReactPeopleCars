import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPerson from './AddPerson';
import Layout from './Layout';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';

export default function App() {
    return (
        <Layout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/AddPerson" component={AddPerson} />
            <Route exact path="/AddCar/:id" component={AddCar} />
            <Route exact path="/DeleteCars/:id" component={DeleteCars} />
        </Layout>
    )
}