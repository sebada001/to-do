import './style.css';
import appSkeleton from './pageLoad.js';
import {newProject, initProjectOnly, ifEmpty} from './newProj.js';
import {newTask} from './newTask.js';
import {addDateEvListeners} from './displaysWithDates.js';
import {infoInitialState} from './info.js';
import {getStorage} from './localStorage.js';




appSkeleton();
newProject();
newTask();

initProjectOnly();
getStorage();

addDateEvListeners();
infoInitialState();
ifEmpty();