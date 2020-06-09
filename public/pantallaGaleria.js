function getProducts(){
    let products = [
        {
            "id":1,
            "nombre":"cuaderno",
            "valor":"$1500",
            "img":"https://www.dimeiggs.cl/media/catalog/product/cache/2/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/3/7/377347_f2.jpg",

        },
        {
            "id":2,
            "nombre":"Estuche",
            "valor":"$1000",
            "img":"https://cdn.shopify.com/s/files/1/0345/0513/0029/products/378284_estuche_1_1000x.jpg?v=1583435841",
        },
        {
            "id":3,
            "nombre":"Cuadernillo de hoja cuadriculada",
            "valor":"$800",
            "img":"https://images.lider.cl/wmtcl?source=url[file:/productos/295777a.jpg]&sink",
        },
        {
            "id":4,
            "nombre":"Libreta",
            "valor":"$2500",
            "img":"https://cregalos.cl/wp-content/uploads/2018/02/T278-azul-www.cregalos.cl_.jpg",
        },
        {
            "id":5,
            "nombre":"Papelillos",
            "valor":"$500",
            "img":"https://cdnx.jumpseller.com/kushbreak-growshop/image/2557461/resize/635/635?1580312259",
        }
    ]

    return products;
}

function fillGallery(){
    //creo la seccion principal
    var gallery = document.createElement("div");

        //creo la tabla donde se iran ordenando los productos
        var table = document.createElement("table");
        table.classList.add("tablaGaleria");

        //contador para mas adelante
            var i = 0;

        //creo la primera fila fuera del ciclo for
            var row = document.createElement("tr");

        //para cada elemento de getProducts() guardado en product
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
                            nombre.appendChild(document.createTextNode(product.nombre));
                            cardBody.appendChild(nombre);

                            var valor = document.createElement("p");
                            valor.appendChild(document.createTextNode(product.valor));
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

document.getElementById("galeria").appendChild(fillGallery())
