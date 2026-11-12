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