import './style.css';
import appSkeleton from './pageLoad.js';
import newProject from './newProj.js';
import newTask from './newTask.js';

appSkeleton();
newProject();
newTask();

// const html =
// `<div class="container">
// <div class="header">
//   <div class="left">To Do App</div>
//   <div class="right">?</div>
// </div>

// <div class="control-panel">
//   <ul class="date-panel">
//     <li class="today">Today</li>
//     <li class="next-week">Next week</li>
//     <li class="all">All</li>
//   </ul>
//   <div class="projects">
//     <div class="projects-title">
//       <h2>Projects</h2>
//       <button class="add-project-button">+</button>
//     </div>
//     <ul>
//       <li class="work"> Work
//         <ul class="work-ul">
//             <li class="medium">Get hired</li>
//             <li class="relax">Find job</li>
//             <li class="urgent">Profit money</li>
//         </ul>
//       </li>
//       <li class="personal"> Personal
//         <ul class="personal-ul">
//           <li class="urgent">Drink coffee</li>
//           <li class="none">Eat well</li>
//           <li class="medium">Exercise</li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </div>

// <div class="display">
//   <h2 class="display-title">Today</h2>
//   <div class="tasks-container">
//     <div class="task">
//       <div class="task-left urgent-task">Drink coffee</div>
//       <div class="task-right">
//         <p>20/02/2022</p>
//         <p>Personal</p>
//       </div>
//     </div>
//     <div class="task">
//       <div class="task-left medium-task">Get hired</div>
//       <div class="task-right">
//         <p>19/09/2022</p>
//         <p>Work</p>
//       </div>
//     </div>
//   </div>
//   <div class="add-task-container">
//     <div class="add-task-left">
//       <button class="add-task-button">+</button>
//       <h4>Add task</h4>
//     </div>
//   </div>
// </div>
// </div>`;
// document.body.innerHTML = html;