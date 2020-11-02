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
$(document).ready(function() {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();
    const inputtedToDo = $("input#todo").val
  }
}


/*Item.prototype.details = function() {
  return this.todo + " at " + this.location + " on " + this.day;
}*/


