function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefalt();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.textContent = title;
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newToDoText.value='';
  });
}

window.onload = function() {
  alert("The window has loaded!");
};
