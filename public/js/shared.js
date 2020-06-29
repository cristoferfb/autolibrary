// current logged user email
let userEmail = ""

// list of products in the store
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
  'name': 'Colafria',
  'img': 'https://officemax.vteximg.com.br/arquivos/ids/170272-1000-1000/92616_1.jpg?v=636246906670000000',
  'value': 1500
}]

// get products from api
function getProducts () {
  let products = _products
  return products
}

// get product by id
function getProduct (id) {
  return _products[id]
}

// clear all nodes inserted by other functions
function clearAll () {
  $('#cart').empty()
  $('#products').empty()
  $("#orders").empty()
}

// Go to specific view (login, user, admin)
function goTo (name) {
  hideAllViews()
  // reveal only the selected view
  $('#'+name).css('display', 'block')
}

// hide all views xd
function hideAllViews () {
  // styles of  login
  $('body').css('display', 'block')
  $('body').css('align-items', 'left')
  // hide all views
  $('#login').css('display', 'none')
  $('#admin').css('display', 'none')
  $('#user').css('display', 'none')
}

// evaluate login for redirect
function evaluateLogin () {
  userEmail = $('#inputUser').val()
  clearAll()
  switch (userEmail) {
    case 'admin':
      fillOrders()
      goTo('admin')
      break
    case 'user':
      fillProductGallery()
      goTo('user')
      break
  }
}