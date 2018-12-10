var instructContainer = document.getElementById("game-instruct");
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://wagleycristine.github.io/wagleycristinecit261/game.json');
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
     renderHTML(ourData);
  };
  ourRequest.send();
  
});

function renderHTML(data){
    var htmlString ="";
    
    for (i=0; i< data.length; i++) {
        htmlString += "<p>" + data [i].how + " " +data[i].how2 + " " +data[i].how3 + " " +data[i].how4 + " " +data[i].how5 +" " +data[i].how6 + " " +data[i].object + ".</p>";
    }
    
    instructContainer.insertAdjacentHTML('beforeend', htmlString);
}
