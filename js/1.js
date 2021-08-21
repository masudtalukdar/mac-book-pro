// function getValue() {
//   //   let memoryCost = document.getElementById('high-memory');
//   memoryCost = 180;
//   console.log(memoryCost);
//   return memoryCost;
// }
// function updateField() {
//   let memory = document.getElementById('extra-memory');
// }

let memory_basic = document
  .getElementById('high-memory_basic')
  .addEventListener('click', function () {
    let memry_cost = document.getElementById('extra-memory').innerText;
    let storage_cost = document.getElementById('extra_storage').innerText;
    let shipping_cost = document.getElementById('delivery_cost').innerText;
    let total = document.getElementById('total');
    let high_memory = 0;
    total =
      1219 + parseInt(storage_cost) + parseInt(shipping_cost) + high_memory;
    memry_cost = total;
    document.getElementById('extra-memory').innerText = high_memory;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let memory = document
  .getElementById('high-memory')
  .addEventListener('click', function () {
    let memry_cost = document.getElementById('extra-memory').innerText;
    let storage_cost = document.getElementById('extra_storage').innerText;
    let shipping_cost = document.getElementById('delivery_cost').innerText;
    let total = document.getElementById('total');
    let high_memory = 180;
    total =
      1219 + parseInt(storage_cost) + parseInt(shipping_cost) + high_memory;
    memry_cost = total;
    document.getElementById('extra-memory').innerText = high_memory;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let storage_basic = document
  .getElementById('storage_basic')
  .addEventListener('click', function () {
    let total = document.getElementById('total');
    let extra_cost = 0;
    let shipping_cost = document.getElementById('delivery_cost').innerText;

    let memry_cost = document.getElementById('extra-memory').innerText;

    total = 1219 + parseInt(memry_cost) + parseInt(shipping_cost) + extra_cost;
    document.getElementById('extra_storage').innerText = extra_cost;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let storage = document
  .getElementById('storage_1')
  .addEventListener('click', function () {
    let total = document.getElementById('total');
    let extra_cost = 100;
    let shipping_cost = document.getElementById('delivery_cost').innerText;

    let memry_cost = document.getElementById('extra-memory').innerText;

    total = 1219 + parseInt(memry_cost) + parseInt(shipping_cost) + extra_cost;

    document.getElementById('extra_storage').innerText = extra_cost;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let storage2 = document
  .getElementById('storage_2')
  .addEventListener('click', function () {
    let total = document.getElementById('total');
    let extra_cost = 150;
    let shipping_cost = document.getElementById('delivery_cost').innerText;

    let memry_cost = document.getElementById('extra-memory').innerText;

    total = 1219 + parseInt(memry_cost) + parseInt(shipping_cost) + extra_cost;

    document.getElementById('extra_storage').innerText = extra_cost;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let delivery_basic = document
  .getElementById('delivery_basic')
  .addEventListener('click', function () {
    let total = document.getElementById('total');
    let extra_cost = 0;
    let memry_cost = document.getElementById('extra-memory').innerText;
    document.getElementById('extra_storage').innerText = extra_cost;
    let storage_cost = document.getElementById('extra_storage').innerText;

    total = 1219 + parseInt(memry_cost) + parseInt(storage_cost) + extra_cost;

    document.getElementById('extra_storage').innerText = extra_cost;
    document.getElementById('total').innerText = total;
    console.log(total);
  });

let delivery = document
  .getElementById('delivery_2')
  .addEventListener('click', function () {
    let total = document.getElementById('total');
    let extra_cost = 20;
    let memry_cost = document.getElementById('extra-memory').innerText;
    document.getElementById('extra_storage').innerText = extra_cost;
    let storage_cost = document.getElementById('extra_storage').innerText;

    total = 1219 + parseInt(memry_cost) + parseInt(storage_cost) + extra_cost;

    document.getElementById('extra_storage').innerText = extra_cost;
    document.getElementById('total').innerText = total;
    console.log(total);
  });
