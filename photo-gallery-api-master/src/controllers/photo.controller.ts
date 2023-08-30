import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Photo, { IAlumno } from '../models/Photo';

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const alumnos = await Photo.find();
    return res.json(alumnos);
};

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    
    const {Numero_Control, Nombre_Alumno, Apellido_Materno, Apellido_Paterno,
        Carrera,  Creditos_Complemantarios, Servicio_Social, Autorizacion, 
        Nombre_de_Empresa, Asesor_Externo, Periodo_de_Residencia} = req.body;
    
    
       console.log(req.body);
   
   
    const newAlumno = { Numero_Control, Nombre_Alumno, Apellido_Materno, Apellido_Paterno,
        Carrera, Creditos_Complemantarios, Servicio_Social, Autorizacion, 
        Nombre_de_Empresa, Asesor_Externo, Periodo_de_Residencia };
    const photo = new Photo(newAlumno);
  
    await photo.save();
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
};

export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const alumno = await Photo.findById(id);
    return res.json(alumno);
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(req.params);
   
   const photo = await Photo.findByIdAndRemove(id) as IAlumno;
   
    return res.json({ message: 'Photo Deleted' });
};

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {Numero_Control, Nombre_Alumno, Apellido_Materno, Apellido_Paterno,
        Carrera,  Creditos_Complemantarios, Servicio_Social, Autorizacion, 
        Nombre_de_Empresa, Asesor_Externo, Periodo_de_Residencia} = req.body;
    const updatedAlumno = await Photo.findByIdAndUpdate(id, {

        Numero_Control, Nombre_Alumno, Apellido_Materno, Apellido_Paterno,
        Carrera,  Creditos_Complemantarios, Servicio_Social, Autorizacion, 
        Nombre_de_Empresa, Asesor_Externo, Periodo_de_Residencia
    });
    return res.json({
        message: 'Successfully updated',
        updatedAlumno 
    });
}