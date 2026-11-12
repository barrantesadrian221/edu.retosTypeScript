class ServicioDatos {
  constructor(public endpoint: string) {}

  conectar(): void {
    console.log('Conectando a ' + this.endpoint);
  }
}