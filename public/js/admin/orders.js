let _orders = []

// generate a order node
function getOrderNode (order, index) {
  return $('<a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapseExample'+index+'" role="button" aria-expanded="false" aria-controls="collapseExample'+index+'"></a>')
    .append(
      "#"+(index+1)+" "+order[0].name,
      $('<div class="collapse" id="collapseExample'+index+'"></div>').append(
        getProductOrderNode(order)
      )
    )
}

// generate order nodes for every order
function fillOrders () {
  _orders.forEach((order, index)=>{
    $("#orders").append(getOrderNode(order, index))
  })
}

// generate a produc list for order node
function getProductOrderNode (order) {
  let products = $('<div></div>')
  order.forEach((product, index) => {
    if (index != 0) products.append(getCartNode(product))
  })
  return products
}