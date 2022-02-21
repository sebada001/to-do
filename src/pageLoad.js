export default function appSkeleton(){
    const htmlSkelly =
`<div class="container">
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
}