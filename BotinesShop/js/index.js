

const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoBotines = document.createElement("div");
        nuevoBotines.classList = "tarjeta-producto";
        nuevoBotines.innerHTML= ` 
        
        <img src=${producto.img}>
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>
        
        `
        
        contenedorTarjetas.appendChild(nuevoBotines);
        nuevoBotines.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto))

        
    });
}
crearTarjetasProductosInicio(botines);
