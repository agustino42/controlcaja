// PRODUCTOS
const productos = [
    // Hortalizas
    {
        id: "zanahoria-01",
        titulo: "Zanahoria 01",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Hortalizas",
            id: "hortalizas"
        },
        precio: 1000
    },
    {
        id: "limon-02",
        titulo: "Limon 02",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Hortalizas",
            id: "hortalizas"
        },
        precio: 1000
    },
    {
        id: "ajo-03",
        titulo: "Ajo",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Hortalizas",
            id: "hortalizas"
        },
        precio: 1000
    },
    {
        id: "cebolla-04",
        titulo: "Cebolla 04",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Hortalizas",
            id: "hortalizas"
        },
        precio: 1000
    },
    {
        id: "papas-05",
        titulo: "Papas 05",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Hortizas",
            id: "hortalizas"
        },
        precio: 1000
    },
    // Frigorifico
    {
        id: "muslo-01",
        titulo: "Muslo 01",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "pollo-02",
        titulo: "Pollo 02",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "Hueso-03",
        titulo: "Hueso 03",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "punta-04",
        titulo: "Punta 04",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "solomo-05",
        titulo: "Solomo 05",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "lomito-06",
        titulo: "Lomito 06",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "costilla-07",
        titulo: "Costilla 07",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    {
        id: "carne-08",
        titulo: "Carnes 08",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Frigorifico",
            id: "frigorifico"
        },
        precio: 1000
    },
    // Mercado
    {
        id: "sardinas-01",
        titulo: "Sardinas 01",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Mercado",
            id: "mercado"
        },
        precio: 1000
    },
    {
        id: "Atum-02",
        titulo: "Atum 02",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Mercado",
            id: "mercado"
        },
        precio: 1000
    },
    {
        id: "arroz-03",
        titulo: "Arroz 03",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Mercado",
            id: "mercado"
        },
        precio: 1000
    },
    {
        id: "pasta-04",
        titulo: "Pasta 04",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Mercado",
            id: "mercado"
        },
        precio: 1000
    },
    {
        id: "harina-05",
        titulo: "Harina 05",
        imagen: "./img/img1/product1.jpg",
        categoria: {
            nombre: "Mercado",
            id: "mercado"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");


function cargarProductos() {
 
    productos.forEach(producto => {
      
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
       <div class="producto-detalles">
       <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
       <button class="producto-agregar" id="${producto.id}">Agregar</button>
       </div>
 `;

 contenedorProductos.append(div);
    })

}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        e.currentTarget.classList.add("active");

    })
})