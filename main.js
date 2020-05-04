// timer

let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]

function Timer() {
let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
  document.getElementById("day").innerHTML = day[date.getDay()];
}
Timer()
let myVar = setInterval(Timer, 1000);

// end timer

// Otwieranie panelu i zamykanie

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


// Koniec otwierania panelu i zamykanie

// Dodawanie wpisów do tablicy

let entryTitleArray = [];
let entryContentsArray = [];
let entryCategoryArray = [];
let entryDateArray = [];

// dodawanie wpisów do tablicy

// Tworzenie nowych wpisów
number = 0;

const mainEntry = document.querySelector('.main-content-entry');

const creationNewEntry = (contents, title, entryCategory, entryDateValue) => {
  number++
  const entry = document.createElement('div');
  mainEntry.appendChild(entry)
  entry.className = "entry";
  entry.dataset.value = number;

  const entryTop = document.createElement('div');
  entry.appendChild(entryTop);
  entryTop.className = "entry-top";


  // TYTUŁ WPISU!! TYTUŁ WPISU!!!
  const entryTopH2 = document.createElement('h2');
  entryTop.appendChild(entryTopH2);
  entryTopH2.textContent = title; // - TEXT CONTENT TYTUŁU WPISU

  const EntryTopRight = document.createElement('div');
  entryTop.appendChild(EntryTopRight);
  EntryTopRight.className = "entry-top-right";

  // DATA WPISU !! DATA WPISU
  const date = document.createElement('div');
  EntryTopRight.appendChild(date);
  date.className = "date";
  date.textContent = entryDateValue // -- TEXT CONTENT DATY WPISU

  // KATEGORIA WPISU!! KATEGORIA WPISU!!
  const category = document.createElement('div');
  EntryTopRight.appendChild(category);
  category.className = "category";
  category.textContent = entryCategory // -- TEXT CONTENT KATEGORI WPISU

  if (entryCategory == "Do zrobienia") {
    category.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
  }
  else if (entryCategory == "Zrobione") {
    category.style.color = "#0A9C00";
    entryTopH2.style.borderLeft = "4px solid #0A9C00";
  }
  else if (entryCategory == "Ważne") {
    category.style.color = "#D23030";
    entryTopH2.style.borderLeft = "4px solid #D23030";
  }
  else {
    category.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
  }



  const entryTopRightButtons = document.createElement('div');
  entryTop.appendChild(entryTopRightButtons);
  entryTopRightButtons.className = "entry-top-right-buttons";

  // USUWANIE ELEMENTU!
  const removeEntryButton = document.createElement('button');
  entryTopRightButtons.appendChild(removeEntryButton);
  removeEntryButton.className = "remove-entry"; 

  const removeIcon = document.createElement('span');
  removeEntryButton.appendChild(removeIcon);
  removeIcon.className = "far fa-trash-alt";
  removeIcon.dataset.key = "88"

  // dodawanie do zrobionych
  const doneEntry = document.createElement('button');
  entryTopRightButtons.appendChild(doneEntry);
  doneEntry.className = "done-entry";

  // ICON DODAWANIA DO ZROBIONYCH

  const doneIcon = document.createElement('span');
  doneEntry.appendChild(doneIcon);
  doneIcon.className = "far fa-check-circle";

  const entryBottom = document.createElement('div');
  entry.appendChild(entryBottom);
  entryBottom.className = "entry-bottom";

  const entryBottomTextP = document.createElement('p');
  entryBottom.appendChild(entryBottomTextP);
  entryBottomTextP.textContent = contents // TU JEST TEXT 

  // funkcja do usuwania wpisów

  const removeIndividualEntryFunction = (e) => {
    let removeDatasetValue = entry.dataset.value

    entryTitleArray.splice(entryTitleArray.indexOf(title), 1);
    entryContentsArray.splice(entryContentsArray.indexOf(contents), 1);
    entryCategoryArray.splice(entryCategoryArray.indexOf(entryCategory), 1);
    entryDateArray.splice(entryDateArray.indexOf(entryDateValue), 1);
    entry.remove(removeDatasetValue);
  }
  
  removeEntryButton.addEventListener('click', removeIndividualEntryFunction);
  
  // koniec funkcji do usuwania wpisów
}


// koniec tworzenia nowych wpisów

// Usuwanie wszystkich wpisów 

const deletingAllEntries = () => {
  const addAllEntry = document.querySelectorAll('.entry')
  for (let i = 0; i < addAllEntry.length; i++) {
    addAllEntry[i].remove();
  }
}

// koniec usuwania wszystkich wpisów 





// Przycisk do dodawania nowych wpisów 

const mess = document.querySelector('.mess')

function error() {
  mess.textContent = "";
}

let minute = setInterval(error, 4000);


const addEntryButton = document.querySelector('.add-new');

const addEntryButtonFunction = () => {
  const entryContents = document.querySelector('.text-area').value // pobieranie treści
  const entryTitle = document.querySelector('.entry-title').value // pobieranie tytułu
  const EntryCategory = document.querySelector('#select').value; // pobieranie wartości select z kategori
  const entryDate = document.querySelector('.entry-date').value;
  if (entryContents.length < 1) {
    mess.textContent = "Treść nie może zostać pusta";
  }
  else if (entryTitle.length < 1) {
    mess.textContent = "Tytuł nie może być pusty";
  }
  else {
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate)
    entryContentsArray.push(entryContents);
    entryTitleArray.push(entryTitle);
    entryCategoryArray.push(EntryCategory);
    entryDateArray.push(entryDate);
    newEntryOpenBox()
  }

  
}

addEntryButton.addEventListener('click', addEntryButtonFunction);

// koniec przycisku do dodawania nowych wpisów


// koniec funkcji usuwnia poszczególnych wpisów

// odświeżanie i tworzenie od nowa z listy

const refresh = document.querySelector('.new-talk-button-refresh');

const refreshFunction = () => {
  console.log(entryContentsArray);
  console.log(entryTitleArray);
  console.log(entryCategoryArray);
  console.log(entryDateArray);
  deletingAllEntries()
  for (let i = 0; i < entryTitleArray.length; i++) {
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i])
  }
}

refresh.addEventListener('click', refreshFunction);


// koniec oodświeżania i tworzenia od nowa z lity


