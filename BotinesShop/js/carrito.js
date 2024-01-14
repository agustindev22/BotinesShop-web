
const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");


function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML ="";
    const productos = JSON.parse(localStorage.getItem("botines"));
    console.log(productos)
    if (productos && productos.length > 0) {


        productos.forEach(producto => {
            const nuevoBotines = document.createElement("div");
            nuevoBotines.classList = "tarjeta-producto";
            nuevoBotines.innerHTML = ` 
        
        <img src=${producto.img}>
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <div>
          <button class="menos"> - </button>
          <span class="cantidad"> ${producto.cantidad}</span>
          <button> + </button>
        </div>
        
        `;

            contenedorTarjetas.appendChild(nuevoBotines);
            nuevoBotines.getElementsByTagName("button")[1].addEventListener("click", (e) => { /*agregarAlCarrito(producto)*/;
                        const cuentaElement =e.target.parentElement.getElementsByTagName("span")[0];
                        cuentaElement.innerText = agregarAlCarrito(producto); 
                        actualizarTotales()
            })

           /* contenedorTarjetas.appendChild(nuevoBotines);*/
            nuevoBotines.getElementsByTagName("button")[0]
            .addEventListener("click", (e) => {
               restarAlCarrito(producto); 
                crearTarjetasProductosInicio();
                actualizarTotales()
        });


        });
    }
}
crearTarjetasProductosInicio();
actualizarTotales()

/*---------------------totales-------------------------    */ 

function  actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("botines"));
    let unidades = 0
    let precio = 0
    if(productos && productos.length>0){
        productos.forEach(producto =>{
          unidades += producto.cantidad;
          precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText=unidades;
        precioElement.innerText=precio;
    
    }
}


function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("botines"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length>0);
    totales.classList.toggle("escondido",! (productos && productos.length>0));
}
revisarMensajeVacio()




/* ------------------ reiniciar carrito---------------------*/
reiniciarCarritoElement.addEventListener ("click", reiniciarCarrito)

function reiniciarCarrito(){
    localStorage.removeItem("botines");
    actualizarTotales();
    crearTarjetasProductosInicio();
 }