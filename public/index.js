function goTo (name) {
	hideAll()
	// reveal only the selected view
	$("#"+name).css("display", "block")
}

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
	// Evaluate login
	goTo("user")
}

function createNode(productObj){

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("cardProducto");

    var imagen = document.createElement("img");
    imagen.src = productObj.img;
    imagen.classList.add("imgProducto");
    card.appendChild(imagen);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
      var nombre = document.createElement("h5");
      nombre.appendChild(document.createTextNode(productObj.nombre));
      cardBody.appendChild(nombre);

      var valor = document.createElement("p");
      valor.appendChild(document.createTextNode(productObj.valor));
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