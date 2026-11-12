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