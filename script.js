var submit=document.getElementById("submit").addEventListener("click",listmaking);
let textinput=document.getElementById("textinput");
var todocontainer=document.getElementById("todocontainer");
var clearAllButton = document.getElementById("clear"); // Get the "Clear All" button

function listmaking(){
    var itemContainer = document.createElement("div");  
    itemContainer.classList.add("item-container");

    var paragraph=document.createElement("p");
    var done=document.createElement("button");
    done.classList.add('done-button');           // Add the class for the "DONE" button
    var t=document.createTextNode("DONE");
    done.appendChild(t);
    paragraph.classList.add('paragraph-styling')  //to add style to the list 
    paragraph.innerText=textinput.value;

    itemContainer.appendChild(paragraph);
    itemContainer.appendChild(done);
    todocontainer.appendChild(itemContainer);  

    done.addEventListener("click",function(){
        todocontainer.removeChild(itemContainer);
    })

    // Event listener for the "Clear All" button
    clearAllButton.addEventListener("click", clearAllItems);

    // Function to clear all items from the list
    function clearAllItems() {
    // Remove all children elements from the todocontainer
    while (todocontainer.firstChild) {
        todocontainer.removeChild(todocontainer.firstChild);
    }
    }
    textinput.value="";
}
