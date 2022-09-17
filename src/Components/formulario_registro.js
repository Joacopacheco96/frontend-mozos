import { useState } from "react";
import Boton from "./boton";
import "./registro.css"

const Registro = ({agregarUsuario}) => {
    const [datos, cambiardatos] = useState({nombre: "", mail: "", telefono: ""})

    const manejarDatos = (e) => {
        const quecambiar = e.target.id
        const valorNuevo = e.target.value
        cambiardatos({ ...datos, [quecambiar]: valorNuevo })
    }
    // el [quecambiar] es el valor de la variable quecambiar

    // ...datos === {nombre: datos.nombre, mail: datos.mail, telefono: datos.telefono}

    const manejarRegistro = (e) => {
        console.log(datos)
        agregarUsuario(datos)
        reset()
    }

    const reset = () => {
        cambiardatos({nombre: "", mail: "", telefono: ""})
    }

    const esInvalido = () => {
        return datos.nombre === "" || datos.mail === "" || datos.telefono === ""
    }
    
    let invalido = datos.nombre === "" || datos.mail === "" || datos.telefono === ""
    console.log("Me dibuje y invalido es:", invalido)

    return(
        <div className="formulario">
            <p>Nombre: {datos.nombre}</p>
            <p>Mail: {datos.mail}</p>
            <input id="nombre" type="text" value={datos.nombre} onChange={manejarDatos}></input>
            <input id="mail" type="email" value={datos.mail} onChange={manejarDatos}></input>
            <input id="telefono" type="text" value={datos.telefono} onChange={manejarDatos}></input>
            <Boton texto="Registrar" variante="info" onClick={manejarRegistro} disabled={esInvalido()}/>
        </div>
    )

}

export default Registro;
