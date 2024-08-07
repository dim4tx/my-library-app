import { Tienda } from "./Tiendalibro";
import { Libro } from "./Libros";

// Se creo una instancia de la Tienda con $1,000,000 en efectivo
const tienda = new Tienda(1000000);

// Se creo un libro con los datos proporcionados
const libro = new Libro("9788449940460", "Nacho", "imagen.jpg", 100, 150, 10);

// Se agrega el libro a la tienda
try {
    tienda.agregarLibro(libro);
    console.log("Se agregó el libro: Éxito");
} catch (error) {
    console.log("Error al agregar el libro: " + error);
}

// Aqui se abastecen más ejemplares del libro
try {
    tienda.abastecerLibro("9788449940460", 5);
    console.log("Ejemplares abastecidos.");
} catch (error) {
    console.log("Error al abastecer el libro: " + error);
}

// Se venden  ejemplares del libro
try {
    tienda.venderLibro("9788449940460", 3);
    console.log("Ejemplares vendidos.");
} catch (error) {
    console.log("Error al vender el libro: " + error);
}

// Se consulta el efectivo disponible
const efectivoDisponible = tienda.obtenerEfectivo();
console.log("Efectivo disponible: $" + efectivoDisponible);

/*const myName: string = 'Nicolas';
console.log(myName);*/