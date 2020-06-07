function createNode(){
    var card = document.createElement("div");
    card.classList.add("card")

    var imagen = document.createElement("img");
    imagen.classList.add("img")
    card.appendChild("imagen")

    var cardBody = document.createElement("div");
    
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

        var icon = document.createElement("i");
        icon.classList.add("fas.fa-cart-plus.fa-lg");
        boton.appendChild(icon);

        var btnText = document.createElement("p");
        btnText.appendChild(document.createTextNode("Agregar al carro"));
        boton.appendChild(btnText);
      
      cardBody.appendChild(boton);
    card.appendChild(cardBody);

    return card;
}


document.getElementById("producto").appendChild(createNode());