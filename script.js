// أنشئ المصفوفة تحت هذا الكومنت
let orders = [];

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;

  // أنشئ كائن newOrder

  let newOrder = {
    order: order,
    name: name,
    id: id,
    phone: phone,
  };
  // أدرج الكائن إلى المصفوفة
  orders.push(newOrder);
  // طبق الخطوة 7 تحت هذا الكومنت
  load();
}
function load() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  // طبّق الخطوة 6 تحت هذا الكومنت

  orders.forEach((items) => {
    container.innerHTML += `<div id="rem">
    <h1>${items.name} - ${items.id}</h1><h3>${items.order}</h3>
    </div>`;
  });
}
function remove() {
  let remDiv = document.getElementById("rem");
  remDiv.remove();
}
