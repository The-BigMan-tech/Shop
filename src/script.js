const cart_menu = document.getElementById("cart-menu");
const empty = document.getElementById("empty");
const menu = document.getElementById("menu");
const menu_flex = document.getElementById("menu-flex");
const total_quantity = document.getElementById('totalquantity')
const final_total = document.getElementById('finaltotal')
let total_price_array = []
let cart_items = 0
let indie = 0
cart_menu.textContent = 0;
final_total.style.visibility = 'hidden'

function program_item(id,menu_id,name,price) {
  const cart = document.querySelector(`section[id = "${id}"] button`);
  const counter = document.querySelector(`section[id = "${id}"] div`);
  const quantity = document.querySelector(`section[id = "${id}"] div p`);
  const increase = document.querySelector(`section[id = "${id}"] button[id="increment"]`);
  const decrease = document.querySelector(`section[id = "${id}"] div button`);
  
  const menu_item = document.querySelector(`div[id = ${menu_id}]`);
  const quantity_2 = document.querySelector(`div[id = ${menu_id}] span[id="quantity-2"]`);
  const quantity_3 = document.querySelector(`div[id = ${menu_id}] span[id="quantity-3"]`);
  const cancel_item = document.querySelector(`div[id = ${menu_id}] button[id="cancel-item"]`);
  menu_item.remove();
  menu_item.childNodes[1].textContent = name
  menu_item.childNodes[3].childNodes[5].textContent = price
  menu_item.childNodes[3].childNodes[3].textContent = `@ $ ${price}`
  console.log(menu_item)
  
  let total_price = 0;
  indie += 1;
  let indie_2 = indie;
  let q4 = 0
  function item_count(item, count) {
    count = Number(count.textContent);
    return item * count;
  }
  function clear() {
    cart.style.zIndex = "10";
    counter.style.zIndex = "0";
  }
  cart.addEventListener("click", () => {
    cart.style.zIndex = "0";
    counter.style.zIndex = "10";
    quantity.textContent = 1;
    quantity_2.textContent = 1;
    q4 = price
    quantity_3.textContent = "$" + String(price)
    cart_menu.textContent = Number(cart_menu.textContent) + 1
    empty.style.visibility = "hidden";
    final_total.style.visibility = "visible"
    menu_flex.appendChild(menu_item);
    cart_items += 1
    total_price = price
    total_price_array[indie_2] = total_price
    console.log("TOTAL PRICE:",total_price_array)
    total()
  });
  increase.addEventListener("click", () => {
    quantity.textContent = Number(quantity.textContent) + 1;
    quantity_2.textContent = Number(quantity_2.textContent) + 1;
    quantity_3.textContent = item_count(price,quantity_2)
    q4 = Number(quantity_3.textContent)
    total_price_array[indie_2] = Number(quantity_3.textContent);
    console.log("TOTAL PRICE:", total_price_array);
    quantity_3.textContent = "$" + String(quantity_3.textContent);
    cart_menu.textContent = Number(cart_menu.textContent) + 1;
    total()
  });
  decrease.addEventListener("click", () => {
    quantity.textContent = Number(quantity.textContent) - 1;
    quantity_2.textContent = Number(quantity_2.textContent) - 1;
    quantity_3.textContent = item_count(price, quantity_2);
    q4 = Number(quantity_3.textContent)
    total_price_array[indie_2] = Number(quantity_3.textContent);
    console.log("TOTAL PRICE:", total_price_array);
    total()
    quantity_3.textContent = "$" + String(quantity_3.textContent);
    cart_menu.textContent = Number(cart_menu.textContent) - 1;
    if (Number(quantity.textContent) == 0) {
      menu_item.remove();
      cart_items -= 1
      clear()
    }
    if (cart_items == 0) {
        empty.style.visibility = "visible";
        final_total.style.visibility = "hidden"
    }
  });
  cancel_item.addEventListener("click", () => {
    total_quantity.textContent = Number(total_quantity.textContent) - q4
    total_price_array[indie_2] = 0
    console.log("TOTAL PRICE:", total_price_array);
    quantity.textContent = 0
    cart.style.zIndex = "10";
    counter.style.zIndex = "0";
    cart_menu.textContent = Number(cart_menu.textContent) - Number(quantity_2.textContent)
    menu_item.remove()
    cart_items -= 1
    console.log(cart_items)
    if (cart_items == 0) {
      empty.style.visibility = 'visible'
      final_total.style.visibility = "hidden"
    }
    }
  );
}
const main = document.getElementById('main')
const sec = document.getElementById('section1')
const menu_item = document.getElementById('menu-item')
sec.remove()
menu_item.remove()

function create_item(sec_id,menu_id,img,cat,name,price) {
    const sec_copy = sec.cloneNode(true);
    console.log(sec_copy);
    sec_copy.childNodes[1].src = img
    sec_copy.childNodes[5].textContent = cat
    sec_copy.childNodes[7].textContent = name
    sec_copy.childNodes[9].textContent = `$ ${price}`
    const menu_item_copy = menu_item.cloneNode(true);
    (sec_copy.id = sec_id), (menu_item_copy.id = menu_id);
    main.append(sec_copy);
    menu_flex.append(menu_item_copy);
    program_item(sec_copy.id,menu_item_copy.id,name,price);
}

function make_shop(food) {
  image_path = "/product-list/assets/images/";
  for (let i in food) {
      create_item(
        `section${i}`,
        `menu${i}`,
        image_path + food[i].image,
        food[i].category,
        food[i].name,
        food[i].price
      );
  }
}
function total() {
      new_price_array = total_price_array.filter((e)=>typeof e ==='number')
      if (new_price_array.length > 0) {
          total_quantity.textContent = new_price_array.reduce((accumulator, value) => accumulator + value);
      }
      console.log("REAL TOTAL",total_quantity.textContent)
}

let food_items = [
  {
    image: "image-waffle-desktop.jpg",
    category: "Waffle",
    name: "Waffle with berries",
    price: 6.5,
  },
  {
    image: "image-tiramisu-desktop.jpg",
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 15.0,
  },
  {
    image: "image-panna-cotta-desktop.jpg",
    category: "Panna Cotta",
    name: "Vanilla panna cotta",
    price: 20.0,
  },
  {
    image: "image-tiramisu-desktop.jpg",
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 35.0,
  },
  {
    image: "image-macaron-desktop.jpg",
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 46.0,
  },
  {
    image: "image-tiramisu-desktop.jpg",
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 12.0,
  },
  {
    image: "image-creme-brulee-desktop.jpg",
    category: "Creme Brulee",
    name: "Vanilla Creme Brulee",
    price: 14.0,
  },
  {
    image: "image-cake-desktop.jpg",
    category: "Cake",
    name: "Red Velvet Cake",
    price: 8.5,
  },
  {
    image: "image-Baklava-desktop.jpg",
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 9.5,
  },
];
make_shop(food_items)



