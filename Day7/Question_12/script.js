// Initialize a variable named items to store the data above, log/print it out


function remove(num) {
  console.log("Remove");
  console.log(`Index: ${num}`);
  console.log(items);
  let remover = document.getElementById(`${num}`);
  remover.parentElement.remove();
}

let items = ["Backpack", "MiBand watch", "Ring"];

// In HTML, create an <ul> with some test items.
let container = document.getElementById("list");
for (let x of items) {
  container.insertAdjacentHTML(
    "beforeend",
    `<li>${x} <button class="remove" onclick="remove(${items.indexOf(x)})" id="${items.indexOf(x)}">Remove</button> </li>`
  );
}
let addIndex = items.length

// Get (Read) the list from DOM
console.log(container);

// Get the ‘New item’ input and ‘Add’ button
let newItem = document.getElementById("item_input");
let addButton = document.getElementById("add_btn");

// Register ‘Add‘ button click event
// When ‘Add’ button is clicked, the value of ‘New item’ input
addButton.onclick = () => {
  console.log("Add button clicked");
  console.log(newItem.value);
  container.insertAdjacentHTML(
    "beforeend",
    `<li>${newItem.value} <button class="remove" onclick="remove(${addIndex})" id="${addIndex}">Remove</button> </li>`
  );
  items.push(newItem.value);
  addIndex ++;
  newItem.value = "";
};
