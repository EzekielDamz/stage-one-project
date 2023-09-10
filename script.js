const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

let day = weekday[d.getDay()];
document.querySelector('[data-testid=slackDayOfTheWeek]').innerHTML = "Current Day: " + day;

const dayTime = document.querySelector('[data-testid=currentUTCTime]');

const currentUTCTiming = d.toUTCString()
dayTime.innerHTML = currentUTCTiming;