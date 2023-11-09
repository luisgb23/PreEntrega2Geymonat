class Pedido { 
    constructor(carritoPedido) {
        this.carrito = carritoPedido
    }
    obtenerTotalPedido() {
        if (this.carrito.length > 0) { 
            return this.carrito.reduce((contador, producto)=> contador + producto.precio, 0)
        }
    }
}