// Go to specific view (login, user, admin)
function goTo (name) {
	hideAll()
	// reveal only the selected view
	$("#"+name).css("display", "block")
}

// hide all views
function hideAll () {
	// styles of  login
	$("body").css("display", "block")
	$("body").css("align-items", "left")
	// hide all views
	$('#login').css("display", "none")
	$('#admin').css("display", "none")
	$('#user').css("display", "none")
}

function evaluateLogin () {
	// TODO Evaluate login
	goTo("user")
}

// get a product node for insert in DOM
function obtenerNodoProducto(product) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("cardProducto");

  var imagen = document.createElement("img");
  imagen.src = product.img;
  imagen.classList.add("imgProducto");
  card.appendChild(imagen);

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
    
  var nombre = document.createElement("h5");
  nombre.appendChild(document.createTextNode(product.nombre));
  cardBody.appendChild(nombre);

  var valor = document.createElement("p");
  valor.appendChild(document.createTextNode(product.valor));
  cardBody.appendChild(valor);

  var disponibilidad = document.createElement("p");
  disponibilidad.appendChild(document.createTextNode("Disponibilidad"));
  cardBody.appendChild(disponibilidad);
  
  var boton = document.createElement("a");
  boton.classList.add("btn");
  boton.classList.add("btnCompra");

  var icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-cart-plus");
  icon.classList.add("fa-lg");
  icon.classList.add("iconoCarrito");
  boton.appendChild(icon);

  var btnText = document.createElement("p");
  btnText.classList.add("iconoCarrito");
  btnText.appendChild(document.createTextNode("Agregar al carro"));
  
  boton.appendChild(btnText);
  
  cardBody.appendChild(boton);
  card.appendChild(cardBody);

  return card;
}