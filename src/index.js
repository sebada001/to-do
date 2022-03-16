import './style.css';
import appSkeleton from './pageLoad.js';
import {newProject, initProjectOnly} from './newProj.js';
import {newTask} from './newTask.js';
import {addDateEvListeners} from './displaysWithDates.js';
import {infoInitialState} from './info.js';


appSkeleton();
newProject();
newTask();
initProjectOnly();
addDateEvListeners();
infoInitialState();