/*Variables generales*/
var c = console.log;
var d = document;
var cont = 0;
var total = 0;
var body;
body = d.querySelector('body');

/*Variable fin compra */
var finCompra;
finCompra = d.querySelector('#finCompra');
finCompra.onclick = miFormulario;

/*Variables Productos*/
var divRow;
divRow = d.querySelector('#divRow');

var btnVaciarCart;
btnVaciarCart = d.querySelector('#btnVaciarCarrito');
btnVaciarCart.onclick = vaciarCart; 

function vaciarCart() {
	cont = 0;
	itemsAg.innerHTML = cont;
	carrito = [];
	renderizarCarrito();
    calcularTotal();
}

var verCarrito;
verCarrito = d.querySelector('#verCarrito');
verCarrito.onclick = renderizarCarrito;

/*Variable contenedor de productos */
var divContainer;
divContainer = d.querySelector('#divRow');
/*Variables Menu */
menuTodo = d.querySelector('#menuTodo');
menuTodo.onclick = renderItems;
menuColgantes = d.querySelector('#menuColgantes');
menuColgantes.onclick = renderColgantes;
menuBombillas = d.querySelector('#menuBombillas');
menuBombillas.onclick = renderBombillas;
/*Variable divCarrito */
var divCarrito;
divCarrito = d.querySelector('#divCarrito');
var divProduct;
var h3Producto;
var h3Texto;
var prodDescripcion;
var prodTexto;
var precio;
var pTexto;
var prodImagen;
var miNodoBoton;
var carrito = [];
var total = 0;
var popupWrapper;
var popup;
var itemsAg;



/*Productos*/
var aProductos = [
	{
		id: 1,
		Nombre: 'Lampara Colgante Gary',
		Precio: 100,
		Categoria: 'bombilla',
		Descripcion: 'Lampara Colgante Azul Brillante/Blanco Perla, LED E27 1x20W',
		Imagen: {
			src: 'items/lampara1.jpg',
			alt: 'Imagen representativa de Lampara Colgante Gary',
		},
		
	},
	{
		id: 2,
		Nombre: 'Lámparas Dory',
		Precio: 200,
		Categoria: 'bombilla',
		Descripcion: 'Set 2 lámparas colgantes rústica gris',
		Imagen: {
			src: 'items/lampara2.jpg',
			alt: 'Imagen representativa de set de 2 lamparas Dory',
		},
		
	},
	{
		id: 3,
		Nombre: 'Lámpara Industrial',
		Precio: 300,
		Categoria: 'mesa',
		Descripcion: 'Lámpara colgante industrial negra madera',
		Imagen: {
			src: 'items/lampara3.jpg',
			alt: 'Imagen representativa de lampara industrial',
		},
		
	},
    {
		id: 4,
		Nombre: 'Lámpara art déco',
		Precio: 400,
		Categoria: 'mesa',
		Descripcion: 'Lámpara colgante Art Deco alargada negra cristal ámbar',
		Imagen: {
			src: 'items/lampara4.jpg',
			alt: 'Imagen representativa de lampara art deco',
		},
		
	},
    {
		id: 5,
		Nombre: 'Lámpara Sicko',
		Precio: 500,
		Categoria: 'colgantes',
		Descripcion: 'Lámpara colgante industrial negra 53cm',
		Imagen: {
			src: 'items/lampara5.jpg',
			alt: 'Imagen representativa de lampara sicko',
		},
		
	},
    {
		id: 6,
		Nombre: 'Lámpara Jeana',
		Precio: 600,
		Categoria: 'colgantes',
		Descripcion: 'Plafón moderno blanco inclinable',
		Imagen: {
			src: 'items/lampara6.jpg',
			alt: 'Imagen representativa de lampara jeana',
		},
		
	},
];
//Array de categoria bombillas
var aBombillas = aProductos.filter(function(el){
	return(el.Categoria === 'bombilla')
});
//Array de categoria colgantes
var aColgantes = aProductos.filter(function(el){
	return(el.Categoria === 'colgantes')
});

renderItems()
//Funcion que limpia los productos
function limpProductos() {
	while (divContainer.firstChild) {
		divContainer.removeChild(divContainer.firstChild);
	  }


	
};
//Renderizar bombillas
var divBombillas;
var rowBombillas;
var h2Bombillas;
var h2BombText;
var h3Bombillas;
var h3BombText;
var infoBombillas;
var padBombillas;
var bordeBombillas;
var divImgBomb;
var bombImagen;
var divPrecioBomb;
var divInfoBomb;
function renderBombillas() {
	limpProductos();
	//setTimeout(function () { /* ACCIONES */agregarPopup() }, 1000);
	
	for (var i = 0; i < aBombillas.length; i++) {
		infoBombillas = d.createElement('div');
				infoBombillas.className += "col-md-6";
				divRow.appendChild(infoBombillas);

					padBombillas = d.createElement('div');
					padBombillas.className += "padingprod";
					infoBombillas.appendChild(padBombillas);

						bordeBombillas = d.createElement('div');
						bordeBombillas.className += "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";
						padBombillas.appendChild(bordeBombillas);

							divImgBomb = d.createElement('div');
							divImgBomb.className += "col-4 nop";
							bordeBombillas.appendChild(divImgBomb);

								//Imagen
								bombImagen = d.createElement('img');
								bombImagen.setAttribute('src', aBombillas[i].Imagen.src);
								bombImagen.style.width = '100px';
								bombImagen.style.height = '100px';
								bombImagen.className += "img1";
								//appendChildeo dTexto al divProd
								divImgBomb.appendChild(bombImagen);

							divTxtBomb = d.createElement('div');
							divTxtBomb.className += "col-8 p-4 d-flex flex-column position-static";
							bordeBombillas.appendChild(divTxtBomb);

								//Nombre producto
								h3Bombillas = d.createElement('h3');
								//Creo Nodo texto con los valores h3
								h3TextoBombillas = d.createTextNode(aBombillas[i].Nombre);
								//Appendchildeo el h3texto a h3Producto
								h3Bombillas.appendChild(h3TextoBombillas);
								//Appendchildeo h3 Producto a divProduct 
								divTxtBomb.appendChild(h3Bombillas);

								//Descripcion
								bombDescripcion = d.createElement('p');
								//Creo nodo de texto con los valores de la descripcion
								bombTexto = d.createTextNode(aBombillas[i].Descripcion);
								//appendchildeo prodTexto a prodDescripcion 
								bombDescripcion.appendChild(bombTexto); 
								bombDescripcion.className += "card-text mb-auto";

								//Appendchildeo prodDescripcion a divProduct 
								divTxtBomb.appendChild(bombDescripcion);

								//////////////////////////////////////
								//Div precio + boton 
								divInfoBomb = d.createElement('div');
								divInfoBomb.className += "row";
								divTxtBomb.appendChild(divInfoBomb);

									divPrecioBomb = d.createElement('div');
									divPrecioBomb.className += "col-6";
									divInfoBomb.appendChild(divPrecioBomb);

										//Precio
										precioBomb = d.createElement('p');
										//Creo un nodo de texto con los valores precios
										bombTexto = d.createTextNode('Precio: ' + aBombillas[i].Precio + '$');
										//appendchildleo el nodo de texto a la variable precio
										precioBomb.appendChild(bombTexto);
										//Appendchildleo pTexto al divcontenedor
										divPrecioBomb.appendChild(precioBomb);
									
									divBtnBomb = d.createElement('div');
									divBtnBomb.className += "col-6";
									divInfoBomb.appendChild(divBtnBomb);

									

								//boton Agregar al carrito
								bombBoton = d.createElement('button');
								bombBoton.classList.add('btn', 'btn-warning');
								bombBoton.textContent = 'Añadir al carrito';
								bombBoton.setAttribute( 'marcador', aBombillas[i].id);
								//appendCHildeo miNodoBoton al contenedor
								divBtnBomb.appendChild(bombBoton);

								bombBoton.onclick = agregarCarrito;


	}
};
//Renderizar Colgantes
var divColgantes;
var rowColgantes;
var h2Colgantes;
var h2ColgText;
var h3Colgantes;
var h3ColgText;
var infoColgantes;
var padColgantes;
var bordeColgantes;
var divImgColg;
var colgImagen;
var divPrecioColg;
var divInfoColg;
function renderColgantes() {
	limpProductos();
	//setTimeout(function () { /* ACCIONES */agregarPopup() }, 1000);
	for (var i = 0; i < aColgantes.length; i++) {
	

				infoColgantes = d.createElement('div');
				infoColgantes.className += "col-md-6";
				divRow.appendChild(infoColgantes);

					padColgantes = d.createElement('div');
					padColgantes.className += "padingprod";
					infoColgantes.appendChild(padColgantes);

						bordeColgantes = d.createElement('div');
						bordeColgantes.className += "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";
						padColgantes.appendChild(bordeColgantes);

							divImgColg = d.createElement('div');
							divImgColg.className += "col-4 nop";
							bordeColgantes.appendChild(divImgColg);

								//Imagen
								colgImagen = d.createElement('img');
								colgImagen.setAttribute('src', aColgantes[i].Imagen.src);
								colgImagen.style.width = '100px';
								colgImagen.style.height = '100px';
								colgImagen.className += "img1";
								//appendChildeo dTexto al divProd
								divImgColg.appendChild(colgImagen);

							divTxtColg = d.createElement('div');
							divTxtColg.className += "col-8 p-4 d-flex flex-column position-static";
							bordeColgantes.appendChild(divTxtColg);

								//Nombre producto
								h3Colgantes = d.createElement('h3');
								//Creo Nodo texto con los valores h3
								h3TextoColgantes = d.createTextNode(aColgantes[i].Nombre);
								//Appendchildeo el h3texto a h3Producto
								h3Colgantes.appendChild(h3TextoColgantes);
								//Appendchildeo h3 Producto a divProduct 
								divTxtColg.appendChild(h3Colgantes);

								//Descripcion
								colgDescripcion = d.createElement('p');
								//Creo nodo de texto con los valores de la descripcion
								colgTexto = d.createTextNode(aColgantes[i].Descripcion);
								//appendchildeo prodTexto a prodDescripcion 
								colgDescripcion.appendChild(colgTexto); 
								colgDescripcion.className += "card-text mb-auto";

								//Appendchildeo prodDescripcion a divProduct 
								divTxtColg.appendChild(colgDescripcion);

								//////////////////////////////////////
								//Div precio + boton 
								divInfoColg = d.createElement('div');
								divInfoColg.className += "row";
								divTxtColg.appendChild(divInfoColg);

									divPrecioColg = d.createElement('div');
									divPrecioColg.className += "col-6";
									divInfoColg.appendChild(divPrecioColg);

										//Precio
										precioColg = d.createElement('p');
										//Creo un nodo de texto con los valores precios
										colgTexto = d.createTextNode('Precio: ' + aColgantes[i].Precio + '$');
										//appendchildleo el nodo de texto a la variable precio
										precioColg.appendChild(colgTexto);
										//Appendchildleo pTexto al divcontenedor
										divPrecioColg.appendChild(precioColg);
									
									divBtnColg = d.createElement('div');
									divBtnColg.className += "col-6";
									divInfoColg.appendChild(divBtnColg);

									

								//boton Agregar al carrito
								colgBoton = d.createElement('button');
								colgBoton.classList.add('btn', 'btn-warning');
								colgBoton.textContent = 'Añadir al carrito';
								colgBoton.setAttribute( 'marcador', aColgantes[i].id);
								//appendCHildeo miNodoBoton al contenedor
								divBtnColg.appendChild(colgBoton);

								colgBoton.onclick = agregarCarrito;












		

		

		// divRow.appendChild(divColgantes);

		 


	}
};

/*Funcion Renderizar todos los productos*/
var divItems;
var rowItems;
var h2Items;
var h2ItemsText;
var h3Items;
var h3ItemsText;
var infoItems;
var padItems;
var bordeItems;
var divImgItems;
var itemsImagen;
var divPrecioItems;
var divInfoItems;

function renderItems() {
	limpProductos();
	//setTimeout(function () { /* ACCIONES */agregarPopup() }, 1000);
    for (var i = 0; i < aProductos.length; i++) {
       
		infoItems = d.createElement('div');
		infoItems.className += "col-md-6";
		divRow.appendChild(infoItems);

			padItems = d.createElement('div');
			padItems.className += "padingprod";
			infoItems.appendChild(padItems);

				bordeItems = d.createElement('div');
				bordeItems.className += "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";
				padItems.appendChild(bordeItems);

					divImgItems = d.createElement('div');
					divImgItems.className += "col-4 nop";
					bordeItems.appendChild(divImgItems);

						//Imagen
						itemsImagen = d.createElement('img');
						itemsImagen.setAttribute('src', aProductos[i].Imagen.src);
						itemsImagen.style.width = '100px';
						itemsImagen.style.height = '100px';
						itemsImagen.className += "img1";
						//appendChildeo dTexto al divProd
						divImgItems.appendChild(itemsImagen);

					divTxtItems = d.createElement('div');
					divTxtItems.className += "col-8 p-4 d-flex flex-column position-static";
					bordeItems.appendChild(divTxtItems);

						//Nombre producto
						h3Items = d.createElement('h3');
						//Creo Nodo texto con los valores h3
						h3TextoItems = d.createTextNode(aProductos[i].Nombre);
						//Appendchildeo el h3texto a h3Producto
						h3Items.appendChild(h3TextoItems);
						//Appendchildeo h3 Producto a divProduct 
						divTxtItems.appendChild(h3Items);

						//Descripcion
						itemsDescripcion = d.createElement('p');
						itemsDescripcion.className += "card-text mb-auto";
						//Creo nodo de texto con los valores de la descripcion
						itemsTexto = d.createTextNode(aProductos[i].Descripcion);
						//appendchildeo prodTexto a prodDescripcion 
						itemsDescripcion.appendChild(itemsTexto); 
						

						//Appendchildeo prodDescripcion a divProduct 
						divTxtItems.appendChild(itemsDescripcion);

						//////////////////////////////////////
						//Div precio + boton 
						divInfoItems = d.createElement('div');
						divInfoItems.className += "row";
						divTxtItems.appendChild(divInfoItems);

							divPrecioItems = d.createElement('div');
							divPrecioItems.className += "col-6";
							divInfoItems.appendChild(divPrecioItems);

								//Precio
								precioItems = d.createElement('p');
								//Creo un nodo de texto con los valores precios
								itemsTexto = d.createTextNode('Precio: ' + aProductos[i].Precio + '$');
								//appendchildleo el nodo de texto a la variable precio
								precioItems.appendChild(itemsTexto);
								//Appendchildleo pTexto al divcontenedor
								divPrecioItems.appendChild(precioItems);
							
							divBtnItems = d.createElement('div');
							divBtnItems.className += "col-6";
							divInfoItems.appendChild(divBtnItems);

							

						//boton Agregar al carrito
						itemsBoton = d.createElement('button');
						itemsBoton.classList.add('btn', 'btn-warning');
						itemsBoton.textContent = 'Añadir al carrito';
						itemsBoton.setAttribute( 'marcador', aProductos[i].id);
						//appendCHildeo miNodoBoton al contenedor
						divBtnItems.appendChild(itemsBoton);

						itemsBoton.onclick = agregarCarrito;

    };
    
}


/*Funcion crear popup */
function agregarPopup() {
		popupWrapper = d.createElement('div');
		popupWrapper.className += "popupContainer", "container";
		popupWrapper.style.background = 'rgba(0, 0, 0, 0.5)';
		popupWrapper.style.position = 'fixed';
		popupWrapper.style.width = '100%';
		popupWrapper.style.height = '100%';
		popupWrapper.style.top = '0';
		popupWrapper.style.left = '0';

		popup =  d.createElement('div');
		popup.style.width = '600px';
		popup.style.borderRadius = '4px';
		popup.className += "row";
		popup.style.background = 'white';
		popup.style.margin = '10% auto';
		popup.style.padding = '20px';
		popup.style.postition = 'relative';

		tituloOferta = d.createElement('h2');
		ofertaNodo = d.createTextNode('OFERTA');
		tituloOferta.className += "col-12";
		tituloOferta.style.background = '#F1C96D';
		tituloOferta.style.textAlign = 'center';


		tituloOferta.appendChild(ofertaNodo);
		popup.appendChild(tituloOferta);

		
		infoColgantes = d.createElement('div');
				infoColgantes.className += "col-md-12";
				popup.appendChild(infoColgantes);

					padColgantes = d.createElement('div');
					padColgantes.className += "padingprod";
					infoColgantes.appendChild(padColgantes);

						bordeColgantes = d.createElement('div');
						bordeColgantes.className += "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";
						padColgantes.appendChild(bordeColgantes);

							divImgColg = d.createElement('div');
							divImgColg.className += "col-4 nop";
							bordeColgantes.appendChild(divImgColg);

								//Imagen
								colgImagen = d.createElement('img');
								colgImagen.setAttribute('src', aColgantes[0].Imagen.src);
								colgImagen.style.width = '100px';
								colgImagen.style.height = '100px';
								colgImagen.className += "img1";
								//appendChildeo dTexto al divProd
								divImgColg.appendChild(colgImagen);

							divTxtColg = d.createElement('div');
							divTxtColg.className += "col-8 p-4 d-flex flex-column position-static";
							bordeColgantes.appendChild(divTxtColg);

								//Nombre producto
								h3Colgantes = d.createElement('h3');
								//Creo Nodo texto con los valores h3
								h3TextoColgantes = d.createTextNode(aColgantes[0].Nombre);
								//Appendchildeo el h3texto a h3Producto
								h3Colgantes.appendChild(h3TextoColgantes);
								//Appendchildeo h3 Producto a divProduct 
								divTxtColg.appendChild(h3Colgantes);

								//Descripcion
								colgDescripcion = d.createElement('p');
								//Creo nodo de texto con los valores de la descripcion
								colgTexto = d.createTextNode(aColgantes[0].Descripcion);
								//appendchildeo prodTexto a prodDescripcion 
								colgDescripcion.appendChild(colgTexto); 
								colgDescripcion.className += "card-text mb-auto";

								//Appendchildeo prodDescripcion a divProduct 
								divTxtColg.appendChild(colgDescripcion);

								
								//Div precio + boton 
								divInfoColg = d.createElement('div');
								divInfoColg.className += "row";
								divTxtColg.appendChild(divInfoColg);

									divPrecioColg = d.createElement('div');
									divPrecioColg.className += "col-6";
									divInfoColg.appendChild(divPrecioColg);

										//Precio
										precioColg = d.createElement('p');
										//Creo un nodo de texto con los valores precios
										colgTexto = d.createTextNode('Precio: ' + aColgantes[0].Precio + '$');
										//appendchildleo el nodo de texto a la variable precio
										precioColg.appendChild(colgTexto);
										//Appendchildleo pTexto al divcontenedor
										divPrecioColg.appendChild(precioColg);

										

									
									divBtnColg = d.createElement('div');
									divBtnColg.className += "col-6";
									divInfoColg.appendChild(divBtnColg);

									

								//boton Agregar al carrito
								colgBoton = d.createElement('button');
								colgBoton.classList.add('btn', 'btn-warning');
								colgBoton.textContent = 'Añadir al carrito';
								colgBoton.setAttribute( 'marcador', aColgantes[0].id);
								//appendCHildeo miNodoBoton al contenedor
								divBtnColg.appendChild(colgBoton);

								colgBoton.onclick = agregarCarrito;

			///////////////////////////////////////////////////
		


		



		popupWrapper.appendChild(popup);

		
		body.appendChild(popupWrapper);

		setTimeout(function () { /* ACCIONES */borrarPopup() }, 10000);

		
		
};
/*Funcion borrar popup */
function borrarPopup() {
		popupWrapper.remove(popupWrapper.firstChild);
	  
};
/*Funcion contadora de productos */

    function contador() {
        
        //Agrego el numero de items al carrito
        cont++
        console.log(cont);
        itemsAg = d.getElementById('nitems');
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
//Funcion agregar carrito
function agregarCarrito() {
	carrito.push(this.getAttribute('marcador'));

	contador();
	calcularTotal();
	
	
	
	};

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
	cont = 0;
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

//Funcion renderizar carrito
var carritoWraper;
var h2Cart;
function renderizarCarrito() {
	
	carritoWrapper = d.createElement('div');
	carritoWrapper.className += "popupContainer";
	carritoWrapper.style.background = 'rgba(0, 0, 0, 0.5)';
	carritoWrapper.style.position = 'fixed';
	carritoWrapper.style.width = '100%';
	carritoWrapper.style.height = '100%';
	carritoWrapper.style.top = '0';
	carritoWrapper.style.left = '0';

	cart =  d.createElement('div');
	cart.style.width = '400px';
	cart.style.borderRadius = '4px';
	cart.style.background = 'white';
	cart.style.margin = '10% auto';
	cart.style.padding = '20px';
	cart.style.postition = 'relative';

	headerCart = d.createElement('div');
	headerCart.style.width = '100%';
	headerCart.style.textAlign = 'right';


		//boton cerrar form
		cancelCart = d.createElement('button');
		cancelCart.classList.add('btn', 'btn-danger');
		cancelCart.textContent = 'X';
		cancelCart.style= 'align-right';

		cancelCart.onclick = cerrarCart;

		headerCart.appendChild(cancelCart);
		cart.appendChild(headerCart);


		h2Cart = d.createElement('h2');
		h2Cart.textContent = 'Carrito de compras';
		h2Cart.style= 'text-align: center';

		cart.appendChild(h2Cart);

	

//////////////////////////////////	
// Vaciamos todo el html

// Quitamos los duplicados
const carritoSinDuplicados = [...new Set(carrito)];
// Generamos los Nodos a partir de carrito
carritoSinDuplicados.forEach((item) => {
	// Obtenemos el item que necesitamos de la variable aProductos
	const miItem = aProductos.filter((itemProductos) => {
		// ¿Coincide las id? Solo puede existir un caso
		return itemProductos.id === parseInt(item);
	});
	// Cuenta el número de veces que se repite el producto
	var numeroUnidadesItem = carrito.reduce((total, itemId) => {
		// ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
		return itemId === item ? total += 1 : total;
	}, 0);

	// Creamos el nodo del item del carrito
	const miNodo = document.createElement('li');
		miNodo.classList.add('list-group-item', 'text-right', 'col-12');
		miNodo.style.margin = '1rem 2rem';
		miNodo.style.width = 'auto'

		miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].Nombre} - ${miItem[0].Precio}$`;
	// Boton de borrar todos los productos repetidos
	const miBoton = document.createElement('button');
		miBoton.classList.add('btn', 'btn-danger', 'mx-5');
		miBoton.textContent = 'X';
		miBoton.style.marginLeft = '1rem';
		miBoton.dataset.item = item;
		miBoton.dataset.numeroUnidadesItem = numeroUnidadesItem;
		miBoton.addEventListener('click', borrarItemCarrito);

		
		




	// Mezclamos nodos
	miNodo.appendChild(miBoton);
	cart.appendChild(miNodo);
	(numeroUnidadesItem);

	

	carritoWrapper.appendChild(cart);
	body.appendChild(carritoWrapper);
	setTimeout(function () { /* ACCIONES */borrarPopup() }, 10000);

});	
	//Contenedor boton finalizar compra
	cartFin = d.createElement('div');
	cartFin.style = 'display : block';
	cartFin.style = 'width : 100%';
	cartFin.style = 'text-align : center';

	cart.appendChild(cartFin);

	//Boton finalizar compra
	cartCompra = d.createElement('button');
	cartCompra.classList.add('btn', 'btn', 'mx-5');
	cartCompra.textContent = 'Finalizar compra';
	cartCompra.classList.add('mt-4');
	cartCompra.style = ('font-weight : bold');

	cartFin.onclick = miFormulario;
	cartFin.appendChild(cartCompra);

}
var numeroItem;
function borrarItemCarrito(evento) {
	
	cerrarCart()
	
	
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
	 numeroItem = evento.target.dataset.numeroUnidadesItem;
		
	
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
	restarProd();
}


var labelPago; 

function miFormulario() {
	formWrapper = d.createElement('div');
	//Contenedor formulario
	formWrapper.className += "popupContainer";
		formWrapper.style.background = 'rgba(0, 0, 0, 0.8)';
		formWrapper.style.position = 'fixed';
		formWrapper.style.width = '100%';
		formWrapper.style.height = '100%';
		formWrapper.style.top = '0';
		formWrapper.style.left = '0';
	//Formulario
		form =  d.createElement('form');
		form.style.width = '500px';
		form.style.background = 'white';
		form.style.margin = '10% auto';
		form.style.padding = '20px 40px';
		form.style.postition = 'relative';
		form.style.borderRadius = '5px';

	//Header Formulario
	headerForm = d.createElement('div');
	headerForm.style.width = '100%';
	headerForm.style.textAlign = 'right';


		//boton cerrar form
		cancelForm = d.createElement('button');
		cancelForm.classList.add('btn', 'btn-danger');
		cancelForm.textContent = 'X';
		cancelForm.style= 'align-right';

		cancelForm.onclick = cerrarForm;

		headerForm.appendChild(cancelForm);
		form.appendChild(headerForm);





	//label Nombre
	labelNombre = d.createElement('label');
	labelNombre.textContent = 'Nombre:';
	labelNombre.classList.add('mt-3');
	labelNombre.style = ('display : block', 'font-weight : bold');
	form.appendChild(labelNombre);
	//Input Nombre  
	inputNombre = d.createElement('input');
	inputNombre.setAttribute( 'placeholder', 'ingrese su nombre');
	inputNombre.classList.add('mt-2', 'pt-2');
	inputNombre.setAttribute( 'type', 'text');
	inputNombre.style = 'display : block';
	inputNombre.style = 'width : 100%';
	form.appendChild(inputNombre);

	//label numero
	labelNumero = d.createElement('label');
	labelNumero.textContent = 'Apellido:';
	labelNumero.style = ('display : block', 'font-weight : bold');
	labelNumero.classList.add('mt-3');
	form.appendChild(labelNumero);
	//Input numero
	inputNumero = d.createElement('input');
	inputNumero.setAttribute( 'placeholder', 'ingrese su apellido');
	inputNumero.setAttribute( 'type', 'tel');
	inputNumero.classList.add('mt-2', 'pt-2');
	inputNumero.style = 'display : block';
	inputNumero.style = 'width : 100%';
	form.appendChild(inputNumero);

	//label Email
	labelEmail = d.createElement('label');
	labelEmail.textContent = 'Email:';
	labelEmail.classList.add('mt-3');
	labelEmail.style = ('display : block', 'font-weight : bold');
	form.appendChild(labelEmail);
	//Input Email 
	inputEmail = d.createElement('input');
	inputEmail.setAttribute( 'placeholder', 'ingrese su email');
	inputEmail.setAttribute( 'type', 'email');
	inputEmail.classList.add('mt-2', 'pt-2');
	inputEmail.style = 'display : block';
	inputEmail.style = 'width : 100%';
	form.appendChild(inputEmail);

	//label Lugar
	labelLugar = d.createElement('label');
	labelLugar.textContent = 'Lugar:';
	labelLugar.classList.add('mt-3');
	labelLugar.style = ('display : block', 'font-weight : bold');
	form.appendChild(labelLugar);
	//Input Lugar
	inputLugar = d.createElement('input');
	inputLugar.setAttribute( 'placeholder', 'ingrese su lugar de envío');
	inputLugar.setAttribute( 'type', 'text');
	inputLugar.classList.add('mt-2', 'pt-2');
	inputLugar.style = 'display : block';
	inputLugar.style = 'width : 100%';
	form.appendChild(inputLugar);

	//label Fecha
	labelFecha = d.createElement('label');
	labelFecha.textContent = 'Fecha de envío:';
	labelFecha.classList.add('mt-3');
	labelFecha.style = ('display : block', 'font-weight : bold');
	form.appendChild(labelFecha);
	//Input Fecha
	inputFecha = d.createElement('input');
	inputFecha.setAttribute( 'placeholder', 'ingrese su fecha de entrega');
	inputFecha.setAttribute( 'type', 'datetime-local');
	inputFecha.classList.add('mt-2', 'pt-2');
	inputFecha.style = 'display : block';
	inputFecha.style = 'width : 100%';

	form.appendChild(inputFecha);

	//Label Metodo de pago
	labelPago = d.createElement('label');
	labelPago.textContent = 'Método de pago:';
	labelPago.classList.add('mt-3');
	labelPago.style = ('display : block', 'font-weight : bold');
	form.appendChild(labelPago);

	//Input metodo de pago
	selectPago = d.createElement('select');
	selectPago.style = ('display : block', 'font-weight : bold');
		optionPago = d.createElement('option');
		optionPago.style = ('display : block', 'font-weight : bold');
		optionPago.textContent = 'MercadoPago';
		selectPago.appendChild(optionPago);

		option2Pago = d.createElement('option');
		option2Pago.style = ('display : block', 'font-weight : bold');
		option2Pago.textContent = 'Transferencia bancaria';
		selectPago.appendChild(option2Pago);



	form.appendChild(selectPago);





	//Contenedor boton finalizar compra
	divFin = d.createElement('div');
	divFin.style = 'display : block';
	divFin.style = 'width : 100%';
	divFin.style = 'text-align : center';

	form.appendChild(divFin);




	//Boton finalizar compra
	finalCompra = d.createElement('button');
	finalCompra.classList.add('btn', 'btn', 'mx-5');
	finalCompra.textContent = 'Finalizar compra';
	finalCompra.classList.add('mt-4');
	finalCompra.style = ('font-weight : bold');

	finalCompra.onclick = finalizarCompra;
	divFin.appendChild(finalCompra);

	









		formWrapper.appendChild(form);
		 

		
		body.appendChild(formWrapper);

}



//Funcion cerrar Formulario
function cerrarForm() {
	formWrapper.remove(formWrapper.firstChild);
};

//Function cerrar Carrito
function cerrarCart() {
	carritoWrapper.remove(carritoWrapper.firstChild);
}

//Funcion finalizar compra
function finalizarCompra() {
	 reiniciarCont()
	 
	cerrarCart()
	cerrarForm()
	vaciarCarrito()

};

function reiniciarCont() {
	cont = 0;
	var itemsAg = d.getElementById('nitems');
        itemsAg.innerHTML = cont;

}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
	cont = 0;
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

function restarProd() {
	cont = cont - parseInt(numeroItem);
	itemsAg.innerHTML = cont;
	return cont;
	
}