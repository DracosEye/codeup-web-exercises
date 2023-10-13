addButton = document.querySelector("button.add");
addButton.addEventListener("click", addToDo);

let list = document.querySelector("#to-do-list");

function addToDo(event) {
    // Keep from reloading the page
    event.preventDefault();
    // Create new list item
    let newItem = document.createElement("li");
    newItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    // Fill new item's description and add to item
    let itemDesc = document.createElement("p");
    itemDesc.innerText = document.querySelector("#to-do").value;
    itemDesc.classList.add("m-0");
    newItem.appendChild(itemDesc);
    // Create new button and add to list item
    let doneButton = document.createElement("button");
    doneButton.classList.add("btn", "btn-danger");
    doneButton.innerText = "Done";
    newItem.appendChild(doneButton);
    // Add event listener to Done button
    doneButton.addEventListener("click", function() {
       this.parentElement.remove();
    });
    // Add new list item to list
    list.appendChild(newItem);
    // Clear the new to-do field
    document.querySelector("#to-do").value = "";
}