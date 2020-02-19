import cita from "./cita.js"
import Doctor from "./doctor.js"
import Fecha from "./fecha.js"
import Hospital from "./hospital.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import tiempo from "./tiempo.js"

class Main{
    constructor(){
        this.nombre1 = new Nombre("kevin", "rene", "mancilla")
        this.doctor = new Doctor(this.nombre1,"jefe","3121105426","cedula:23245")
        this.paciente = new Paciente(this.nombre1,new Fecha(new Date(2001, 8, 27)),"3121105426")
        this.tiempo = new tiempo(this.tiempo)
    }

    Nombre(){
        console.log(this.nombre1.getNombreCompleto())
        console.log(this.nombre1.getApellidoNombre())
        console.log(this.nombre1.getIniciales())
    }

    Doctor(){
        console.log(this.doctor.getPerfil())
    }

    Paciente(){
        console.log(this.paciente.getPerfil())
    }

    Tiempo(){
        let hora = new tiempo(3, 50, "am")
        let hora2 = new tiempo(4, 50, "pm")
        console.log(hora.getFormato12())
        console.log(hora.getFormato24())
        console.log(hora2.getFormato12())
        console.log(hora2.getFormato24())
    }

    Fecha(){
        
    }
}

    let verificar = new Main()



    verificar.Nombre()
    verificar.Doctor()
    verificar.Paciente()
    verificar.Tiempo()


