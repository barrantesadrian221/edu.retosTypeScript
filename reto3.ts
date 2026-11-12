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

const producto = new ProductComponent('Teclado', 100);

// Si descomentas esta línea, TypeScript mostrará un error porque precioBase es privado.
// producto.precioBase = 120;

console.log(producto.obtenerPrecioFinal());