import { useState } from "react";
import "./registro.css"
import Registro from "./formulario_registro";
import Boton from "./boton";

const BaseDeUsuarios = () => {
    const [usuarios, cambiarusuarios] = useState([
        {nombre: "Raul", mail:"raulito@hotmail.com", telefono: "099505505"},
        {nombre: "Josefina", mail:"jose@hotmail.com", telefono: "1234563"},
        {nombre: "Micaela", mail:"mica@hotmail.com", telefono: "9874894"}
    ])

    const agregarUsuario = (usuario) => {
        cambiarusuarios(previousState => {
            const res = [...previousState, usuario]
            return res
        })
    }

    // remueve el usuario en el indice indicado
    const removerUsuario = (index) => {
        cambiarusuarios(previousState => {
            const nuevaLista = [...previousState] //Copiar el estado (si es un objeto o un array)
            nuevaLista.splice(index, 1)
            return nuevaLista
        })
    }

    return (
        <div className="base">
            <p>Registro de reservas</p>
            <Registro agregarUsuario={agregarUsuario}/>
            <p>Hay {usuarios.length} reservas</p>
            <p>Se borraron X reservas</p>
            <ul>
            {usuarios.map((usuario, i) => {
                return <li key={i}>
                        {i} - {usuario.nombre} - {usuario.mail} - {usuario.telefono}
                        <Boton texto="X" variante="peligro" onClick={(e) => { removerUsuario(i) }}/>
                        <Boton texto="asistio" variante="info" onClick={() => { }} />
                    </li>
            })}
            </ul>
        </div>
    );
}
 
export default BaseDeUsuarios;

// 1. si el usuario asistio cambiar el estilo de el texto
// 2. mostrar la cantidad de reservas borradas que tenemos
// 3. podemos estilizar un poco los botones? (Listo)
// bonus track: si el usuario asistio que no se muestren los botones de X y Asistio
// bonus track 2: separar en archivos los componentes (Listo)
// bonus track 3: ordernar la lista por orden alfabetico

