import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addPeople, addPerson, addCar, addCars} from "./actions"

class App extends React.Component {
    componentDidMount() {
        this.props.addPeop();
        this.props.addCars();
    }

    onAddPerson = () => {
        if (this.valueText.value.split('').some(el => el !== " ")) {
            this.props.addPerson(this.valueText.value);
            this.valueText.value = ""
        }
    };

    render() {
        console.log(this.props.people);
        return (
            <div>
                <div className="App">
                    <input type={"text"} placeholder="erunda" ref={(item) => this.valueText = item}/>
                    <button onClick={this.onAddPerson}>button</button>
                    <ul>
                        {this.props.people.map((person, index) => {
                            return <li key={index}>{person}</li>
                        })}
                    </ul>
                </div>

            </div>
        );
    }
}

export default connect(
    state => {
        return {
            people: state.peopleReducer.people,
            cars: state.carReducer.cars,
        }
    },
    dispatch => {
        return {
            addPeop: () => {
                dispatch(addPeople());
            },
            addPerson: person => {
                dispatch(addPerson(person));
            },
            addCar: car => {
                dispatch(addCar(car));
            },
            addCars: () => {
                dispatch(addCars());
            }
        }
    }
)(App);
