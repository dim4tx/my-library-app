 export class Transaccion {

    tipoTransaccion: string;
    fechaRealizacion: Date;
    cantidadEjemplares: number;

       // Constructor de la clase Transaccion
    // Inicializa los atributos de la transacción
    constructor(tipoTransaccion: string, fechaRealizacion: Date, cantidadEjemplares: number) {
        this.tipoTransaccion = tipoTransaccion;
        this.fechaRealizacion = fechaRealizacion;
        this.cantidadEjemplares = cantidadEjemplares;
    }

// Métodos getter para acceder a los atributos privados de la transacción
    get tipo() {
        return this.tipoTransaccion;
    }

    get fecha() {
        return this.fechaRealizacion;
    }

    get cantidad() {
        return this.cantidadEjemplares;
    }
}
