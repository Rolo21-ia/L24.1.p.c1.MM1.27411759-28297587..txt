/** Crear un programa que muestre la calificación en letra de un estudiante en función de su nota final. El programa
debe solicitar el nombre del estudiante y su nota final. El programa debe calcular la calificación con letra de
acuerdo con la siguiente escala de calificación*/

import Cl_calificacion from "./Cl_calificacion.js";
import Cl_icalificacion from "./Cl_icalificacion.js";

const icalif = new Cl_icalificacion();
const nombre = icalif.leerNombre();
const nota = icalif.leerNota();
const calif = new Cl_calificacion(nombre, nota);
const salida = document.getElementById("salida");

salida.innerHTML = icalif.mostrarNota(nombre, calif.Calc(), nota);

    