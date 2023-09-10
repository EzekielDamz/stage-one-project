/*const d = new Date();
const dayTime = document.querySelector('[data-testid=currentUTCTime]');
const currentUTCTime = d.toUTCString()
dayTime.innerHTML = currentUTCTime;*/







const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.querySelector('[data-testid=slackDayOfTheWeek]').innerHTML = "Current Day: " + day;


const dayTime = document.querySelector('[data-testid=currentUTCTime]');



const UTCTime = () => {
      
    const getUTCTiming = () => {
        const Newtime = new Date()
        const hour = Newtime.getUTCHours()
        const minutes = Newtime.getMinutes()
        const seconds = Newtime.getSeconds()
        const milliseconds = Newtime.getMilliseconds()
        const currentUTCTiming = `Current Time: ${hour}${minutes}${seconds}${milliseconds}`
        dayTime.innerHTML = currentUTCTiming;
     }
     getUTCTiming()

     setInterval(getUTCTiming, 1000)
}
UTCTime()

  