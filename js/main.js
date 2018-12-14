const calendarContainer = document.querySelector(".container");

const calendarDays = 24;
let d = new Date();
let n = d.getDate()
let dateContainer = document.querySelector(".date-container");

function displayDate(){
    console.log(n);
    if(n <= 24){
        dateContainer.innerHTML = 'Dagens lucka är nummer ' + n;
        
    } else {
        dateContainer.innerHTML = 'Julafton har redan varit';
    }
    
}
displayDate();


const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        courseNumber = i + 1;
        let coursePath = `./img/course-${courseNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null, coursePath));
    
    }
}
const openDoor = (path, event) => {

    if(event.target.innerText == n){
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "1";
   
    event.target.innerHTML = 'Dagens lucka';
   } else if(event.target.innerText < n){
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "1";
    
   }
  
}


createCalendar();

