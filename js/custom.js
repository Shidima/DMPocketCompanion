// Add a character to the list
var addCharacter = function() {
    var list = document.getElementById('initList');					// Get the (un)orderd list 
    var charName = document.getElementById('textBox').value;		// Get the textbox value
    var listItem = document.createElement('li');					// Create the 'li' item

    var removeLink = document.createElement('a');					// Create the romve link
    removeLink.appendChild(document.createTextNode(' remove')); 	// Add the text 
    removeLink.setAttribute('href', '#');							// Set the href atribute
    removeLink.setAttribute('onclick', 'removeCharacter(this)');	// Set the onclick method
    
    listItem.appendChild(document.createTextNode(charName));		// add the textbox var to the li
    listItem.appendChild(removeLink);								// add the link to the li
    list.appendChild(listItem);										// add the li item to the list
};

// Remove a item from the list based on the 'this'
// See http://stackoverflow.com/questions/4417164/remove-li-directly-by-an-onclick
var removeCharacter = function(link) {
	link.parentNode.parentNode.removeChild(link.parentNode );
};
