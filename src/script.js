const cart_menu = document.getElementById("cart-menu");
const empty = document.getElementById("empty");
const menu = document.getElementById("menu");
const menu_flex = document.getElementById("menu-flex");
let cart_items = 0
cart_menu.textContent = 0;

function program_item(id,menu_id) {
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

  function item_count(item, count) {
    count = Number(count.textContent);
    return item * count;
  }
  function clear() {
    menu_item.remove();
    cart.style.zIndex = "10";
    counter.style.zIndex = "0";
    empty.style.visibility = "visible";
  }
  cart.addEventListener("click", () => {
    cart.style.zIndex = "0";
    counter.style.zIndex = "10";
    quantity.textContent = 1;
    quantity_2.textContent = 1;
    cart_menu.textContent = Number(cart_menu.textContent) + 1
    empty.style.visibility = "hidden";
    menu_flex.appendChild(menu_item);
    cart_items += 1
  });
  increase.addEventListener("click", () => {
    quantity.textContent = Number(quantity.textContent) + 1;
    quantity_2.textContent = Number(quantity_2.textContent) + 1;
    quantity_3.textContent = "$" + String(item_count(5.5, quantity_2));
    cart_menu.textContent = Number(cart_menu.textContent) + 1;
  });
  decrease.addEventListener("click", () => {
    quantity.textContent = Number(quantity.textContent) - 1;
    quantity_2.textContent = Number(quantity_2.textContent) - 1;
    quantity_3.textContent = "$" + String(item_count(5.5, quantity_2));
    cart_menu.textContent = Number(cart_menu.textContent) - 1;
    if (Number(quantity.textContent) == 0) {
      clear();
    }
  });
  cancel_item.addEventListener("click", () => {
    quantity.textContent = 0
    cart.style.zIndex = "10";
    counter.style.zIndex = "0";
    cart_menu.textContent = Number(cart_menu.textContent) - Number(quantity_2.textContent)
    menu_item.remove()
    cart_items -= 1
    console.log(cart_items)
    if (cart_items == 0) {
      empty.style.visibility = 'visible'
    }
    }
  );
}
const main = document.getElementById('main')
const sec = document.getElementById('section1')
const menu_item = document.getElementById('menu-item')
sec.remove()
menu_item.remove()

function create_item(sec_id,menu_id,img,cat) {
    const sec_copy = sec.cloneNode(true);
    console.log(sec_copy);
    sec_copy.childNodes[1].src = img
    const menu_item_copy = menu_item.cloneNode(true);
    (sec_copy.id = sec_id), (menu_item_copy.id = menu_id);
    main.append(sec_copy);
    menu_flex.append(menu_item_copy);
    program_item(sec_copy.id,menu_item_copy.id);
}

for (let i=0;i<1;i++) {
    create_item(
      `section${i}`,
      `menu${i}`,
      "/product-list/assets/images/image-brownie-desktop.jpg",
      "waffles"
    );
}

let food_items = {
    
}




