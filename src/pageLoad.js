export default function appSkeleton(){
    const htmlSkelly =
`<div class="container">
<div class="blackout"> </div>
<div class="pop-up-project"> </div>
<div class="pop-up-task"> 
  <label for="name">Title (up to 20 characters):</label>
  <input type="text" id="name" name="name" maxlength="20" size="13" placeholder="Potassium is very important">

  <label for="description">Task description:</label>
  <textarea id="description" name="description" rows="5" cols="33">I mustn't forget to peel the banana before I eat it... </textarea>

  <label for="due-date">Due date:</label>
  <input type="date" id="due-date" name="due-date" value="2023-03-23" min="2018-01-01" max="2030-12-31"> 

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
      <h2>Projects</h2>
      <button class="add-project-button">+</button>
    </div>
    <ul class="projects-ul">
      <li>Work
        <ul class="class-Work-ul"> 
        </ul>
      </li>
      
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
