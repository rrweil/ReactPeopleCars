import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';

class HomePage extends React.Component {

    state = {
        people: [],
        searchText: '',
        searchResults: []
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/people/getpeople');
        this.setState({ people: data });
    }

    onTextChange = e => {
        this.setState({ searchText: e.target.value });
        const searchResults = this.state.people.filter(person => {
            const combinedName = `${person.firstName} ${person.lastName}`;
            return combinedName.toLowerCase().includes(this.state.searchText.toLowerCase())
        });
        this.setState({ searchResults });
    }

    onClearClick = () => {
        this.setState({searchText: ''});
    }

    render() {
        return (
            <>

                <div>
                    <div className="row">
                        <div className="col-md-9">
                            <input type="text" className="form-control form-control-lg mb-4" placeholder="Search People" onChange={this.onTextChange} value={this.state.searchText} />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-lg btn-info btn-block" onClick={this.onClearClick}>Clear</button>
                        </div>
                    </div>
                    <Link to='/addperson'>
                        <button className="btn btn-success btn-block btn-lg">Add Person</button>
                    </Link>
                    <table className="table table-bordered table-hover table-striped mt-3">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Car Count</th>
                                <th>Add Car</th>
                                <th>Delete Cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!this.state.searchText.length == 0 &&

                                this.state.people.map(person => {
                                    return (
                                        <TableRow
                                            person={person}
                                            key={person.id}
                                        />
                                    )
                                })
                            }
                            {!!this.state.searchText.length > 0 &&

                                this.state.searchResults.map(person => {
                                    return (
                                        <TableRow
                                            person={person}
                                            key={person.id}

                                        />
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </>

        )

    }
}
export default HomePage;