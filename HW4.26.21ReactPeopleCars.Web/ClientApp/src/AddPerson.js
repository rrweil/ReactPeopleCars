import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onSubmitClick = async () => {
        await axios.post('/api/people/addperson', this.state.person);
        this.props.history.push('/');
    }


    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
            <>
                <div className="row ">
                    <div className="col-md-6 offset-md-3 card-body bg-light mt-5">
                        <h1>Add New Person</h1>
                        <input type="text" name='firstName' className="form-control" placeholder="First Name" value={firstName} onChange={this.onTextChange}/>
                        <br />
                        <input type="text" name='lastName' className="form-control" placeholder="Last Name" value={lastName} onChange={this.onTextChange} />
                        <br />
                        <input type="text" name='age' className="form-control" placeholder="Age" value={age} onChange={this.onTextChange} />
                        <br />
                        <button className="btn btn-primary btn-block" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </>

        );
    }
}

export default AddPerson;