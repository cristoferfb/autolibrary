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
	// TODO Evaluate login
	goTo('user')
}

// get a product node for insert in DOM
function getProductNode (product) {
  return $('<div class="card mb-3"></div>').append(
    $('<img src="'+product.img+'" class="card-img-top">'),
    $('<div class="card-body"></div>').append(
      $('<h5 class="card-title"></h5>').text(product.name),
      $('<h5 class="card-title"></h5>').text("$"+product.value),
      $('<a href="#" class="btn btn-primary">Comprar</a>')
    ),
  )
}

function fillProductGallery () {
  getProducts().forEach(product => {
    let productNode = 
    $('#products').append(
      $('<div class="col-6 col-md-4 col-lg-3"></div>')
        .append(getProductNode(product))
    )
  })
}

function getProducts () {
  return [{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  },{
    'name': 'test',
    'img': 'https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg',
    'value': '10000'
  }]
}