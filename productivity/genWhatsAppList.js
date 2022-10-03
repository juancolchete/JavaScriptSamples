let priorityList = require("../data/priorityList.json");
let taskStatus = ["⌛","✅"]
let tasks = priorityList.taskList;
let whatsAppList = "";
whatsAppList += `${priorityList.title} \n`;
for(let i = 0; i < tasks.length; i++){
    whatsAppList += `\n*${i+1}-* ${tasks[i].text} ${taskStatus[tasks[i].status]}`
}
console.log(whatsAppList);