const carrito = []

const productos = [{imagen: '🥗', codigo: 1, nombre: 'Ensalada Cesar', precio: 5500},
                 {imagen: '🍔', codigo: 2, nombre: 'Hamburguesa c/fritas', precio: 7500},
                 {imagen: '🍕', codigo: 3, nombre: 'Pizza Caprese', precio: 4800},
                 {imagen: '🍗', codigo: 4, nombre: 'Pollo frito', precio: 3500},
                 {imagen: '🍦', codigo: 5, nombre: 'Helado de chocolate', precio: 3300},
                 {imagen: '🍮', codigo: 6, nombre: 'Chessecake', precio: 5200},
                 {imagen: '🧁', codigo: 7, nombre: 'Rogel', precio: 6300}]


function buscarProducto(codigo) {
    let productoSeleccionado = productos.find((producto)=> producto.codigo === codigo)
    return productoSeleccionado
}


function realizarPedido() {
    let codigo = prompt("Ingresa el código de la producto a pedir.")
    let productoElegido = buscarProducto(parseInt(codigo))

    if (productoElegido !== undefined) {
        carrito.push(productoElegido)
        let respuesta = confirm("¿Deseas agregar otro producto al carrito?")
        if (respuesta === true) {
            realizarPedido()
        } else { 
            const ped = new Pedido(carrito)
            let total = ped.obtenerTotalPedido()
            let tipoPedido = parseInt(prompt("Deseas realizar Take Away o Delivery?"))
            if (tipoPedido === 1) {
                console.table(carrito)
                let totalDescuento1 = total - (total * 0.1)
                alert("✅ El costo total de tu pedido es de $ " + totalDescuento1 + "\ncon descuento de 10% por Take Away .\nMuchas gracias por elegirnos.")
            }else{
                let totalDescuento2 = total - (total * 0.15)
                console.table(carrito)
                alert("✅ El costo total de tu pedido es de $ " + totalDescuento2 + "\ncon descuento de 15% por Delivery.\nMuchas gracias por elegirnos.")
            }
        }
    } else {
        alert("⛔️ Error en el código de producto ingresado. Refresca para comenzar de nuevo.")
    }
}