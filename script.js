document.getElementById("ModifiedTime").textContent = document.lastModified;

window.onload = function(){
    if (localStorage.getItem("tasklist")){
        document.getElementById("list-todo").innerHTML = localStorage.getItem("tasklist")
    }
}

const input = document.getElementById("to-do-text");
input.addEventListener("keydown", function(enter){
    if (enter.key === "Enter"){
        addTask();
    }
})

function addTask(){
    let taskText = document.getElementById("to-do-text").value;

    if (taskText.trim() != ""){

        let li = document.createElement("li"); 
        let hr = document.createElement("hr");
        hr.id = "hrLine";
        li.className = "todo-item";

        li.innerHTML = `<input type="checkbox" class="check-box" id="taskCheck" onchange="checkBoxClicked(this)"><span id="decorationText">${taskText}</span><button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        document.getElementById("list-todo").appendChild(li);
        document.getElementById("list-todo").appendChild(hr);
        localStorage.setItem("tasklist", document.getElementById("list-todo").innerHTML); 
        document.getElementById("to-do-text").value="";


        
    }else{
        alert("please enter your task")
    }
}
function deleteTask(button){
    let deleteTag = button.parentElement;
    let hrTag = deleteTag.nextElementSibling;
    console.log(hrTag);
    hrTag.remove();
    deleteTag.remove();
    localStorage.setItem("tasklist", document.getElementById("list-todo").innerHTML);
}



function checkBoxClicked(checkbox){
    let listElement = checkbox.parentElement;
    let spanText = listElement.querySelector("span");

    if (checkbox.checked){
        //this.parentElement.style.textDecoration = "line-through";
        spanText.style.textDecoration = "line-through";
    }else{
        spanText.style.textDecoration = "none";

    }
}
