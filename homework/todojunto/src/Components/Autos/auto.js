import { Component } from "react";



class Autos extends Component {
    render() { 
        const {marca,color,anio,price} = this.props;
        return (

<div>
<h1>Modelo Auto</h1>
marca: {marca} <br />
Color : {color} <br />
Anio: {anio} <br />
Price: {price} <br />


</div>

        );
    }
}
 
export default Autos;