import React, { Component } from 'react';
 
class Hola extends Component {
  constructor() {
    super();
 


    this.state = {
        contador: 0,
        contacts: ["a", 1],
        name: "",
        email: "",
        mi_reg: [{"name": 44,
                  "email": 2}],
      };
  }

  disminuirContador = () => {
    // Importante no modificar directamente el estado, si no usar setState
    // y pasarle la clave del objeto a modificar y su nuevo valor
    this.setState({contador: this.state.contador - 1});
    console.log ('el log');
}

  aumentarContador = () => {
      // Importante no modificar directamente el estado, si no usar setState
      // y pasarle la clave del objeto a modificar y su nuevo valor
      this.setState({contador: this.state.contador + 1});
      console.log ('el log');
  }

  apiCall = () => {
    fetch('http://localhost:3001/hola')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
            this.setState({ name: this.state.contacts[this.state.contador]["name"] })
            this.setState({ email: this.state.contacts[this.state.contador]["email"] })
            console.log (this.state.contacts[this.state.contador]);
            console.log (this.state.name);
        })
        .catch(console.log)

}


  render() {
    return (

      <div>
          <h1>Hola {this.props.nombre}</h1>
          {/* Al método onClick le asignamos un método.
          Importante poner la C de onClick en mayúsculas */}
          <span>{this.state.contador}</span>
          <button onClick={this.disminuirContador}>-</button>
          <button onClick={this.aumentarContador}>+</button>
          <button onClick={this.apiCall}>*</button>
          {/*<span>{this.state.name}</span>
          <span2>{this.state.email}</span2> */}
          <span2>{this.state.contacts[this.state.contador]["name"]}</span2>
          <span2>{this.state.contacts[this.state.contador]["email"]}</span2>
          <span2>{this.state.contacts[this.state.contador]["phone"]}</span2>

          {this.state.contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                    </div>
                </div>
          ))}

    </div>
);
  }
}
 
export default Hola;