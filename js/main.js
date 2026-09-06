//alert('works')

//1 get the different elemtns that are in my html 
//2 create functions to add new list items (add based on clikc or enter key, delete, check, edit list items)
//3 count tasks that have been complete based on check button?
// if the person adds more stuff then it shoul dbe an add button 
//the reset button makes the lsit go back to 0 items, like the mian landing page 
//the tasks need to show up in the list 

//console.log('works');

//okay so each id is for something that i shoul dbe referncing like het if i click this then do that 
const customCursor = document.querySelector(".custom-cursor"); //this is from 
const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#input-button");
const resetButton = document.querySelector("#reset");
const listContainer = document.querySelector("#list-container");
const completedCounter = document.querySelector("#completed-counter");
const uncompletedCounter = document.querySelector("#uncompleted-counter");
const todoForm = document.querySelector("#todo-form");
const errorMessage = document.querySelector("#error-message");

//when they submit then the event functions runs its course lets say they want to add the task
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

//if a person wants to just reset their list and start over
resetButton.addEventListener("click", function() {
    listContainer.innerHTML = "";
    updateCounters();
});

//first create the function with all the logic and things that need to happen

function addTask() {
    const taskText = inputBox.value.trim(); //triming anytextra spaces 
//when theres nothing we can ask the person to enter a task
    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        inputBox.focus();
        return;
    }

    errorMessage.textContent = ""; //if theres nothing in the box they get an error message
        //first create the the elemtns for each thing like lists, buttons, delete button, edit button,  all of the constants are things that we need like variables 
    const listItem = document.createElement("li"); //we need lsit elements

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("span");// the span area is where the tak gets placed they can not directly edit the button unless the press the edit button
    taskName.textContent = taskText;
    taskName.contentEditable = "false";

    const editButton = document.createElement("button");//this allows them to edit thier indivudal tasks
    editButton.textContent = "Edit";
    editButton.type = "button";

    const deleteButton = document.createElement("button");//allows them to delte their task
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    //if theyre done with the task this function allows them to check it off as completed works with css to check it off
    checkbox.addEventListener("change", function() {
        taskName.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });
    //this is to edit tasks and then once edited save with the saveEditedTask fucntion
    editButton.addEventListener("click", function() {
        const isEditing = taskName.contentEditable === "true";

        if (isEditing) {
            saveEditedTask();
        } else {
            taskName.contentEditable = "true";
            taskName.focus();
            editButton.textContent = "Save";
            updateCounters();
        }
    });

    function saveEditedTask() {
        const updatedTask = taskName.textContent.trim();

        if (updatedTask === "") {
            errorMessage.textContent = "A task cannot be empty.";
            taskName.focus();
            return;
        }

        taskName.textContent = updatedTask;
        taskName.contentEditable = "false";
        editButton.textContent = "Edit";
        errorMessage.textContent = "";
        inputBox.focus();
    }
    //this is from youtube so they can press enter to save a task rather than a mouse click 
    taskName.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            saveEditedTask();
        }
    });
//deleting a task
    deleteButton.addEventListener("click", function() {
        listItem.remove();
        updatecounters();
    });

//within each list item, we have a check box, the task name, then edit button and a delete button iamgine like html <li> input span button button</li> within each list item that gets added
    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
//this takes the li in the container and allows it to show on the page
    listContainer.appendChild(listItem);
//clreaing the input and returning to input
    inputBox.value = "";
    inputBox.focus();

    // Update the numbers after adding the task
    updatecounters();
}

//if its checked then + 1 if not checked then also plus one then calcuate the compelte is taking the sum of all checked, and uncomplete is total - checked

function updateCounters() {
    const totalTasks = listContainer.children.length;

    const completedTasks = listContainer.querySelectorAll("input[type='checkbox']:checked").length;

    const uncompletedTasks = totalTasks - completedTasks;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;

    if (totalTasks > 0 && uncompletedCounter == totalTasks) {
        alert("You're all caught up!")
    }
}
updateCounters();

//this is not my code i just wanted a pretty cursor 
document.addEventListener("mousemove", function (event) {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
    customCursor.classList.add("is-visible");
});

document.addEventListener("mousedown", function () {
    customCursor.classList.add("is-clicking");
});

document.addEventListener("mouseup", function () {
    customCursor.classList.remove("is-clicking");
});

document.addEventListener("mouseleave", function () {
    customCursor.classList.remove("is-visible");
});

document.addEventListener("mouseenter", function () {
    customCursor.classList.add("is-visible");
});