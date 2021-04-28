import React from 'react';
import axios from 'axios';
import CarTableRow from './CarTableRow';
import {Link} from 'react-router-dom';

class DeleteCars extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/people/getpersonbyid?id=${id}`)
        this.setState({ person: data });
    }

    onDeleteCarsClick = async () => {
        await axios.post('/api/people/deletecars', {Cars: this.state.person.cars});
        this.props.history.push('/');
    }


    render() {
        const { cars } = this.state.person;
        return (
            <>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cars.map(car => {
                                return (
                                    <CarTableRow
                                        car={car}
                                        key={car.id}
                                    />
                                )
                            })
                            }
                        </tbody>
                </table>
                <h2>Are you sure that you want to delete all of these cars?</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Link to="/">
                        <button className="btn btn-primary btn-block btn-lg">No</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger btn-block btn-lg" onClick={this.onDeleteCarsClick} >Yes</button>
                    </div>
                </div>
            </>

        );
    }
}

export default DeleteCars;

