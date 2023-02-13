console.log("halo dari file script.js");

// Mengambil element yg mau dimanipulasi
const elementParagraf = document.getElementById("paragraf");
console.log(elementParagraf);
// Timeout
setTimeout(() => {
  // Merubah isi content
  elementParagraf.innerHTML = "TEXT UPDATED";
  // elementParagraf.style.textTransform = "capitalize"
}, 5000); // ms

// Merubah styling
elementParagraf.style.fontSize = "30px";
elementParagraf.style.textTransform = "capitalize";

// React to event
function hello() {
  alert("hello world!");
}

// Add eventlistener
const btnOther = document.getElementById("btn-other");
btnOther.addEventListener("click", function () {
  alert("ini pesan dari button kedua");
});

// Event untuk button add list
const btnAddList = document.getElementById("btn-add");
btnAddList.addEventListener("click", function () {
  const inputList = document.getElementById("input-list");
  if (inputList.style.display === "none") {
    inputList.style.display = "block";
  } else {
    inputList.style.display = "none";
  }
});

const btnSave = document.getElementById("save");
btnSave.addEventListener("click", function () {
  const listGroup = document.getElementById("list-todo");
  const listItem = document.createElement("li");
  const inputListItem = document.getElementById("input-item");
  listItem.innerHTML = inputListItem.value;
  listGroup.appendChild(listItem);
  inputListItem.value = "";
});

// API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
