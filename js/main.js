function checkboxToggle(element) {
  const taskTxtElement = element.parentElement.children[2];
  taskTxtElement.classList.toggle("task-done");
}

function addEventToAllTaskButtons() {
  const taskButtons = document.getElementsByClassName('task-btn');
  for (let i = 0; i < taskButtons.length; i++) {
    taskButtons[i].addEventListener('click', openTaskMenu, false);
  }
}

function openTaskMenu() {
  const parent = this.parentElement.querySelector(".task-menu-ctn");
  parent.classList.remove("hide");
}

function closeTaskMenu(element) {
  const parent = element.parentElement;
  parent.classList.add("hide");
}

function editTask(element) {
  console.log("EDIT TASK");
}

function deleteTask(element) {
  console.log("DELETE TASK");
}

function tagTask(element) {
  console.log("TAG TASK");
}

addEventToAllTaskButtons();