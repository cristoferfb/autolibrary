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
				getOrderList(order),
				$('<div class="row"></div>').append(

					$('<button class="btn btn-danger" onclick="removeOrder(this,'+index+')"></button>').append(
						$('<i class="fas fa-trash-alt"></i>')
					),
					$('<button class="btn btn-success" onclick="checkOrder(this,'+index+')"></button>').append(
						$('<i class="fas fa-check"></i>')
					)
				)
			)
		)
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

//set the index order as finished and procede to discount the items of the library stock
function checkOrder(node, index){
	$(node).parent().parent().parent().parent().remove()
	let currentOrder = _orders[index]

	for(let i=1 ; i< currentOrder.length;i++){
		for(let j=0; j<_inventory.length;j++){
			if(currentOrder[i].name == _inventory[j].name){
				currentStock = _inventory[j].stock - currentOrder[i].count
				if(currentStock > 0){
					_inventory[j].stock = currentStock
				}else{
					_inventory[j].stock = 0
				}
				reloadInventory()
				return
			}
		}
	}
}

//delete the order without discounting the items of the stock
function removeOrder(node, index){
	$(node).parent().parent().parent().parent().remove()
	_orders.splice(index, 1)
}