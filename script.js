 document.getElementById("ModifiedTime").textContent = document.lastModified;

window.onload = function(){
    if (localStorage.getItem("tasklist")){
        document.getElementById("list-todo").innerHTML = localStorage.getItem("tasklist")
    }
}

function addTask(){
    let taskText = document.getElementById("to-do-text").value;

    if (taskText.trim() != ""){

        let li = document.createElement("li"); 
        let hr = document.createElement("hr");
        hr.id = "hrLine";
        li.className = "todo-item";

        li.innerHTML = `<input type="checkbox" class="check-box" id="taskCheck" onclick="checkBoxClicked()"><span id="decorationText">${taskText}</span><button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        document.getElementById("list-todo").appendChild(li);
        document.getElementById("list-todo").appendChild(hr);
        localStorage.setItem("tasklist", document.getElementById("list-todo").innerHTML); 
        document.getElementById("to-do-text").value="";

        
    }else{
        alert("please enter your task")
    }
}
function deleteTask(th){
    th.parentElement.remove();
    document.getElementById("hrLine").remove();

    localStorage.setItem("tasklist", document.getElementById("list-todo").innerHTML);
}



function checkBoxClicked(){
    let cBox = document.getElementById("taskCheck")

    if (cBox.checked){

        document.getElementById("decorationText").style.textDecoration = "line-through";
    }else{
        document.getElementById("decorationText").style.textDecoration = "none";

    }
}
