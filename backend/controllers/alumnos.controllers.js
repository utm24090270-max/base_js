import { tabla } from "../models/alumnos.model.js"

tabla.create({
    nombre : "Coffee",
    edad : 20,
    materia : "todas"
})
export const test = () => console.log("llamando controlador en app")