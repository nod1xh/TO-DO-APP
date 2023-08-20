const itemList = document.querySelector(".lista2");
const itemInput = document.querySelector("input");
const addItem = document.getElementById("btn");
const clearList = document.getElementById("clear");

// Kreiranje list itema
function createListItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  li.classList.add("remove-item");

  const btnX = createButton("fa-solid fa-square-xmark");

  const btnDone = createButton2("fa-solid fa-square-check");

  li.appendChild(btnX);
  li.appendChild(btnDone);
  itemList.appendChild(li);
}

function createButton(classes) {
  const btnX = document.createElement("button");
  btnX.className = classes;
  return btnX;
}

function createButton2(classes) {
  const btnDone = document.createElement("button");
  btnDone.className = classes;
  return btnDone;
}

/* Dodavanje kreiranog list itema u listu, 
   Alert box ako nema itema a klikne se na "add item",
   Kada se klikne na add item brise input koji je unesen.
*/
function addListItemToList() {
  const newItem = itemInput.value;

  itemInput.value = "";

  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  createListItem(newItem);
}

// Funkcija za event listener kada se pritisne enter da dodaje item u listu
function onEnter(e) {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    const newItem = itemInput.value;

    itemInput.value = "";

    if (newItem === "") {
      alert("Please add an item");
      return;
    }

    createListItem(newItem);
  }
}

// Funkcija za button Clear list, za brisanje svih itema iz liste
function clearAll() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Funkcija za uklanjanje itema iz liste kliknuvsi na X ili Done
function onClick(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    confirm("Are you sure?");
    e.target.parentElement.remove();
  }
}

// Event listeneri
function init() {
  addItem.addEventListener("click", addListItemToList);
  itemInput.addEventListener("keyup", onEnter);
  clearList.addEventListener("click", clearAll);
  itemList.addEventListener("click", onClick);
}

init();
