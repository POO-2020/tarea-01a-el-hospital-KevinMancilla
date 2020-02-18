import Cita from "./cita.js"
import Doctor from "./doctor.js"
import Fecha from "./fecha.js"
import Hospital from "./hospital.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Tiempo from "./tiempo.js"

class Main{
    constructor(){
        this.nombre1 = new Nombre("kevin", "rene", "mancilla")
        this.doctor = new Doctor(this.nombre1,"jefe","3121105426","cedula:23245")
        this.tiempo = new Tiempo("12", "32")
    }

    Nombre(){
        
        console.log(this.nombre1.getNombreCompleto())
        console.log(this.nombre1.getApellidoNombre())
        console.log(this.nombre1.getIniciales())

    }

    Doctor(){
        console.log(this.doctor.getPerfil())
    }

    Tiempo(){
        console.log(this.tiempo.getFormato12())
        console.log(this.tiempo.getFormato24())
    }
}

    let verificar = new Main()

    verificar.Nombre()
    verificar.Doctor()
    verificar.Tiempo()

