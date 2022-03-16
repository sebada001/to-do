import {thisPlay} from './display.js';
import {taskArrayUpdate} from './newTask.js';
import { add, isMatch, format, compareAsc, parseISO } from 'date-fns';
import {removeAllChildNodes} from './projList.js';

function addDateEvListeners(){
    const todayButt = document.querySelector(".today");
    const nextWeekButt = document.querySelector(".next-week");
    const allButt = document.querySelector(".all");
    todayButt.addEventListener('click', ()=>{
        displayTodayTasks();
    });
    nextWeekButt.addEventListener('click', ()=>{
        displayNextWeekTasks();
    });
    allButt.addEventListener('click', ()=>{
        displayAllTasks();
    });
};

function displayTodayTasks(){
   const matchingTasks = todayTasks();
   const container = document.querySelector(".tasks-container");
   removeAllChildNodes(container);
   matchingTasks.forEach(t => thisPlay(t));
};

function displayNextWeekTasks(){
    const matchingTasks = nextWeekTasks();
    const container = document.querySelector(".tasks-container");
    removeAllChildNodes(container);
    matchingTasks.forEach(t => thisPlay(t));
 };

function displayAllTasks(){
    const tasks = taskArrayUpdate();
    const container = document.querySelector(".tasks-container");
    removeAllChildNodes(container);
    tasks.forEach(t => thisPlay(t));
}

function todayTasks(){
    const tasks = taskArrayUpdate();
    const today = format(new Date(),'yyyy-MM-dd');
    const matchingTasks = [];
    for(let task of tasks){
        if(isMatch(task.dueDate, today)){
            matchingTasks.push(task);
        };
    };
    return matchingTasks;
}

function nextWeekTasks(){
    const nextWeek = add(new Date(),{weeks: 1});
    const tasks = taskArrayUpdate();
    const nextWeekFormatted = format(nextWeek,'yyyy-MM-dd');
    const matchingTasks = [];
    for(let task of tasks){
        if(compareAsc(parseISO(task.dueDate), parseISO(nextWeekFormatted)) == -1){
            matchingTasks.push(task);
        };
    };
    return matchingTasks;
}


export {addDateEvListeners, displayAllTasks};