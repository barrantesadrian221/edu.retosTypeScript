"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const usuarioValido = {
    id: 1,
    username: 'Juan',
    email: 'juanito67@gmail.com',
    rol: 'alumno'
};
const usuarioNoValido = {
    id: 2,
    username: 'Pedrito',
    email: 'pedritoElCoquito12@hotmail.com',
    //Error ya que no deberia de permitir un rol que no este definido en la interfaz
    //rol:'maquinote'
    rol: 'editor'
};
function completarTarea(lista, idBuscar) {
    return lista.map((tarea) => ({
        ...tarea,
        completada: tarea.id === idBuscar ? true : tarea.completada,
    }));
}
//RETO 2
const misTareas = [
    {
        id: 1,
        titulo: 'Estudiar TypeScript',
        completada: false,
        prioridad: 'Alta',
        fechaEntrega: '2026-11-15',
    },
    {
        id: 2,
        titulo: 'Hacer los ejercicios',
        completada: false,
        prioridad: 'Media',
    },
    {
        id: 3,
        titulo: 'Repasar interfaces',
        completada: true,
        prioridad: 'Baja',
    },
];
class ProductComponent {
    nombreProducto;
    precioBase;
    iva = 0.21;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    obtenerPrecioFinal() {
        return this.precioBase * (1 + this.iva);
    }
}
//RETO 3
const producto = new ProductComponent('Teclado', 100);
// Si descomentas esta línea, TypeScript mostrará un error porque precioBase es privado.
// producto.precioBase = 120;
console.log(producto.obtenerPrecioFinal());
function procesarRespuesta(res) {
    if (res.status === 'success' && res.data) {
        res.data.forEach((dato) => console.log(dato));
    }
    else if (res.status === 'error') {
        console.log(res.mensajeError);
    }
}
//RETO 5
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log('Conectando a ' + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = 'usuarios';
    constructor(endpoint) {
        super(endpoint);
    }
}
//# sourceMappingURL=app.js.map