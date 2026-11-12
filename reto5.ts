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