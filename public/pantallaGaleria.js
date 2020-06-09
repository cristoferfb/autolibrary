function fillGallery(){
    //creo la seccion principal
    var gallery = document.createElement("div");

        //creo la tabla donde se iran ordenando los productos
        var table = documen.createElement("table");
        table.classList.add("tablaGaleria");

        //contador para mas adelante
            var i = 0;

        //creo la primera fila fuera del ciclo for
            var row = document.createElement("tr");

        //para cada elemento de getProduct() guardado en product
            for(let product in getProducts()){


                //si el contador es mayor o igual a 3 se guarda la fila actual y se crea una nueva
                if(i >= 3){
                    table.appendChild(row);
                    row = document.createElement("tr");
                    i = 0;
                }

                //se crean las celdas donde iran las cards (1 celda 1 card)
                var cell = document.createElement("td");

                    //se crea la carta
                    var card = document.createElement("div");
                    card.classList.add("card");

                    //se crea la seccion de la imagen
                        var imagen = document.createElement("img");
                        imagen.classList.add("card-img-top");
                        imagen.classList.add("imGallery");
                        imagen.src = product.img;
                        card.appendChild(imagen);

                    //se crea la seccion del cuerpo de la carta
                        var cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");

                            //se le agrega los datos de nombre y valor
                            var nombre = document.createElement("h5");
                            nombre.appendChild(documen.createTextNode(producto.nombre));
                            cardBody.appendChild(nombre);

                            var valor = document.createElement("p");
                            valor.appendChild(document.createTextNode(producto.valor));
                            cardBody.appendChild(valor);

                        //se guarda el cardBody en la carta
                        card.appendChild(cardBody);
                    //esta a su vez se guarda en la celda
                    cell.appendChild(card);
                //y esta a su vez se guarda en la fila actual
                row.appendChild(cell);

                //se aumenta el contador solo pueden haber 3 cartas por fila
                i++;
                        
            }
        gallery.appendChild(table);
    return gallery;
}

