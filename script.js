function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
    document.getElementById("clock").textContent = time + " EST";
}

updateTime();
setInterval(updateTime, 1000);
function openCalendar(){
    document.getElementById("calendar").style.display = "block";
}


function closeCalendar(){
    document.getElementById("calendar").style.display = "none";
}

const calendar = document.getElementById("calendar");
const header = document.getElementById("calendarHeader");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

header.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - calendar.offsetLeft;
    offsetY = e.clientY - calendar.offsetTop;
});

document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    calendar.style.left = (e.clientX - offsetX) + "px";
    calendar.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});

function openNotes() {
    document.getElementById("notes").style.display = "block";
}
function closeNotes() {
    document.getElementById("notes").style.display = "none";
}

function createNote() {
    const note = document.createElement("textarea");
    note.className = "note";
    note.placeholder = "Write something...";
    document.getElementById("notesContainer").appendChild(note);
}

const notes = document.getElementById("notes");
const notesHeader = document.getElementById("notesHeader");
let notesDragging = false;
let notesOffsetX = 0;
let notesOffsetY = 0;
notesHeader.addEventListener("mousedown", function (e) {
    notesDragging = true;

    notesOffsetX = e.clientX - notes.offsetLeft;
    notesOffsetY = e.clientY - notes.offsetTop;
});

document.addEventListener("mousemove", function (e) {
    if (!notesDragging) return;

    notes.style.left = (e.clientX - notesOffsetX) + "px";
    notes.style.top = (e.clientY - notesOffsetY) + "px";
});

document.addEventListener("mouseup", function () {
    notesDragging = false;
});

let timerSeconds = 25 * 60;
let timerInterval = null;

function openTimer(){
    document.getElementById("timer").style.display = "block";
}

function closeTimer(){
    document.getElementById("timer").style.display = "none";
}

function updateTimerDisplay(){

    let minutes = Math.floor(timerSeconds / 60);
    let seconds = timerSeconds % 60;

    document.getElementById("timerDisplay").textContent =
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0");
}

function startTimer(){

    if(timerInterval) return;
    timerInterval = setInterval(function(){
        if(timerSeconds > 0){
            timerSeconds--;
            updateTimerDisplay();

        } else {

            clearInterval(timerInterval);
            timerInterval = null;

            alert("Timer finished!");

        }

    },1000);

}

function pauseTimer(){

    clearInterval(timerInterval);
    timerInterval = null;

}

function resetTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 25 * 60;
    updateTimerDisplay();

}

const timerWindow = document.getElementById("timer");
const timerHeader = document.getElementById("timerHeader");

let timerDragging = false;
let timerOffsetX = 0;
let timerOffsetY = 0;

timerHeader.addEventListener("mousedown", function(e){

    timerDragging = true;

    timerOffsetX = e.clientX - timerWindow.offsetLeft;
    timerOffsetY = e.clientY - timerWindow.offsetTop;

});

document.addEventListener("mousemove", function(e){
    if(!timerDragging) return;
    timerWindow.style.left =
        (e.clientX - timerOffsetX) + "px";

    timerWindow.style.top =
        (e.clientY - timerOffsetY) + "px";
});

document.addEventListener("mouseup", function(){
timerDragging = false;
});

let tasksCompleted =
    Number(localStorage.getItem("tasksCompleted")) || 0;
const tree = document.getElementById("tree");
const taskCount = document.getElementById("taskCount");

updateTree();

function completeTask() {
    tasksCompleted++;
    localStorage.setItem("tasksCompleted", tasksCompleted);
    updateTree();
}

function updateTree() {
    taskCount.textContent = "Tasks Completed: " + tasksCompleted;
        if (tasksCompleted >= 15) {
            tree.src = "tree4.png";
        }
        else if (tasksCompleted >= 10) {
            tree.src = "tree3.png";
        }
        else if (tasksCompleted >= 5) {
            tree.src = "tree2.png";
        }
        else {
            tree.src = "tree1.png";
    }
}

function resetTree() {
    tasksCompleted = 0;
    localStorage.setItem(
        "tasksCompleted",
        tasksCompleted
    );
    updateTree();
}
function updateDate() {

    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    document.getElementById("date").textContent = date;
}
updateDate();

function openTasks(){
    document.getElementById("tasks").style.display = "block";

}
function closeTasks(){
    document.getElementById("tasks").style.display = "none";

}

function createTask(){
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createElement("span");

    text.textContent = "New Task";
    text.contentEditable = true;
    text.className = "task-text";

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(text);
    document.getElementById("tasksContainer")
    .appendChild(taskDiv);

}
const tasksWindow = document.getElementById("tasks");
const tasksHeader = document.getElementById("tasksHeader");
let tasksDragging = false;
let tasksOffsetX = 0;
let tasksOffsetY = 0;

tasksHeader.addEventListener("mousedown", function(e){
    tasksDragging = true;
    tasksOffsetX = e.clientX - tasksWindow.offsetLeft;
    tasksOffsetY = e.clientY - tasksWindow.offsetTop;
});

document.addEventListener("mousemove", function(e){
    if(!tasksDragging) return;

    tasksWindow.style.left = (e.clientX - tasksOffsetX) + "px";
    tasksWindow.style.top = (e.clientY - tasksOffsetY) + "px";

});
document.addEventListener("mouseup", function(){

    tasksDragging = false;

});
let usingFirstBackground = true;
function toggleBackground() {
    if (usingFirstBackground) {
        document.body.style.backgroundImage = 'url("background2.jpeg")';
    }else{
        document.body.style.backgroundImage = 'url("green.jpg")';
    }
    usingFirstBackground = !usingFirstBackground;
}