var url = 'http://api.icndb.com/jokes/random';
var paragraph = document.getElementById('joke');

var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
  getJoke();
});

function getJoke() {
  var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
        var response = JSON.parse(request.response);
        paragraph.innerHTML = response.value.joke;
    });
    request.send();
}
//load joke at the end of the document loading process
window.onload = function () {
  getJoke();
};