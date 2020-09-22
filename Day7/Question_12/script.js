// Initialize a variable named items to store the data above, log/print it out
let items = ["Backpack", "MiBand watch", "Ring"];

// In HTML, create an <ul> with some test items.
let container = document.getElementById("list");
for (let x of items) {
  container.insertAdjacentHTML(
    "beforeend",
    `<li>${x} <button class="remove">Remove</button> </li>`
  );
}

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
    `<li>${newItem.value} <button class="remove">Remove</button> </li>`
  );
  items.push(newItem.value);
  newItem.value = "";
};

let removeButton = document.getElementsByClassName("remove");
// let length = removeButton.length;
for (let i = 0; i < items.length; i++) {
  const remover = removeButton[i];
  remover.onclick = () => {
    console.log("Remove");
    console.log(`Index: ${i}`);
    items.splice(i, 1);
    console.log(items);
    console.log(remover.parentElement);
    remover.parentElement.remove();
  };
}
