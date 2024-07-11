export default class calificacion {
    constructor(nombre, nota) {
        this._nombre = nombre;
        this._nota = +nota;  // Convertir a número
        this._calif = this.Calc();  // Calcular la calificación inicialmente
    }

    set calif(n) {
        this._calif = n;
    }
    get calif() {
        return this._calif;
    }
    set nombre(b) {
        this._nombre = b;
    }
    get nombre() {
        return this._nombre;
    }
    get nota() {
        return this._nota;
    }
    set nota(a) {
        this._nota = +a;
    }

    Calc() {
        if (this._nota >= 90) {
            return "A";
        } else if (this._nota >= 80) {
            return "B";
        } else if (this._nota >= 70) {
            return "C";
        } else if (this._nota >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}
