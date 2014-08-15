/**
 * Created by Pete Stein on 8/14/14.
 */
var cart = [];

function displayCart() {
    var cartDiv = $('#cartDiv');
    cartDiv.html("");
    var grandTotal = 0;
    for (var item in cart) {
        var qty = cart[item].qty;
        var price = cart[item].price;
        var subtotal = qty * price;
        grandTotal += subtotal;
        cartDiv.append('<p>' + qty + ': ' + cart[item].name +
            ' $' + price.toFixed(2) + ' == $' +
            subtotal.toFixed(2) + '</p>')
    }

    cartDiv.append('<p>Grand Total: $' + grandTotal.toFixed(2) + '</p>')
}

$(document).ready(function () {
    // Add a buy button to each of my products

    $('div[data-product]').each(function () {
        $(this).append('<button class="btnCart">Add To Cart</button>');
    })
    $('.btnCart').on("click", function (event) {
        var pid = $(this).parent().parent().data("product");
        console.log(pid);
        if (cart[pid]) {
            cart[pid].qty += 1;
        } else {
            cart[pid] = new Object();
            cart[pid].qty = 1;
            cart[pid].name = $(this).parent().siblings("span").data("name");
            cart[pid].price = $(this).parent().siblings("span").next().data("price");
        }
        displayCart();
    })

    $('#buy').on("click", function (event) {
        var buyUrl = "";
        for (var item in cart) {
            var qty = cart[item].qty;
            buyUrl += "&pid[]=" + item + "&qty[]=" + cart[item]
        }
        $.getJSON('buy.php?' + buyUrl, function (data) {
            $("#cartDiv"), append(data);

        })

        console.log("http://www.cis217-3.syncease.com/buy.php?" + buyUrl);
        $("#buy").parent().hide();
    })
})