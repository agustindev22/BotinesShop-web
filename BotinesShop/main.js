const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
  nav.classList.add("visible")
})
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible")
})


/*

const productos = [

  {
    id: "Adidas1",
    titulo: "Adidas Black",
    imagen: "./Botines y Logos/adidas1.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 75.000
  },

  {
    id: "Adidas2",
    titulo: "Adidas Predator",
    imagen: "./Botines y Logos/adidas2.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Adidas3",
    titulo: "Adidas X Speedportal",
    imagen: "./Botines y Logos/adidas3jpg.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Adidas4",
    titulo: "Adidas X Speedflow",
    imagen: "./Botines y Logos/adidas4.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Adidas5",
    titulo: "Adidas Nemezis",
    imagen: "./Botines y Logos/adidas5.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Adidas6",
    titulo: "Adidas Copa Azul y oro",
    imagen: "./Botines y Logos/adidas6.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Adidas7",
    titulo: "Adidas Copa",
    imagen: "./Botines y Logos/adidas7.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 50.000
  },

  {
    id: "Nike1",
    titulo: "Nike Black",
    imagen: "./Botines y Logos/nike1.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 75.000
  },

  {
    id: "Nike2",
    titulo: "Nike Elite s8",
    imagen: "./Botines y Logos/nike2.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 95.000
  },

  {
    id: "Nike3",
    titulo: "Nike Air Mercurial",
    imagen: "./Botines y Logos/nike3.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 69.000
  },

  {
    id: "Nike4",
    titulo: "Nike Superfly",
    imagen: "./Botines y Logos/nike4.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 85.000
  },

  {
    id: "Nike5",
    titulo: "Nike zoom Mercurial",
    imagen: "./Botines y Logos/nike5.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 85.000
  },

  {
    id: "Nike6",
    titulo: "Nike Golden",
    imagen: "./Botines y Logos/nike6.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 55.000
  },

  {
    id: "Nike7",
    titulo: "Nike Phanton B",
    imagen: "./Botines y Logos/nike7.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 67.000
  },

  {
    id: "Nike8",
    titulo: "Nike Phanton V",
    imagen: "./Botines y Logos/nike8.jpg",
    categoria: {
      nombre: "Botines",
      id: "Botines"
    },
    precio: 67.000
  },
]

const conteiner = document.querySelector("#conteiner");
let botonCompra = document.querySelectorAll(".compra");

function cargarProductos() {
  productos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    
      <img class="img-productos" src="${producto.imagen}" alt="${producto.titulo}">
      <article class="informacion">
       <h2>${producto.titulo}</h2>
        <p class="precio-botines"> $ ${producto.precio} <span>85.000</span></p>
        <input class="talle" type="number" placeholder="Talle" min="37" max="42">
        <button class="compra"  id="${producto.id}"> Comprar </button>
       </article>
    `;
    conteiner.append(div);
  })
  actualizarBotonCompra();
}

cargarProductos(productos);



function actualizarBotonCompra(){
  botonCompra = document.querySelectorAll(".compra")
  botonCompra.forEach(boton =>{
    boton.addEventListener("click", agregarAlCarrito);
  });
}
const productosEnCarrito=[]
function agregarAlCarrito(e){
  const idBoton= e.currentTarget.id;
  const productoAgregado= productos.find(producto => producto.id===idBoton);
  if(productosEnCarrito.some(producto => producto.id===idBoton)){
    const index =  productosEnCarrito.findIndex(producto=> producto.id===idBoton);
    productosEnCarrito[index].cantidad++
  } else{
    productoAgregado.cantidad=1;
    productosEnCarrito.push(productoAgregado);
  }
  console.log(productosEnCarrito);
}
*/