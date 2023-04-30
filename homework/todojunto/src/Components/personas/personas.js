import { Component } from "react";

class Personas extends Component {
    constructor(props){
        super(props);

        this.state = {
            age: this.props.age,

        }
    }

changeState =() => {
console.log('cambiando estado');
this.setState (
{
    age: this.state.age + 1
}
)
}

    render() { 
        const {firstName, lastName, age, hairColor} = this.props;
    
            return (
<div>
    Name: {firstName} <br/>
    Last Name: {lastName} <br />
    Age: {this.state.age} <br />
    Hair Color: {hairColor} <br />
    <button onClick={this.changeState}> Birthday Button for {firstName} {lastName} </button> <br />

</div>




        );
    }
}

export default Personas; 