function createNode(){
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("cardProducto");

    var imagen = document.createElement("img");
    imagen.classList.add("imgProducto");
    card.appendChild(imagen);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
      var nombre = document.createElement("h5");
      nombre.appendChild(document.createTextNode("Nombre producto"));
      cardBody.appendChild(nombre);

      var valor = document.createElement("p");
      valor.appendChild(document.createTextNode("Valor"));
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


document.getElementById("producto").appendChild(createNode());