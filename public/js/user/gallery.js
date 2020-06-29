// fill gallery node with product nodes
function fillProductGallery () {
  getProducts().forEach(product => {
    $('#products').append(
      $('<div class="col-6 col-md-4 col-lg-3"></div>')
        .append(getProductNode(product))
    )
  })
}

// get a product node for insert in DOM
function getProductNode (product) {
  return $('<div class="card mb-3"></div>').append(
    $('<img src="'+product.img+'" class="card-img-top">'),
    $('<div class="card-body"></div>').append(
      $('<h5 class="card-title"></h5>').text(product.name),
      $('<h5 class="card-title"></h5>').text("$"+product.value),
      $('<btn class="btn btn-primary" onclick="addProductToCart('+product.id+')"></btn>')
        .text("Comprar")
    )
  )
}

