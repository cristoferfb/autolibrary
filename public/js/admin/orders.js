let _orders = []

// insert a order node for every order
function fillOrders () {
	_orders.forEach((order, index) => 
		$("#orders").append(getOrderNode(order, index)))
}

// generate a order node
function getOrderNode (order, index) {
	return $('<a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapseOrder'+index+'" role="button" aria-expanded="false" aria-controls="collapseOrder'+index+'"></a>')
		.append(
			"#"+(index+1)+" "+order[0].name,
			$('<div class="collapse" id="collapseOrder'+index+'"></div>').append(
					getOrderList(order)))
}

// generate a list of products
function getOrderList (order) {
	let products = $('<ul class="list-group list-group-flush"></ul>')
	order.forEach((product, index) => 
		index != 0 && products.append(getOrderProduct(product)))
	return products
}

// get a product node for insert in a list
function getOrderProduct (product) {
	return $('<li class="list-group-item"></li>').append(
		$('<div class="row"></div>').append(
			$('<div class="col-xs-2"></div>').append(
				$('<img src="'+product.img+'" class="img-thumbnail"></img>')),
			$('<div class="col-4 d-md-none d-lg-block"></div>').text(product.name),
			$('<div class="col"></div>').text('$'+product.value),
			$('<div class="col text-center"></div>').append(
				$('<input value="'+product.count+'" class="cartNodeCount" disabled>'))))
}