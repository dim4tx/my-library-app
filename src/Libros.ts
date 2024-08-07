import { Transaccion } from "./Transaccion";

export class Libro {
    private isbn: string;
    private titulo: string;
    private imagen: string;
    private precioCompra: number;
    private precioVenta: number;
    private cantidadActual: number;
    private transacciones: Transaccion[];

    // Constructor de la clase Libro
    // Inicializa todos los atributos del libro y crea una lista vacía de transacciones 
    constructor(isbn: string, titulo: string, imagen: string, precioCompra: number, precioVenta: number, cantidadInicial: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.imagen = imagen;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadActual = cantidadInicial;
        this.transacciones = [];
    }

    // Métodos getter para acceder a los atributos privados del libro
    get _isbn() {
        return this.isbn;
    }

    get _titulo() {
        return this.titulo;
    }

    get _imagen() {
        return this.imagen;
    }

    get _precioCompra() {
        return this.precioCompra;
    }

    get _precioVenta() {
        return this.precioVenta;
    }

    get _cantidadActual() {
        return this.cantidadActual;
    }

    get _transacciones() {
        return this.transacciones;
    }

    // Método para abastecer el libro con una cantidad adicional
    // Se actualiza la cantidad actual y registra la transacción
    public abastecer(cantidad: number): void {
        this.cantidadActual += cantidad;
        this.transacciones.push(new Transaccion("abastecimiento", new Date(), cantidad));
    }
    
    // Método para vender una cantidad de libros
    // Disminuye la cantidad actual y registra la transacción si hay suficiente stock
    public vender(cantidad: number): boolean {
        if (cantidad <= this.cantidadActual) {
            this.cantidadActual -= cantidad;
            this.transacciones.push(new Transaccion("venta", new Date(), cantidad));
            return true;
        }
        return false;
    }
}
    