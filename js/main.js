window.onload = (event) => {

console.log("Page loaded");

};

function checkboxToggle(element) {
  const taskTxtElement = element.parentElement.children[2];
  taskTxtElement.classList.toggle("task-done");
}