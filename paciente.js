import nombre from "./nombre.js"
import fecha from "./fecha.js"

export default class paciente{
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
    }

    getPerfil(){
        return (`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono}`)
    }

}