//Variables*********************************************************
//Console log
var c = console.log;

//Document
var d = document;
var cont = 0;
var total = 0;


var divContenedor;
    var divDescripcion;
    var h3Producto;
var h3Texto;
var precio;
var pTexto;
var descripcion;
var dTexto;
var imagencita;
var miNodoBoton;
var carrito = [];
var total = 0;
var aProductos = [
	{
		id: 1,
		Nombre: 'Lampara Colgante Gary',
		Precio: 100,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara1.jpg',
			alt: 'Imagen representativa de Lampara Colgante Gary',
		},
		
	},
	{
		id: 2,
		Nombre: 'Set de 2 lámparas Dory',
		Precio: 200,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara2.jpg',
			alt: 'Imagen representativa de set de 2 lamparas Dory',
		},
		
	},
	{
		id: 3,
		Nombre: 'Lámpara Industrial',
		Precio: 300,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara3.jpg',
			alt: 'Imagen representativa de lampara industrial',
		},
		
	},
    {
		id: 4,
		Nombre: 'Lámpara art déco',
		Precio: 400,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara4.jpg',
			alt: 'Imagen representativa de lampara art deco',
		},
		
	},
    {
		id: 5,
		Nombre: 'Lámpara Sicko',
		Precio: 500,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara5.jpg',
			alt: 'Imagen representativa de lampara sicko',
		},
		
	},
    {
		id: 6,
		Nombre: 'Lámpara Jeana',
		Precio: 600,
		Descripcion: 'Re lindo el producto, me hace ver más allá de lo evidente',
		Imagen: {
			src: 'items/lampara6.jpg',
			alt: 'Imagen representativa de lampara jeana',
		},
		
	},
];




function renderItems() {
for (var i = 0; i < aProductos.length; i++) {
    
    //Creo un div contenedor
    divContenedor = d.createElement('div');
    //Creo div contenedor de descripcion
    divDescripcion = d.createElement('div');
    //Nombre Produdctos----------------------------------------
    h3Producto = d.createElement('h3');
    //Creo un nodo de texto con los valores h3 
    h3Texto = d.createTextNode(aProductos[i].Nombre);
    //appendchildleo el nodo de texto a la variable h3producto
    h3Producto.appendChild(h3Texto);
    //Appendchildleo h3 productos al divcontenedor
    divContenedor.appendChild(h3Producto);
    //Precio productos ----------------------------------------
    //Creo el precio de los productos
    divPrecio = d.createElement('div')
    precio = d.createElement('p');
    //Creo un nodo de texto con los valores precios
    pTexto = d.createTextNode('Precio: ' + aProductos[i].Precio + '$');
    //appendchildleo el nodo de texto a la variable precio
    precio.appendChild(pTexto);
    //Appendchildleo pTexto al divcontenedor
    divPrecio.appendChild(precio);
    divContenedor.appendChild(divPrecio);
   
    
    //Descripcion productos ----------------------------------
    //Creo la descripcion de los productos
    descripcion = d.createElement('p');
    //Creo un nodo de texto con las descripciones
    dTexto = d.createTextNode('Descripcion: ' + aProductos[i].Descripcion);
    
    
    
    //appendchildeo el nodo de texto a la variable descripcion
    descripcion.appendChild(dTexto);
    divDescripcion.appendChild(descripcion);
    //appendChildeo dTexto al divcontenedor
    divContenedor.appendChild(divDescripcion);

    divDescripcion.style.display = 'none';
   
  
    //Imagen -------------------------------------------------
    
    //Creo las imagenes
        imagencita = d.createElement('img');
        imagencita.setAttribute('src', aProductos[i].Imagen.src);
        imagencita.style.width = '100px';
        imagencita.style.height = '100px';
    //appendChildeo dTexto al divcontenedor
        divContenedor.appendChild(imagencita);
    
    //boton Agregar al carrito ---------------------------------------------------
        miNodoBoton = d.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Añadir al carrito';
        miNodoBoton.setAttribute( 'marcador', aProductos[i].id);
        
        
    // boton descripcion
        miNodoBoton2 = d.createElement('button');
        miNodoBoton2.classList.add('btn', 'btn-primary');
        miNodoBoton2.textContent = 'ver mas';
        miNodoBoton2.setAttribute('marcador', aProductos[i].id);
        
        
        
    
    //appendCHildeo miNodoBoton al contenedor
    divContenedor.appendChild(miNodoBoton);
    //appendCHildeo miNodoBoton al contenedor
    divContenedor.appendChild(miNodoBoton2);
    
    //Appendchildeo el divcontenedor al body
    d.body.appendChild(divContenedor);
    
     
     //Ejecuto funcion contadora de productos
    
     miNodoBoton.onclick = agregarCarrito;
     miNodoBoton2.onclick = oDescripcion;

    
};
    
}
//Funcion aparecer Descripcion

function oDescripcion() {
   
}
  

//Funcion agregar valor al carrito --------------------------
    
function agregarCarrito() {
carrito.push(this.getAttribute('marcador'));
c(carrito);

contador();
calcularTotal();


};


//funcion contadora de productos------------------------
    function contador() {
        
        //Agrego el numero de items al carrito
        cont++
        console.log(cont);
        var itemsAg = d.getElementById('nitems');
        itemsAg.innerHTML = cont;
        
     
        //Agrego el precio al carrito
        
        
       // var precioTotal = d.getElementById('precioT');
       // precioTotal.innerHTML = total + '$';
        
        //Funcion agregar precio al carrito
                
        
    }  ;

//Funcion calcular total
function calcularTotal () {
    var total = 0;
for(var i = 0; i < carrito.length; i++){
    var pos = carrito[i] - 1;
    total += aProductos[pos].Precio;
    
}
    var costoTotal = d.getElementById('precioT');
        costoTotal.innerHTML = total;
   console.log(total);   
}; 


renderItems();




//Modifico CSS******************************************************
//Generales

var body = d.querySelector('body');

var header = d.querySelector('header');
var h1 = d.querySelector('h1');
var h2 = d.querySelector('h2');





body.style.backgroundColor = 'lightgrey';

header.style.backgroundColor = '#343031';
h1.style.color = 'white';


//h2.style.color = '#343031';

//
