// timer

let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]

function myTimer() {
let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
  document.getElementById("day").innerHTML = day[date.getDay()];
}
myTimer()
var myVar = setInterval(myTimer, 1000);

// end timer

// Otwieranie panelu do tworzenia notatek

const newEntry = document.querySelector('.add-new-entry')
const boxToCreateEntries = document.querySelector('.add-new-talk-container')
const exitButton = document.querySelector('.exit');
const newEntryCircle = document.querySelector('.add')

const newEntryOpenBox = () => {
  boxToCreateEntries.classList.toggle('active')
}

newEntry.addEventListener('click', newEntryOpenBox);

const exitFunction = () => {
  boxToCreateEntries.classList.toggle('active')
}

exitButton.addEventListener('click', exitFunction);

newEntryCircle.addEventListener('click', newEntryOpenBox);


// Koniec otwierania panelu do tworzenia notatek