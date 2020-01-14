import React, { Component } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
      citas: []
  };

  crearNuevaCita = datos => {
    const citas = [
        ...this.state.citas,
        datos
    ];
    this.setState({
        citas
    });
  };

  render() {
    return (
        <div className="container">
          <Header
            titulo='Administrador de Pacientes'
          />
          <div className="container">
            <div className="row">
                <div className="one-half column">
                  <Formulario
                    crearNuevaCita={this.crearNuevaCita}
                  />
                </div>

                <div className="one-half column">
                  <ListaCitas
                    citas={this.state.citas}
                  />
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
