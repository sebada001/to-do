import './style.css';
import appSkeleton from './pageLoad.js';
import {newProject, initProjectOnly} from './newProj.js';
import {newTask} from './newTask.js';


appSkeleton();
newProject();
newTask();
initProjectOnly();
