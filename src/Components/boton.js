
// se re-dibuja:
//   1 -> cuando se cambia el estado del componente
//   2 -> cuando cambian sus props

// Cuando recibimos la variante peligro, tenemos que aplicar la clase peligro al className
const Boton = ({ texto, onClick, disabled, variante }) => {

    let clase = "boton "

    //clase === "boton "
    if (variante !== null) {
        clase += `${variante} `
    }
    //clase === "boton info "

    if (disabled) {
        clase += "disabled "
    }
    //clase === "boton info "

    return (<button className={clase} disabled={disabled} onClick={onClick}>{texto}</button>);
}
 
export default Boton;