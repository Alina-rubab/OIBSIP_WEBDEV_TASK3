let input = document.getElementById("input");
let text = document.querySelector(".text");

function Add() {
  if (input.value.trim() === "") {
    alert("Please enter a task");
  } else {
    // Create list container
    let listItem = document.createElement("ul");

    // Create task text
    let taskText = document.createElement("li");
    taskText.textContent = input.value;

    // Create delete icon
   let deleteIcon = document.createElement("i");
deleteIcon.className = "fa-solid fa-trash";


    // Delete on click
    deleteIcon.addEventListener("click", () => {
      listItem.remove();
    });

    // Add text and icon to list
    listItem.appendChild(taskText);
    listItem.appendChild(deleteIcon);

    // Show on page
    text.appendChild(listItem);

    // Clear input
    input.value = "";
  }
}
