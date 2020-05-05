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

let entryTitleArray = ["Samochód"];
let entryContentsArray = ["Samochód jest super"];
let entryCategoryArray = ["Ważne"];
let entryDateArray = [""];


let deleteEntryTitleArray = [];
let deleteEntryContentsArray = [];
let deleteEntryCategoryArray = [];
let deleteEntryDateArray = [];

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

    deleteEntryTitleArray.push(title);
    deleteEntryContentsArray.push(contents);
    deleteEntryCategoryArray.push(entryCategory);
    deleteEntryDateArray.push(entryDateValue);

    entryTitleArray.splice(entryTitleArray.indexOf(title), 1);
    entryContentsArray.splice(entryContentsArray.indexOf(contents), 1);
    entryCategoryArray.splice(entryCategoryArray.indexOf(entryCategory), 1);
    entryDateArray.splice(entryDateArray.indexOf(entryDateValue), 1);




    entry.remove(removeDatasetValue);
    messageActive();
    counterNumber()
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


// tworzeniei wszystkich wpisów 

const allButtonCreatingAllEntries = document.querySelector('.all');

const CreatingAllEntries = () => {
  deletingAllEntries()
  for (let i = 0; i < entryTitleArray.length; i++) {
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i]);
  }
}

CreatingAllEntries()
allButtonCreatingAllEntries.addEventListener('click', CreatingAllEntries);
console.log("AUTOMATYCZNE TWORZENIE WPISÓW")



//koniec tworzenia wwszystkich wpisów 


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
    deletingAllEntries();
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate)
    entryContentsArray.push(entryContents);
    entryTitleArray.push(entryTitle);
    entryCategoryArray.push(EntryCategory);
    entryDateArray.push(entryDate);
    newEntryOpenBox()
    messageActive();
    CreatingAllEntries()
    counterNumber()
  }

  
}

addEntryButton.addEventListener('click', addEntryButtonFunction);

// koniec przycisku do dodawania nowych wpisów


// koniec funkcji usuwnia poszczególnych wpisów

// odświeżanie i tworzenie od nowa z listy

const refresh = document.querySelector('.new-talk-button-refresh');

const refreshFunction = () => {
  // entryTitleArray = ["Samochód", "rower", "przykładowa notatka", "nie ważne", "nic ważnego", "bardzo ważne"];
  // entryContentsArray = ["Daihatsu cuore", "trek 1,2", "Notatka na temat niczego", "Nic ważnego", "ważne", "jakis tam tekst"];
  // entryCategoryArray = ["Do zrobienia", "Zrobione", "Ważne", "Notatki", "Usunięte", "Ważne"];
  // entryDateArray = ["04/05/2020", "", "04/00/2019", "", "", ""];

  console.log(entryContentsArray);
  console.log(entryTitleArray);
  console.log(entryCategoryArray);
  console.log(entryDateArray);

  console.log(deleteEntryContentsArray + " usunięta tablica ")
  console.log(deleteEntryTitleArray + " usunięta tablica ");
  console.log(deleteEntryCategoryArray + " usunięta tablica ");
  console.log(deleteEntryDateArray + " usunięta tablica ");
  deletingAllSubCategories()
  subCategoryFunction()
  deletingAllEntries()
  for (let i = 0; i < entryTitleArray.length; i++) {
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i])
  }
}

refresh.addEventListener('click', refreshFunction);


// koniec oodświeżania i tworzenia od nowa z lity


// wyświetlanie napisu o pustej tablicy 

const emptyMessage = document.querySelector(".empty-entry-message-active");

const messageActive = () => {
  if (!entryTitleArray.length < 1) {
    emptyMessage.className = "empty-entry-message"
  } 
  else {
    emptyMessage.className = "empty-entry-message-active";
  }
}


//  TWORZENIE NOWEJ KATEGORI TESTOWO

// const toDoListCategory = document.querySelector('.individual-category');

// append = ''

// const createNewCategory = () => {
//   const cyclic = document.createElement('div');
//   toDoListCategory.after(cyclic);
//   cyclic.className = "cyclic";
//   append += 
//   '<div class="cyclic-container"><div class="cyclic-text main-title"><span class="far fa-circle"></span><h2>wartość</h2></div><div class="cyclic-list main-list"><h2>Jakaś wartość</h2></div></div>';
//   cyclic.innerHTML = append
// }
// createNewCategory()

//  KONIEC TOWRZENIA NOWEJ KATEGORI TESTOWO

// Tworzenie i dodawanie do kategorii

const mainCategoryFunction = (e) => {
  deletingAllEntries();
  let nameCategory = e.target.dataset.category
  console.log(nameCategory + " to jest nazwa kategori")
  // console.log(entryCategoryArray.indexOf(nameCategory) + "to jest index");

  let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
  console.log(indexes[nameCategory]) // wyświetla listę tylko z nameCategory

  for (let i = 0; i < indexes[nameCategory].length; i++) {
    creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]])
    console.log("ile razy pokazać wpis" + i)

    }
  }

const mainTitle = document.querySelectorAll(".to-do-main-title").forEach(item => item.addEventListener('click', mainCategoryFunction))



const mainContainerOnSubCatergory = document.querySelectorAll('.main-list');
const toOoMainTitle = document.querySelectorAll('.to-do-main-title');
//usuwanie wszystkich podkategori

const deletingAllSubCategories = () => {
  const allMainListSubCategory = document.querySelectorAll('#subCategory');
  for (let i = 0; i < allMainListSubCategory.length; i++) {
    allMainListSubCategory[i].remove(); // działa
  }
}

// koniec usuwania wszystkich podkategori

// tworzenie pod kategori DOM 

const createSubCategoryFunction = (index, cos) => {
  const createSubCategory = document.createElement('h3');
  mainContainerOnSubCatergory[index].appendChild(createSubCategory);
  createSubCategory.id = "subCategory";
  createSubCategory.textContent = entryTitleArray[cos];
}


// 

// Pod kategorie 

let numberSubCategory = -1;

const subCategoryFunction = () => {
  // console.log(allMainListSubCategory[0].dataset.subcategory);
  // const subCategory = allMainListSubCategory.dataset.subcategory;
  // let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
  console.log(toOoMainTitle); // trzeba sprawdzić jaki index ma dana kategoria, żeby pózniej po indexie dodać do pod kategori tytuły
  for (let i = 0; i < mainContainerOnSubCatergory.length; i++) {
    let subCategoryList = mainContainerOnSubCatergory[i].dataset.subcategory
    let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
    numberSubCategory++
    console.log(subCategoryList + " ma index " + numberSubCategory);
    console.log(indexes[subCategoryList]); //to są indeksy poszczególnych wpisów
    createSubCategoryFunction(numberSubCategory, [indexes[subCategoryList]]);
  }
numberSubCategory = -1;

}

// koniec pod kategori


// licznik wpisów

const numberEntry = document.querySelector('#number-entry')
const counterNumber = () => {
  numberEntry.textContent = "Aktualnych wpisów: " + entryTitleArray.length
}


// koniec tworzenia i dodawania do kategorii

// Funkcje do kategori


// koniec funkcji do kategori




// array = ["jeden","dwa", "dwa", "jeden", "trzy", "jeden"];

// for(let i = 0; i < array.length; i++) {
//   console.log(array[i].includes("jeden"))
// }


// array = ["trzy", "jeden", "jeden" ,"dwa", "trzy", "dwa", "jeden", "trzy", "jeden", "osiem", "siedem"];

// function test() {
//   console.log(
//     entryCategoryArray.reduce(function(a,e,i) {
//       try{
//         a[e].push(i)
//       }
//       catch
//       (_){a[e]=[i]
//       };
//       return a},
//       {})
//   );
// }




