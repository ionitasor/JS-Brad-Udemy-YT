let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    createItem(ourField.value);
});

function createItem(x) {
    let ourHTML = `<li>${x} <button onclick="deleteItem(this)" >Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    ourField.value = ""; // clear the field after inserted element
    ourField.focus(); // pune cursorul in campul golit
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}