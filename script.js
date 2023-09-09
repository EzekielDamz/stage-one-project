const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("slackDayOfTheWeek").innerHTML = "Current Day: "+ day;

const t = new Date(); 
document.getElementById("currentUTCTime").innerHTML = "Current Time: " + t.toUTCString();
 