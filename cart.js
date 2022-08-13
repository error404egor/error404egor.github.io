function template(strings, ...keys) {
    return function (...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function (key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

var cart_dict = {};
var cart = document.querySelector("#cart");
var cart_display = document.querySelector("#cart_display");
var toSendField = document.getElementById("toSendField");
var main_display = document.querySelector("main");
const table_row_template = template`<tr>
    <td>${"name"}</td>
    <td>${"count"} шт.</td>
    <td>${"price"}$</td>
</tr>`;
const send_row_template = template`${"name"} - ${"count"}\n`;
const no_items_in_cart =
    "<tr><th style='color: white; font-size: 3rem'>Сдесь пусто!</th></tr>";
const table_footer = template`<tr><td colspan="2"></td><td colspan="1">Всего: ${"total_price"}$</td></tr>`;

const cards = document.querySelectorAll(".cards_item");
for (var i = 0; i < cards.length; i++) {
    elem = cards[i];
    elem.id = "card_" + i;
    cart_dict[elem.id] = 0;
}
console.log(cart_dict);

const pluses = document.querySelectorAll(".item_cart_add_button");
pluses.forEach((e) => e.addEventListener("click", addItem));
function addItem(e) {
    let elem = e.target;
    let parent = elem.parentNode;
    let count = parent.querySelector(".count");
    let parentDiv = parent.parentNode.parentNode;
    cart_dict[parentDiv.id] += 1;
    count.innerHTML = cart_dict[parentDiv.id];
    reload_cart();
}

const minuses = document.querySelectorAll(".item_cart_delete_button");
minuses.forEach((e) => e.addEventListener("click", deleteItem));
function deleteItem(e) {
    let elem = e.target;
    let parent = elem.parentNode;
    let count = parent.querySelector(".count");
    let parentDiv = parent.parentNode.parentNode;
    if (cart_dict[parentDiv.id] == 0) {
        return;
    }
    cart_dict[parentDiv.id] -= 1;
    count.innerHTML = cart_dict[parentDiv.id];
    reload_cart();
}

document.querySelector("#cart_open_button").addEventListener("click", showCart);
function showCart(e) {
    if (cart_display.style.display == "") {
        cart_display.style.display = "flex";
        main_display.style.display = "none";
    } else {
        cart_display.style.display = "";
        main_display.style.display = "";
    }
    console.log(1);
    reload_cart();
}

function reload_cart() {
    var value_to_send = "";
    var content = "";
    var total_price = 0;
    for (var key in cart_dict) {
        if (parseInt(cart_dict[key]) <= 0) {
            continue;
        }
        cards_item = document.getElementById(key);
        template_fill = {
            name: cards_item.querySelector("h1").innerHTML,
            count: cart_dict[key],
            price:
                cart_dict[key] *
                parseInt(cards_item.querySelector(".price").innerHTML),
        };
        total_price += template_fill["price"];
        content += table_row_template(template_fill);
        value_to_send += send_row_template(template_fill);
    }
    if (content == "") {
        content = no_items_in_cart;
    } else {
        content += table_footer({"total_price": total_price });
    }
    cart.innerHTML = content;
    toSendField.value = value_to_send;
}

reload_cart();
