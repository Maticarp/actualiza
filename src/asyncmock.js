const productos = [
    { id: "1", nombre: "Camperas", precio: 150000, img: "./img/campera.jpg", idCat: "2" },
    { id: "2", nombre: "Camisetas", precio: 10000, img: "./img/camisetas.jpg", idCat: "2" },
    { id: "3", nombre: "Pantalones", precio: 90000, img: "./img/pantalones.jpg", idCat: "3" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}