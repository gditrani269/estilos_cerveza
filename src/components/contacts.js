//import React from 'react'
import React, { Component } from 'react';
// Importamos nuestro componente

const Contacts = ({contacts}) => {
    return (
        
        <div>

            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                        {/*Incluimos nuestro componente*/}
                        <h8><OtroSaludo/></h8>
                    </div>
                </div>
            ))}
        </div>
    )
};

class OtroSaludo extends Component {
    constructor() {
        super();
     

 
        this.state = {
            contador: 0,
            contacts: []
          };
      }

    aumentarContador = () => {
        // Importante no modificar directamente el estado, si no usar setState
        // y pasarle la clave del objeto a modificar y su nuevo valor
        this.setState({contador: this.state.contador + 1});
        console.log ('el log');
    }

     
    apiCall = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
                console.log (this.state.contacts);
                console.log ("this.state.contacts");
            })
            .catch(console.log)
            console.log (this.state.contacts[this.state.contador]);
            
    }




    render() {
      return (

        <div>
            {/* Al método onClick le asignamos un método.
            Importante poner la C de onClick en mayúsculas */}
            <span>{this.state.contador}</span>
            <button onClick={this.aumentarContador}>+</button>
            <button onClick={this.apiCall}>*</button>
            <Contacts contacts={this.state.contacts} />
      </div>
        )
    }
  }

export default Contacts