function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      id: (new Date()).getTime(),
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';
    toDos.forEach(function(toDo){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      var spanDelete = document.createElement('span');
      spanDelete.setAttribute("id", toDo.id);
      spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";
      checkbox.type = "checkbox";
      newLi.innerHTML = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(spanDelete);
      spanDelete.onclick = function deleteItem(e) {
        var id = e.target.id;
        console.log("Delete an item: " + id);
      }
    });
  }

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);

}

window.onload = function() {
  onReady();
};
