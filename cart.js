// var products = $(".col-md-6");
// var orderItems = [];
// products.each(function(i, product) {
//   var orderItem = {};
//   orderItem["name"] = $(product).children("p").html();
//   orderItem["price"] = $(product).children("p").next().html();
//   console.log(orderItem);
//   orderItems.push(orderItem);
// });
// console.log(orderItems);

const products = $(".col-md-6");
products.each(function(i, product) {
  $(product).append('<input type="button" value="Add to Cart" class="btn-success">');
});

const cart = $('.cart');
const orderItems = [];
$(".btn-success").click(function () {
    const orderItem = {};
    orderItem["name"] = $(this).prev().prev().html();
    orderItem["price"] = $(this).prev().html();
    orderItems.push(orderItem);

    const itemsOrdered = $('<div class="items-ordered"></div>');
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    $(orderItems).each(function(i, item) {
      // adding item to cart
      itemsOrdered.html(item.name + ' ' + item.price);
      $('.cart').append(itemsOrdered);
      // converting price to float and adding to subtotal
      price = item.price.substring(1);
      subtotal += parseFloat(price)
      $('#subtotal').html("Subtotal: $" + subtotal);
      tax = 0.10 * subtotal;
      $('#tax').html("Tax: $" + tax.toFixed(2));
      total = subtotal + tax;
      $('#total').html("Total: $" + total.toFixed(2));
    });


});
