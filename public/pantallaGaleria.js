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
        var grid = document.createElement("div");
        grid.classList.add("container");
        
        var row = document.createElement("div");
        row.classList.add("row");
        
        var productos = getProducts();
        var cols = new Array(4);

        for(var j=0; j < cols.length ; j++){
            cols[j] = document.createElement("div");
            cols[j].classList.add("col-sm");
            
        }

        for(var i=0; i < productos.length ; i+4){
            j=0;

            cols[j].appendChild(createNode(productos[i]));

            if((i+1) < productos.length){
                cols[j+1].appendChild(createNode(productos[i+1]));
                
                if((i+2) < productos.length){
                    cols[j+2].appendChild(createNode(productos[i+2]));
        
                    if((i+3) < productos.length){
                        cols[j+3].appendChild(createNode(productos[i+3]));
                    }
                }
            }
        }

        for(j=0 ; j < cols.length ; j++){
            row.appendChild(cols[j]);
        }
        grid.appendChild(row);
        gallery.appendChild(grid);
        
    return gallery;
}

document.getElementById("galeria").appendChild(fillGallery())

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
