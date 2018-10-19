var pageCounter = 1;
var albumContainer = document.getElementById("album-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://wagleycristine.github.io/wagleycristinecit261/main-' + pageCounter + '.json');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
     renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;

});

function renderHTML(data){
    var htmlString ="";

  for (i = 0; i < data.length; i ++) {
    htmlString += "<p>" + data[i].name + " is an album that was released in " + data[i].year + ". U.S. record sales are over " + data[i].sales + ".</p>";
  }

  albumContainer.insertAdjacentHTML('beforeend', htmlString);
}
