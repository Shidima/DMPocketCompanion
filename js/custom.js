var charList = new Array();
var number = 0;

// Add a character to the list
var addCharacter = function() {
    number += 1
    var list = document.getElementById('initList');					// Get the (un)orderd list 
    var charName = document.getElementById('textBox').value + " " + number + " ";		// Get the textbox value
    var listItem = document.createElement('li');					// Create the 'li' item
    listItem.setAttribute('id', number);

    // Move up link
    var moveUpLink = document.createElement('a');
    moveUpLink.appendChild(document.createTextNode(' up'));
    moveUpLink.setAttribute('href', '#');                           // Set the href atribute
    moveUpLink.setAttribute('onclick', 'moveUp(this)');             // Set the onclick method

    // Move Down link
    var moveDownLink = document.createElement('a');
    moveDownLink.appendChild(document.createTextNode(' down'));
    moveDownLink.setAttribute('href', '#');                           // Set the href atribute
    moveDownLink.setAttribute('onclick', 'moveDown(this)');             // Set the onclick method

    // Remove link
    var removeLink = document.createElement('a');					// Create the romve link
    removeLink.appendChild(document.createTextNode(' remove')); 	// Add the text 
    removeLink.setAttribute('href', '#');							// Set the href atribute
    removeLink.setAttribute('onclick', 'removeCharacter(this)');	// Set the onclick method
    
    listItem.appendChild(document.createTextNode(charName));		// add the textbox var to the li
    listItem.appendChild(moveUpLink);
    listItem.appendChild(moveDownLink);
    listItem.appendChild(removeLink);								// add the link to the li
    list.appendChild(listItem);										// add the li item to the list
};

// Remove a item from the list based on the 'this'
// See http://stackoverflow.com/questions/4417164/remove-li-directly-by-an-onclick
var removeCharacter = function(link) {
	link.parentNode.parentNode.removeChild(link.parentNode );
};

var moveUp = function(item) {
    var moveIt = item.parentNode;
    var list = document.getElementById('initList'); 
    list.insertBefore(moveIt, moveIt.previousSibling);    
};

var moveDown = function(item) {
    var moveIt = item.parentNode;
    var list = document.getElementById('initList'); 
    list.insertBefore(moveIt, moveIt.nextSibling.nextSibling);    
};
