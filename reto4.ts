interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}