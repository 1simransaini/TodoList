// var itemArr=[];
var submit=document.getElementById("submit").addEventListener("click",listmaking);
let textinput=document.getElementById("textinput");
var todocontainer=document.getElementById("todocontainer");
// var orderedlist=document.getElementById("orderedlist");

function listmaking(){
    // textinput=document.getElementById("textinput").value;
    // itemArr.push(textinput);
    // document.getElementById("orderedlist").innerHTML=textinput;
    // document.getElementById("textinput").value="";

    var itemContainer = document.createElement("div");  //chatgpt
    itemContainer.classList.add("item-container");

    var paragraph=document.createElement("p");
    var done=document.createElement("button");
    done.classList.add('done-button'); // Add the class for the "DONE" button
    var t=document.createTextNode("DONE");
    done.appendChild(t);
    paragraph.classList.add('paragraph-styling')  //to add style to the list 
    paragraph.innerText=textinput.value;
    // done.style.display = "inline"; // Set the 'done' button to display inline
    // paragraph.style.display = "inline"; 
    // todocontainer.appendChild(paragraph);
    // todocontainer.appendChild(done);

    itemContainer.appendChild(paragraph);
    itemContainer.appendChild(done);
    todocontainer.appendChild(itemContainer);   //chat gpt

    done.addEventListener("click",function(){
        todocontainer.removeChild(itemContainer);
        // todocontainer.removeChild(paragraph);
        // todocontainer.removeChild(done);
    })

    var clearAllButton = document.getElementById("clear"); // Get the "Clear All" button

    // Rest of your existing code...

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