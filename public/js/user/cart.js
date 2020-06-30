let _cart = []

// return current user cart
let getCart = () => {return _cart}

// Fill cart node with product nodes from cart array
let addCartNode = product => $('#cart').append(getCartNode(product))

// remove an element from user cart
function removeProduct (node,name) {
	$(node).parent().parent().parent().remove()
	for (let i=0; i<_cart.length; i++)
		_cart[i].name.trim().toUpperCase() == name.trim().toUpperCase() && _cart.splice(i, 1)
}

// add product to cart array
function addProductToCart (id) {
	// check if product exist
	let flag = false
	let currentProduct = getProduct(id) 
	for(var i=0; i <_cart.length; i++){
		let compareProduct = _cart[i]
		if(currentProduct.name == compareProduct.name){
			compareProduct.count ++
			_cart[i] = compareProduct
			return
		}
	}
	currentProduct.count = 1
	_cart.push(currentProduct)
	addCartNode(currentProduct)
	return
}

// add cart to orders list
function processOrder () {
	let order = [{name: userEmail}].concat(_cart)
	$('.cartNodeCount').map((index, node) => {
		order[index+1].count = parseInt($(node).val())})
	_cart = []
	$("#cart").empty()
	_orders.push(order)
}

// get a cart node for insert in DOM
function getCartNode (product) {
	return $('<li class="list-group-item"></li>').append(
		$('<div class="row"></div>').append(
			$('<div class="col-xs-2"></div>').append(
				$('<img src="'+product.img+'" class="img-thumbnail"></img>')),
			$('<div class="col-4"></div>').text(product.name),
			$('<div class="col-3"></div>').text('$'+product.value),
			$('<div class="col"></div>').append(
				$('<input value="'+product.count+'" class="cartNodeCount">')),
			$('<div class="col text-right"></div>').append(
				$('<button class="btn btn-danger" onclick="removeProduct(this,\''+product.name+'\')"></button>').append(
					$('<i class="fas fa-trash-alt"></i>')))))
}