/*Variables generales*/
var c = console.log;
var d = document;
var cont = 0;
var total = 0;

/*Prueba*/
// Buscamos los elementos necesarios:
var divRow;
divRow = d.querySelector('#divRow');

/*Termina Prueba */

/*Variables Productos*/
var divContainer ;
var rowContainer;
var divProduct;

var h3Producto;
var h3Texto;
var prodDescripcion;
var prodImagen;

var carrito = [];
var total = 0;

var body = d.querySelector('body');

/*Productos*/
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

/*Funcion que renderiza los productos*/
function renderItems() {
    for (var i = 0; i < aProductos.length; i++) {
        //Creo div contenedor
        divContainer = d.createElement('div');
        //Creo div row
        rowContainer = d.createElement('div');
        //Creo div producto
        divProduct = d.createElement('div');

        //Nombre producto
        h3Producto = d.createElement('h3');
        //Creo Nodo texto con los valores h3
        h3Texto = d.createTextNode(aProductos[i].Nombre);
        //Appendchildeo el h3texto a h3Producto
        h3Producto.appendChild(h3Texto);
        //Appendchildeo h3 Producto a divProduct 
        divProduct.appendChild(h3Producto);
        //Appendchildeo divProducto a divContainer
        rowContainer.appendChild(divProduct);
        divContainer.appendChild(rowContainer);
        d.body.appendChild(divContainer);

        c(aProductos[1].Nombre);

    };
    
}

renderItems();

divProduct.style.border = 'solid 1px gray';
divProduct.style.height = 'auto';

