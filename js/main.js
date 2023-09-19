function checkboxToggle(element) {
  const taskTxtElement = element.parentElement.children[2];
  taskTxtElement.classList.toggle("task-done");
}

function addEventToAllTaskButtons() {
  const taskButtons = document.getElementsByClassName('task-btn');
  //console.log(taskButtons);
  for (let i = 0; i < taskButtons.length; i++) {
    taskButtons[i].addEventListener('click', function(){
      const parent = taskButtons[i].parentElement.querySelector(".task-menu-ctn");
      parent.classList.remove("hide");
      console.log(parent);
      //alert(this.value);
    }, false);
    //console.log(taskButtons[i]);
  }
}

addEventToAllTaskButtons();

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