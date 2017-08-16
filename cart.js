const products = $(".col-md-6");
products.each(function(i, product) {
  $(product).append('<input type="button" value="Add to Cart" class="btn-success">');
});

const cart = $('.cart');
const orderItems = [];
$(".btn-success").click(function () {
    // Adding name and price of selected item into orderItem array
    const orderItem = {};
    orderItem["name"] = $(this).prev().prev().html();
    orderItem["price"] = $(this).prev().html();
    orderItems.push(orderItem);
    // adding item to cart
    const itemsOrdered = $('<div class="items-ordered"></div>');
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    $(orderItems).each(function(i, item) {
      itemsOrdered.html(item.name + ' ' + item.price);
      $('.cart').append(itemsOrdered);
      // converting price to float and calculating subtotal, tax, total
      price = item.price.substring(1);
      subtotal += parseFloat(price)
      $('#subtotal').html("Subtotal: $" + subtotal);
      tax = 0.10 * subtotal;
      $('#tax').html("Tax: $" + tax.toFixed(2));
      total = subtotal + tax;
      $('#total').html("Total: $" + total.toFixed(2));
      // make the buy now button visible
      $('#buy-now').css('visibility', 'visible');
    });
});
