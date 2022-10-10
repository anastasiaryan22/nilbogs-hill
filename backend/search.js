var userPrompt = prompt();

var x = userPrompt.split(' ');

var y = x.join('-');

var request = new XMLHttpRequest();

request.open("GET", "https://www.dnd5eapi.co/api/spells/" + y, true);

request.onload = () => {console.log(request.responseText)}

request.send();



