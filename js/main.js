// PRODUCTOS
const productos = [
    // tintos
    {
        id: "tinto-01",
        titulo: "barda pinot noir 750",
        imagen: "./img/vinos tintos/barda-pinot-noir-750cc.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 7148
    },
    {
        id: "tinto-02",
        titulo: "dv catena cabernet malbec 750",
        imagen: "./img/vinos tintos/dv-catena-cabernet-malbec-750.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 3502
    },
    {
        id: "tinto-03",
        titulo: "mosquita muerta blend tintas 750",
        imagen: "./img/vinos tintos/mosquita-muerta-blend-tintas-750cc.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 2846
    },
    {
        id: "tinto-04",
        titulo: "perro callejero blend de malbec 750",
        imagen: "./img/vinos tintos/peroo-callejero-blend-de-malbec-750cc.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 1035
    },
    {
        id: "tinto-05",
        titulo: "pispi blend de tintas 750",
        imagen: "./img/vinos tintos/pispi-blend-de-tintas-750cc.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 1558
    },
    {
        id: "tinto-06",
        titulo: "sapo de otro pozo blend de tintas 750",
        imagen: "./img/vinos tintos/sapo-de-otro-pozo-blend-de-tintas-750cc.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 2033
    },
    {
        id: "tinto-07",
        titulo: "bressia piel negra pinot noir 750",
        imagen: "./img/vinos tintos/vino-bressia-piel-negra-pinot-noir-750.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 5301
    },
    {
        id: "tinto-08",
        titulo: "dada cabernet sauvignon 750",
        imagen: "./img/vinos tintos/vino-dada-cabernet-sauvignon-750.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 758
    },
    {
        id: "tinto-09",
        titulo: "luigui bosca de sangre blend 750",
        imagen: "./img/vinos tintos/vino-l-bosca-de-sangre-blend-750.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 4149
    }, {
        id: "tinto-10",
        titulo: "rutini malbec merlot cabernet malbec 750",
        imagen: "./img/vinos tintos/vino-rutini-malbec-merlot-cabernet-malbec-750-.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 15307
    }, {
        id: "tinto-11",
        titulo: "Cordero Piel Lobo Malbec 750.jpg",
        imagen: "./img/vinos tintos/Cordero Piel Lobo Malbec 750.jpg",
        categoria: {
            nombre: "Tintos",
            id: "tintos"
        },
        precio: 671
    },


    // blancos
    {
        id: "blanco-01",
        titulo: "tribu blanco dulce 750",
        imagen: "./img/vinos blancos/be74092trivento-tribu-blanco-dulce-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 545
    },
    {
        id: "blanco-02",
        titulo: "el bautismo blend blanc dulce 750",
        imagen: "./img/vinos blancos/el-bautismo-blend-blanc-dulce-750..jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 669
    },
    {
        id: "blanco-03",
        titulo: "fuzion alta sweet 750",
        imagen: "./img/vinos blancos/fuzion-alta-sweet-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 1024
    },
    {
        id: "blanco-04",
        titulo: "la poderosa dulce natural 750",
        imagen: "./img/vinos blancos/la-poderosa-dulce-natural-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 750
    },
    {
        id: "blanco-05",
        titulo: "las perdices partidge dulce 750",
        imagen: "./img/vinos blancos/las-perdices-partidge-dulce-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio:851
    },
    {
        id: "blanco-06",
        titulo: "nina dulce natural moscato giallo 500",
        imagen: "./img/vinos blancos/nina-dulce-natural-moscato-giallo-500.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 906
    },
    {
        id: "blanco-07",
        titulo: "vino alamos moscatel 750",
        imagen: "./img/vinos blancos/vino-alamos-moscatel-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 1539
    },
    {
        id: "blanco-08",
        titulo: "amalaya dulce torrontes riesling 750",
        imagen: "./img/vinos blancos/amalaya-dulce-torrontes-riesling-750.jpg",
        categoria: {
            nombre: "blancos",
            id: "blancos"
        },
        precio: 1030
    },
    // espirituosas
    {
        id: "espirituosas-01",
        titulo: "baileys-salted-caramel-750",
        imagen: "./img/Espirituosas/baileys-salted-caramel-750.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 4822
    },
    {
        id: "espirituosas-02",
        titulo: "brockmans-intensely-smooth-premium-gin-700",
        imagen: "./img/Espirituosas/brockmans-intensely-smooth-premium-gin-700.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 9844
    },
    {
        id: "espirituosas-03",
        titulo: "fernet-branca-1000",
        imagen: "./img/Espirituosas/fernet-branca-1000.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 2670
    },
    {
        id: "espirituosas-04",
        titulo: "gin-hendrick-750",
        imagen: "./img/Espirituosas/gin-hendrick-750.jpg",
        categoria: {
            nombre: "espirituosass",
            id: "espirituosas"
        },
        precio: 11982
    },
    {
        id: "espirituosas-05",
        titulo: "Johnnie Walker White 1000",
        imagen: "./img/Espirituosas/Johnnie Walker White 1000.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 12460
    },
    {
        id: "espirituosas-06",
        titulo: "licor-baileys-750",
        imagen: "./img/Espirituosas/licor-baileys-750.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 4592
    },
    {
        id: "espirituosas-07",
        titulo: "sheridan-s-750",
        imagen: "./img/Espirituosas/sheridan-s-750-cc.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 6200
    },
    {
        id: "espirituosas-08",
        titulo: "tequila-patron-anejo-375",
        imagen: "./img/Espirituosas/tequila-patron-anejo-375.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 7392
    },
    {
        id: "espirituosas-09",
        titulo: "whisky-j-walker-18-a-ultimate-750-estuche",
        imagen: "./img/Espirituosas/whisky-j-walker-18-a-ultimate-750-estuche.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 34034
    },
    {
        id: "espirituosas-10",
        titulo: "whisky-j-walker-blue-750-estuche",
        imagen: "./img/Espirituosas/whisky-j-walker-blue-750-estuche.jpg",
        categoria: {
            nombre: "espirituosas",
            id: "espirituosas"
        },
        precio: 66390
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

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

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}