function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let spanDelete = document.createElement('span');
    // let timestamp = new Date().getUTCMilliseconds();
    let deleteMe = newLi;
    spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";
    spanDelete.setAttribute("class", "delete");
    // spanDelete.setAttribute("id", timestamp);
    spanDelete.onclick = function () {
      deleteMe.parentNode.removeChild(deleteMe);
    }
    checkbox.type = "checkbox";
    newLi.textContent = title;
    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(spanDelete);
    newToDoText.value='';
  });
}

window.onload = function() {
  onReady();
};
