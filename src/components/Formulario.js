import React, { Fragment, useState } from "react";
import uuid from 'uuid';


const Formulario = ({crearNuevaCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const handleChange = e => {
        actualizarCita({
            ...cita,
           [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === ''
            || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={handleSubmit}
            >
                <label>
                    Nombre Mascota
                </label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    name="mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>
                    Nombre Dueño
                </label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    name="propietario"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>
                    Fecha
                </label>
                <input
                    type="date"
                    className="u-full-width"
                    name="fecha"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>
                    Hora
                </label>
                <input
                    type="time"
                    className="u-full-width"
                    name="hora"
                    onChange={handleChange}
                    value={hora}
                />

                <label>
                    Síntomas
                </label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describe los síntomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Cita"
                />
            </form>
        </Fragment>
    );

}

export default Formulario;