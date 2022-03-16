export default function appSkeleton(){
    const htmlSkelly =
`<div class="container">
<div class="blackout"> </div>
<div class="pop-up-project"> 
  <header class="proj-header">Name your project 
    <button class="close-button-p">X</button>
  </header>
  <form id="form-pop-up" onsubmit="return false">
  <input type="text" id="proj-name" name="proj-name" maxlength="20" minlength="2" size="13" required onFocus="this.select()">
  <button class="proj-submit" type="submit" form="form-pop-up">Submit</button>
  </form>
</div>
<div class="pop-up-readMe">
 <header class="readMe-header"></header>
 <button class="close-button-r">X</button>
  <h4>To-Do web app, developed with vanilla JS and CSS + webpack.</h4> <br>
  <p>User guide:<br>
  Today - Next Week - All, display all tasks by date.<br>
  Trash icon next to 'Projects' activates delete mode to delete projects, re-clicking it deactive it.<br>
  '+' symbol next to 'Projects' creates a new project.<br>
  '+' symbol below task list creates a new task.<br>
  Clicking on a task name gives you more of the task information, you can change the description as needed.<br>
  Clicking on the red button at the right of each task deletes it.<br>
  Marking tasks as done greys them out.</p>
</div>

<div class="pop-up-task"> 
  <label for="name">Title (up to 20 characters):</label>
  <input type="text" id="name" name="name" maxlength="20" minlength="2" size="13" placeholder="Potassium is very important" onFocus="this.select()">

  <label for="description">Task description:</label>
  <textarea id="description" name="description" rows="5" cols="33" onFocus="this.select()">I mustn't forget to peel the banana before I eat it... </textarea>

  <label for="due-date">Due date:</label>
  <input type="date" id="due-date" name="due-date" value="" min="2018-01-01" max="2030-12-31"> 

  <div class="radio-container"> Priority:
  <input type="radio" id="urgent" name="prio" value="urgent" checked class="radio">
  <label for="urgent">Urgent</label>
  
  <input type="radio" id="medium" name="prio" value="medium" class="radio">
  <label for="medium">Medium</label>

  <input type="radio" id="relax" name="prio" value="relax" class="radio">
  <label for="relax">Relax</label>
  </div>
  <button class="confirm">Add task</button>
</div>

<div class="header">
  <div class="left">To Do App</div>
  <div class="right">?</div>
</div>

<div class="control-panel">
  <ul class="date-panel">
    <li class="today">Today</li>
    <li class="next-week">Next week</li>
    <li class="all">All</li>
  </ul>
  <div class="projects">
    <div class="projects-title">
      <div class="trash-button"> </div>
      <h2>Projects</h2>
      <button class="add-project-button">+</button>
    </div>
    <ul class="projects-ul">

      
    </ul>
  </div>
</div>

    <div class="display">
        <h2 class="display-title">All</h2>
        <div class="tasks-container"></div>
        <div class="add-task-container">
            <div class="add-task-left">
                <button class="add-task-button">+</button>
                <h4>Add task</h4>
            </div>
        </div>
    </div>
</div>`;


document.body.innerHTML = htmlSkelly;
const today = new Date(); 
const dateISO = today.toISOString()
const simpleDate = dateISO.substr(0, 10);
document.getElementById('due-date').value = simpleDate;

const popUpTaskScreen = document.querySelector(".pop-up-task");
const confirmButton = document.querySelector(".confirm");  
const projectSelectionWindow = (()=>{
    const select = document.createElement("select");
    select.name = "proj-names";
    select.id = "proj-names";
 
    let label = document.createElement("label");
    label.innerHTML = "Select project for this task: ";
    label.htmlFor = "proj-names";

    popUpTaskScreen.insertBefore(label, confirmButton);
    popUpTaskScreen.insertBefore(select, confirmButton);
})();
}
