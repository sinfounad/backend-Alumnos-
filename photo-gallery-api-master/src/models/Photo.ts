import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    Numero_Control : String,
    Nombre_Alumno: String,
    Apellido_Materno: String,
    Apellido_Paterno: String,
    Carrera:String,
    Creditos_Complemantarios:String,
    Servicio_Social:String,
    Autorizacion:String,
    Nombre_de_Empresa:String,
    Asesor_Externo:String,
    Periodo_de_Residencia:String
    
});

export interface IAlumno extends Document {

    Numero_Control : string,
    Nombre_Alumno: string,
    Apellido_Materno: string,
    Apellido_Paterno: string,
    Carrera:string,
    Creditos_Complemantarios:string,
    Servicio_Social:string,
    Autorizacion:string,
    Nombre_de_Empresa:string,
    Asesor_Externo:string,
    Periodo_de_Residencia:string
    
}

export default model<IAlumno>('Photo', schema);