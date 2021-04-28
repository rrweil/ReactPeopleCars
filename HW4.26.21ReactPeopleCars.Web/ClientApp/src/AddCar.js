import React from 'react';
import axios from 'axios';
import {produce} from 'immer';

class AddCar extends React.Component{
    
    state = {
        person: {}, 
        car: {
            make: '', 
            model: '', 
            year: ''
        }
    }

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {data} = await axios.get(`/api/people/getpersonbyid?id=${id}`)
        this.setState({person: data});
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmitClick = async () => {
        const {person, car} = this.state;
        await axios.post('/api/people/AddCar', {PersonId: person.id, Car: car});
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName } = this.state.person;
        const {make, model, year} = this.state.car;
        return (
            <>
                <div className="row ">
                    <div className="col-md-6 offset-md-3 card-body bg-light mt-5">
                        <h1>Add a Car for {firstName} {lastName}</h1>
                        <input type="text" name='make' className="form-control" placeholder="Make" value={make} onChange={this.onTextChange}/>
                        <br />
                        <input type="text" name='model' className="form-control" placeholder="Model" value={model} onChange={this.onTextChange} />
                        <br />
                        <input type="text" name='year' className="form-control" placeholder="Year" value={year} onChange={this.onTextChange} />
                        <br />
                        <button className="btn btn-primary btn-block" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </>

        );
    }


}

export default AddCar;