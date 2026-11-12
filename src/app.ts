//RETO 1
interface UsuarioAPI {
    id: number;
    username : string;
    email: string;
    rol: 'admin'| 'editor' | 'alumno' ;
    token?:string
};

const usuarioValido: UsuarioAPI = {
    id:1,
    username:'Juan',
    email:'juanito67@gmail.com',
    rol:'alumno'
};

const usuarioNoValido: UsuarioAPI = {
    id:2,
    username:'Pedrito',
    email:'pedritoElCoquito12@hotmail.com',
    //Error ya que no deberia de permitir un rol que no este definido en la interfaz
    //rol:'maquinote'
    rol:'editor'
};

// RETO 1: resultados de los usuarios tipados
console.log('Usuario válido:', usuarioValido);
console.log('Segundo usuario:', usuarioNoValido);

interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
  fechaEntrega?: string;
}

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  return lista.map((tarea) => ({
    ...tarea,
    completada: tarea.id === idBuscar ? true : tarea.completada,
  }));
}
//RETO 2
const misTareas: Tarea[] = [
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
console.log('Tareas con la tarea 2 completada:', completarTarea(misTareas, 2));

class ProductComponent {
  private readonly iva: number = 0.21;

  constructor(
    public nombreProducto: string,
    private precioBase: number,
  ) {}

  obtenerPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}
//RETO 3
const producto = new ProductComponent('Teclado', 100);

// Si descomentas esta línea, TypeScript mostrará un error porque precioBase es privado.
// producto.precioBase = 120;

console.log(`Precio final de ${producto.nombreProducto}:`, producto.obtenerPrecioFinal());
//RETO 4
interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}

function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === 'success' && res.data) {
    console.log('Respuesta correcta:');
    res.data.forEach((dato) => console.log(dato));
  } else if (res.status === 'error') {
    console.log('Respuesta con error:', res.mensajeError);
  }
}

procesarRespuesta({ status: 'success', data: ['Usuario cargado', 'Tareas cargadas'] });
procesarRespuesta({ status: 'error', mensajeError: 'No se pudieron cargar los datos' });

//RETO 5
class ServicioDatos {
  constructor(public endpoint: string) {}

  conectar(): void {
    console.log('Conectando a ' + this.endpoint);
  }
}

class ServicioUsuarios extends ServicioDatos {
  public entidad: string = 'usuarios';

  constructor(endpoint: string) {
    super(endpoint);
  }
}

const servicioUsuarios = new ServicioUsuarios('https://api.ejemplo.com/usuarios');
servicioUsuarios.conectar();
console.log('Entidad del servicio:', servicioUsuarios.entidad);