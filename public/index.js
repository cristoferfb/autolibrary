// Go to specific view (login, user, admin)
function goTo (name) {
	hideAll()
	// reveal only the selected view
	$('#'+name).css('display', 'block')
}

// hide all views
function hideAll () {
	// styles of  login
	$('body').css('display', 'block')
	$('body').css('align-items', 'left')
	// hide all views
	$('#login').css('display', 'none')
	$('#admin').css('display', 'none')
	$('#user').css('display', 'none')
}

function evaluateLogin () {
	switch ($('#inputUser').val()) {
    case 'admin':
      goTo('admin')
    case 'user':
      fillProductGallery()
      goTo('user')
  }
}

function getCartNode (product) {
  return $('<li class="list-group-item"></li>').append(
    $('<div class="row"></div>').append(
      $('<div class="col-2"></div>').append(
        $('<img src="'+product.img+'" class="img-thumbnail"></img>')
      ),
      $('<div class="col-4"></div>').text(product.name),
      $('<div class="col-3"></div>').text('$'+product.value),
      $('<div class="col"></div>').append(
        $('<input value="1" class="cartNodeCount">')
      ),
      $('<div class="col text-right"></div>').append(
        $('<button class="btn btn-danger"></button>').append(
          $('<i class="fas fa-trash-alt"></i>')
        )
      )
    )
  )
}

// add product to cart array
function addProductToCart (id) {
  let product = getProduct(id)
  _cart.push(product)
  fillCart()
}

// Fill cart node with product nodes from cart array
function fillCart () {
  _cart.forEach(product => {
    $("cart").append(getCartNode(product))
  })
}

// get a product node for insert in DOM
function getProductNode (product) {
  return $('<div class="card mb-3"></div>').append(
    $('<img src="'+product.img+'" class="card-img-top">'),
    $('<div class="card-body"></div>').append(
      $('<h5 class="card-title"></h5>').text(product.name),
      $('<h5 class="card-title"></h5>').text("$"+product.value),
      $('<a href="#" class="btn btn-primary" onclick="">Comprar</a>')
    )
  )
}

// fill gallery node with product nodes
function fillProductGallery () {
  getProducts().forEach(product => {
    $('#products').append(
      $('<div class="col-6 col-md-4 col-lg-3"></div>')
        .append(getProductNode(product))
    )
  })
}

// get products from api
function getProducts () {
  let products = _products
  return products
}

// get product by id
function getProduct (id) {
  return _products[id]
}

let _products = [{
  'id': 0,
  'name': 'Hoja de cuadernillo',
  'img': 'https://cdn.shopify.com/s/files/1/1045/5226/products/hoja_de_cuadernillo_grande.gif?v=1498574172',
  'value': 50
},{
  'id': 1,
  'name': 'Lapiz pasta',
  'img': 'https://http2.mlstatic.com/lapiz-pasta-bic-D_NQ_NP_20527-MLC20193537461_112014-F.jpg',
  'value': 500
},{
  'id': 2,
  'name': 'Corchetera',
  'img': 'https://isofit.cl/wp-content/uploads/2017/01/11281-K-Corchetera-Met%C3%A1lica-CM-50.jpg',
  'value': 3000
},{
  'id': 3,
  'name': 'pegamento',
  'img': 'https://officemax.vteximg.com.br/arquivos/ids/170272-1000-1000/92616_1.jpg?v=636246906670000000',
  'value': 10000
}]

let _orders = []

let _cart = []