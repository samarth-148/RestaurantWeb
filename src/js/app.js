/*
 *      Name:       <Samarth Shaileshkumar Patel>
 *      Date:       <20/07/2022>
 */

const { products, categories } = window;
console.log({ products, categories }, "Store Data");
var nav_menu = document.querySelector("#menu");
var cat_title = document.querySelector("#selected-category");
var body = document.getElementsByTagName("body")[0];
var cards = document.createElement("section");
cards.setAttribute("class", "cards");
var selected_index;
let selected_cat_id;
let len = products.length;
let len1 = categories.length;

window.addEventListener("load", function () {
  for (var i = 0; i < categories.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = categories[i].name;
    btn.setAttribute("id", categories[i].id);
    btn.setAttribute("class", "c_button");
    nav_menu.appendChild(btn);
  }
  cat_title.innerHTML = window.categories[0].name;

  for (i = 0; i < len; i++) {
    var card = document.createElement("article");
    card.setAttribute("class", "card");
    var card_content = document.createElement("div");
    card_content.setAttribute("class", "card-content");
    var card_title = document.createElement("h3");
    card_title.setAttribute("class", "card-title");
    var card_description = document.createElement("p");
    card_description.setAttribute("class", "card_description");
    var card_price = document.createElement("span");
    card_price.setAttribute("class", "card_price");
    var card_img = document.createElement("img");
    card_img.setAttribute("class", "card_img");

    card_content.appendChild(card_img);
    card_content.appendChild(card_title);
    card_content.appendChild(card_description);
    card_content.appendChild(card_price);
    if (window.products[i].categories == "c1") {
      selected_index = i;
      card_img.src = this.window.products[selected_index].pictureUrl;
      card_title.innerHTML = window.products[selected_index].title;
      card_description.innerHTML = window.products[selected_index].description;
      card_price.innerHTML = window.products[selected_index].price;
      cards.appendChild(card);
      card.appendChild(card_content);
    }
  }
  body.appendChild(cards);
  document.querySelectorAll(".c_button").forEach((item) => {
    item.addEventListener("click", (event) => {
      selected_cat_id = event.target.id;
      createProductCard();
    });
  });
});

function createProductCard() {
  const elements = [...document.getElementsByClassName("card")];
  elements.forEach((el) => el.remove());
  cat_title.innerHTML = "";
  for (var i = 0; i < len1; i++) {
    if (window.categories[i].id == selected_cat_id) {
      cat_title.innerHTML = window.categories[i].name;
    }
  }
  for (i = 0; i < len; i++) {
    var card = document.createElement("article");
    card.setAttribute("class", "card");
    var card_content = document.createElement("div");
    card_content.setAttribute("class", "card-content");
    var card_title = document.createElement("h3");
    card_title.setAttribute("class", "card-title");
    var card_description = document.createElement("p");
    card_description.setAttribute("class", "card_description");
    var card_price = document.createElement("span");
    card_price.setAttribute("class", "card_price");
    var card_img = document.createElement("img");
    card_img.setAttribute("class", "card_img");
    card_content.appendChild(card_img);
    card_content.appendChild(card_title);
    card_content.appendChild(card_description);
    card_content.appendChild(card_price);
    if (window.products[i].categories == selected_cat_id) {
      selected_index = i;
      card_img.src = this.window.products[selected_index].pictureUrl;
      card_title.innerHTML = window.products[selected_index].title;
      card_description.innerHTML = window.products[selected_index].description;
      card_price.innerHTML = window.products[selected_index].price;
      cards.appendChild(card);
      card.appendChild(card_content);
    }
  }
  body.appendChild(cards);
}

//var tab = document.createElement("table");
//tab.setAttribute("id", "table_id");
//var tab_body = document.createElement("tbody");
//tab_body.setAttribute("id", "table_body_id");
//let row;
//let len = products.length;
//let selected_cat_name;

// window.addEventListener("load", function () {
//   for (var i = 0; i < categories.length; i++) {
//     var btn = document.createElement("button");
//     btn.innerHTML = categories[i].name;
//     btn.setAttribute("id", categories[i].id);
//     btn.setAttribute("class", "c_button");
//     nav_menu.appendChild(btn);
//   }
// }

//default category product list
//   for (var i = 0; i < len; i++) {
//     row = document.createElement("tr");
//     if (window.products[i].categories == "c1") {
//       selected_index = i;
//       row.insertCell().textContent = window.products[selected_index].title;
//       row.insertCell().textContent = window.products[selected_index].description;
//       row.insertCell().textContent = window.products[selected_index].price;
//       tab_body.appendChild(row);
//     }
//   }
//   tab.appendChild(tab_body);
//   body.appendChild(tab);

//   document.querySelectorAll('.c_button').forEach(item => {
//     item.addEventListener('click', event => {
//       selected_cat_id = event.target.id;
//       selected_cat_name = event.target.name;

//       pop_products();

//     })
//   })

// });

// function pop_products() {
//   var tab_body = document.querySelector('#table_body_id');
//   tab_body.innerHTML = "";

//   for (var i = 0; i < len; i++) {
//     let row = document.createElement("tr");
//     if (window.products[i].categories == selected_cat_id) {

//       row.insertCell().textContent = this.products[i].title;
//       row.insertCell().textContent = this.products[i].description;
//       row.insertCell().textContent = this.products[i].price;
//       tab_body.appendChild(row);

//     }

//     tab.appendChild(tab_body);
//     body.appendChild(tab);

//   }
// }
