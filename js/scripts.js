// Business Logic for List
function List () {
  this.items = [];
  this.itemsId = 0;
}

List.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items.push(item);
}

List.prototype.assignId = function() {
  this.itemsId += 1;
  return this.itemsId;
}

List.prototype.findItem = function(id) {
  for (let i=0; i< this.items.length; i++) {
    if (this.items[i]){
      if (this.items[i].id == id) {
        return this.items[i];
      }
    }
  };
  return false;
}

List.prototype.deleteItem = function(id) {
  for (let i=0; i< this.items.length; i++) {
    if (this.items[i]){
      if (this.items[i].id == id) {
        delete this.items[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Items
function Item (toDo, location, day) {
  this.toDo = toDo;
  this.location = location;
  this.day = day;
}

//UI Logic
let newList = new List();

function displayListDetails(newListDisplay) {
  let toDoList = $("ul#toDoFinal");
  let htmlfortoDoList = "";
  newListDisplay.items.forEach(function(item) {
    htmlfortoDoList += "<li id =" + item.id + ">" + item.toDo + " at " + item.location + " on " + item.day + "." + "</li>";
  });
  toDoList.html(htmlfortoDoList);
};

function attachToDoListeners() {
  $("ul#toDoFinal").on("click", "li", function () {
    showDoneDelete(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    newList.deleteItem(this.id);
    $(htmlfortoDoList).html("Done!");
  })
};

function showDoneDelete(itemId) {
  const item = newList.findItem(itemId);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class ='deleteButton' id=" + item.Id + ">Delete</button>");
}


$(document).ready(function() {
  attachToDoListeners();
  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    const inputtedToDo = $("input#todo").val();
    const inputtedLocation = $("input#location").val();
    const inputtedDay = $("input#day").val();
    let newItem = new Item (inputtedToDo, inputtedLocation, inputtedDay);
    newList.addItem(newItem);
    displayListDetails(newList);
    $("#toDoFinal").show();
  });
});


/*Item.prototype.details = function() {
  return this.todo + " at " + this.location + " on " + this.day;
}*/


/*
$("input#todo").val("");
$("input#location").val("");
$("input#day").val("");
*/