(function(){
 'use strict';


// This is my new element example and also has been removed from the list to show removeChild
// This is also where all of the new elements have been created.
var newElement = document.createElement('li');
newElement.textContent = "I am a new element.";

var pinkFloyd = document.createElement('li');
pinkFloyd.textContent = "Pink Floyd.";

var modestMouse = document.createElement('li');
modestMouse.textContent = "Modest Mouse.";

// This is where the new element has been added and removed from the list.
var list = document.getElementById('my-list');
list.appendChild(newElement);
list.removeChild(newElement);

var list = document.getElementById('my-list');
list.insertBefore(pinkFloyd, list.firstElementChild);


var list = document.getElementById('my-list');
list.appendChild(modestMouse);

}());
