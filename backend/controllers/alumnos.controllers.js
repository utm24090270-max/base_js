import{tabla} from "../models/alumnos.model.js"
tabla.create({
    nombre: "Coffee",
    edad: 20,
    materia: "Matematicas"
}),
tabla.create({
    nombre: "Rafa",
    edad: 27,
    materia: "Ingles"
})
export const test = () => console.log("llamando a la tabla de alumnos reprobados")