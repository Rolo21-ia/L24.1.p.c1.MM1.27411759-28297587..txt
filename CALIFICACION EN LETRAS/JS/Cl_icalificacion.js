export default class Cl_icalificacion {
    leerNota() {
        return prompt("Ingrese su nota");
    }

    leerNombre() {
        return prompt("Ingrese el nombre");
    }

    mostrarNota() {
        return `
        <br> Nombre: ${this.nombre}
        <br> Nota: ${this.nota}
        <br> Calificación en letra: ${this.calif}
        `;
    }
}

