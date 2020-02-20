export default class cita{
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente
    }
    getCita(){
        return(`${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${this.doctor.nombre.apellidoPaterno} , ${this.paciente.nombre.getNombreCompleto()}`)
    }
}
