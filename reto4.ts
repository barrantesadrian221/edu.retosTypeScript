interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}

function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === 'success' && res.data) {
    res.data.forEach((dato) => console.log(dato));
  } else if (res.status === 'error') {
    console.log(res.mensajeError);
  }
}