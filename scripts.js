var url = 'http://api.icndb.com/jokes/random';
var paragraph = document.getElementById('joke');

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
        var response = JSON.parse(request.response);
        paragraph.innerHTML = response.value.joke;
    });
    request.send();
}
//load joke at the end of the document loading process
window.onload = function() {
    getJoke();
};

//jQuery
/*
$(document).ready(function(){
 var url = 'http://api.icndb.com/jokes/random';
 var $paragraph = $('#joke');

 var $button = $('#get-joke').click(function() {
   getJoke();
 });

 function getJoke() {
  $.ajax({
    method: 'GET',
    url: url, // on the left we have the name of the parameter, and to the right is the name of the variable that holds the value
    success: function(res) {
      $paragraph.text(res.value.joke);
    }
  });
 };
});
*/