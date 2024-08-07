import { Libro } from "./Libros"; 
import { Transaccion } from "./Transaccion"; 

export class Tienda {
    private libros: Map<string, Libro>;
    private efectivo: number;

// Constructor de la clase Tienda
// Inicializa el mapa de libros y el efectivo inicial
    constructor(efectivoInicial: number) {
        this.libros = new Map();
        this.efectivo = efectivoInicial;
    }

    // Método para agregar un libro a la tienda
    // Lanza un error si el libro ya existe en la tienda
    public agregarLibro(libro: Libro): void {
        if (this.libros.has(libro._isbn)) {
            throw new Error("El libro con este ISBN ya existe.");
        }
        this.libros.set(libro._isbn, libro);
    }

    // Método para abastecer un libro específico en la tienda
    // Llama al método abastecer del libro correspondiente
    public abastecerLibro(isbn: string, cantidad: number): void {
        const libro = this.libros.get(isbn);
        if (libro) {
            libro.abastecer(cantidad);
        } else {
            throw new Error("Libro no encontrado.");
        }
    }

     // Método para vender un libro específico en la tienda
    // Llama al método vender del libro correspondiente y actualiza el efectivo si la venta es exitosa
    public venderLibro(isbn: string, cantidad: number): void {
        const libro = this.libros.get(isbn);
        if (libro) {
            if (libro.vender(cantidad)) {
                this.efectivo += libro._precioVenta * cantidad;
            } else {
                throw new Error("Stock insuficiente.");
            }
        } else {
            throw new Error("Libro no encontrado.");
        }
    }

    // Método para obtener el efectivo disponible en la tienda
    public obtenerEfectivo(): number {
        return this.efectivo;
    }
}