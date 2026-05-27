import {Schema, model} from "mongoose";

const esqueleto_de_tabla = new Schema({
    nombre:String,
    edad:Number,
    materia:String
})
export const tabla = new model("Tabla de alumnos reprobados", esqueleto_de_tabla)