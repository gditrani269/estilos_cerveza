import React, { Component } from 'react';

import Functions from './Functions'

import Hola from '../Hola'
class Estilo extends Component {
    constructor() {
        super();
 


        this.state = {
            contador: 0,
            contacts: [],
            receta: [0],
            stack: "",
            setStack: "",
        };
    }

    apiCall = () => {
        console.log ("------ Apicall --------------");
        fetch('http://localhost:3001/hola')
            .then(res => res.json())
            .then((data) => {
                this.setState({ receta: data })
                console.log ("------ Estilos --------------");
                console.log (this.state.receta);
                console.log ("------ Estilos --------------");
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <p align="center">E s t i l o s</p>
                {/* Al método onClick le asignamos un método.
                Importante poner la C de onClick en mayúsculas */}
                {/* <span>{this.state.contador}</span>
                <button onClick={this.apiCall}>"E s t i l o s"</button>*/}
                <table class="default">
                    <tr>
                    <td>
                        <table class="default"></table>{this.state.contacts.map((contact) => (
                            <div class="card">
                                <div class="card-body">
                                    {/*<h5 class="card-title">{contact.estilo}</h5>*/}
                                    {/*<button onClick={this.apiCall}>{contact.estilo}</button>*/}
                                    <Functions
                                        onContentClear={sasa => {
                                                console.log ("content clear sar", sasa)
                                                {
                                                    console.log ("------ loop --------------");
                                                    fetch('https://api-estilos.herokuapp.com/recetas2/'+sasa)
//                                                    fetch('http://localhost:8080/recetas2/'+sasa)
                                                        .then(res => res.json())
                                                        .then((data) => {
                                                            this.setState({ receta: data })
                                                            console.log ("------ Estilos --------------");
                                                            console.log (this.state.receta);
                                                            console.log (this.state.receta[0]["receta"]);
                                                            console.log ("------ Estilos --------------");
                                                        })
                                                        .catch(console.log)
                                                }
                                        }} inText={contact.estilo} 
                                    />
                                    
                                </div>
                            </div>
                        ))}
                        </td>
                        <td>
                            
                            {this.state.receta.map((instruc) => (
                                <div>
                                    <h5>El estilo es {instruc.estilo}</h5>
                                    <Hola nombre={instruc.receta}/>
                                </div>
                            ))}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

    componentDidMount() {
        fetch('https://api-estilos.herokuapp.com/db2')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
                console.log (this.state.contacts);
            })
            .catch(console.log)
    }

}
 
export default Estilo;