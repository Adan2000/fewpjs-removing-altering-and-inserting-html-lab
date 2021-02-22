// Write your code here!


var el = document.getElementById('main')

el.remove();

const newHeader = document.createElement("h1");


const newContent = document.createTextNode("Adan is the champion!");
newHeader.appendChild(newContent);


newHeader.setAttribute('id','victory');

