// timer

let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]

function Timer() {
let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
  document.getElementById("day").innerHTML = day[date.getDay()];
}
Timer()
let myVar = setInterval(Timer, 1000);

// ------------------------------------------------

// Otwieranie panelu i zamykanie
const newEntry = document.querySelector('.add-new-entry')
const boxToCreateEntries = document.querySelector('.add-new-talk-container')
const exitButton = document.querySelector('.exit');
const newEntryCircle = document.querySelector('.add')
const createCategory = document.querySelector('.creating-category');
const createCategoryExit = document.querySelector('.category-exit');

const newEntryOpenBox = () => {
  boxToCreateEntries.classList.toggle('active')
}

newEntry.addEventListener('click', newEntryOpenBox);

const exitFunction = () => {
  boxToCreateEntries.classList.toggle('active')
}

exitButton.addEventListener('click', exitFunction);

const openCreateCategory = () => {
  createCategory.classList.toggle("creating-category-active")
}

newEntryCircle.addEventListener('click', openCreateCategory);

const closeCreateCategory = () => {
  createCategory.classList.toggle("creating-category-active")
}

createCategoryExit.addEventListener('click', closeCreateCategory);

// -----------------------------------------------------------------

// let entryTitleArray = [];
// let entryContentsArray = [];
// let entryCategoryArray = [];
// let entryDateArray = [];
// let entryCurrentTime = [];

// let categoryArray = [];
// let categoryColorArray = [];

// // let category = ["Do zrobienia", "Ważne", "Notatki"]

// let deleteEntryTitleArray = [];
// let deleteEntryContentsArray = [];
// let deleteEntryCategoryArray = [];
// let deleteEntryDateArray = [];
// let deleteEntryCurrentTime = [];

// -------------------------------------------------------------------

// let entryTitleArray = ["Nauka reacta", "Odrabiać lekcję", "E-lekcje", "Kat b1", "Daihatsu cuore ", "Zrobić kanapkę", "Prawko"];
// let entryContentsArray = ["Wykupić kurs u Samuraja.", "Trzeba odrabiać lekcję", "E-lekcję..", "kategoria b1", "b1", "Z chlebkiem", "Kat b1"];
// let entryCategoryArray = ["Ważne", "Prawo Jazdy", "Do zrobienia", "Ważne", "Samochód", "Zrobione", "Prawo Jazdy"];
// let entryDateArray = ["", "", "", "", "", "",""];
// let entryCurrentTime = ["Sun May 10 2020 20:10:36 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:10:49 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:11:22 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:12:03 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:12:17 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:12:53 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:15:36 GMT+0200 (czas środkowoeuropejski letni)"];

// let categoryArray = ["Szkoła", "Prawo Jazdy", "Samochód"];
// let categoryColorArray = ["rgb(0, 188, 213)", "rgb(233, 30, 99)", "rgb(33, 150, 243)"];

// // let category = ["Do zrobienia", "Ważne", "Notatki"]

// let deleteEntryTitleArray = ["problem z spacjami", "problem z spacjami1"];
// let deleteEntryContentsArray = ["Z chlebkiem", "jakiś błąd"];
// let deleteEntryCategoryArray = ["Usunięte", "Usunięte"];
// let deleteEntryDateArray = ["", ""];
// let deleteEntryCurrentTime = ["Sun May 10 2020 20:13:52 GMT+0200 (czas środkowoeuropejski letni)", "Sun May 10 2020 20:14:02 GMT+0200 (czas środkowoeuropejski letni)"];

let entryTitleArray = ["Kanapka", "Matematyka", "Notatka (Biologia)", "Nauka Reacta", "Nauka Angielskiego", "Zrobienie prawka", "Zrobienie samochodu", "Zdanie b1", "Rower Trek 1,2", "Pojeżdzić", "Kupić kask"];
let entryContentsArray = ["Kanapka w kategorii (Do zrobienia)", "Matematyka w kategorii (Ważne)", "Notatka (Biologia) w kategorii (Notatki)", "Nauka Reacta w kategorii (Do zrobienia)", "Nauka Angielskiego w kategorii (Do zrobienia)", "Zrobienie prawka w kategorii (Prawo jazdy)", "Zrobienie samochodu w kategorii (Prawo jazdy)", "Zdanie b1 w kategorii (Prawo jazdy)", "Rower Trek 1,2 w kategorii (Rower)", "Pojeżdzić w kategorii (Rower)", "Kupić kask w kategorii (Ważne)"];
let entryCategoryArray = ["Do zrobienia", "Ważne", "Notatki", "Do zrobienia", "Do zrobienia", "Prawo jazdy", "Prawo jazdy", "Prawo jazdy", "Rower", "Rower", "Ważne"];
let entryDateArray = ["", "", "", "", "", "", "", "", "", "", ""];
let entryCurrentTime = ["Mon May 11 2020 17:17:19 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:17:38 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:18:00 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:18:30 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:18:55 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:19:32 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:19:46 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:20:03 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:20:27 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:20:35 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:20:50 GMT+0200 (czas środkowoeuropejski letni)"];

let categoryArray = ["Prawo jazdy", "Rower", "Pusta kategoria"];
let categoryColorArray = ["rgb(255, 87, 34)", "rgb(156, 39, 176)", "rgb(76, 175, 80)"];

let deleteEntryTitleArray = ["Granie w gry ", "Sprzedaż skrzynek"];
let deleteEntryContentsArray = ["Granie w gry w kategori (Usunięte) pierwotnie kategoria (Do zrobienia)", "Sprzedaż skrzynek w kategori (Usunięte) pierwotnie kategoria (Rower)"];
let deleteEntryCategoryArray = ["Usunięte", "Usunięte"];
let deleteEntryDateArray = ["", ""];
let deleteEntryCurrentTime = ["Mon May 11 2020 17:22:00 GMT+0200 (czas środkowoeuropejski letni)", "Mon May 11 2020 17:22:28 GMT+0200 (czas środkowoeuropejski letni)"];

// ----------------------------------------------

// Tworzenie nowych wpisów
number = 0;
let numberDeleted = 0;
const mainEntry = document.querySelector('.main-content-entry');

const creationNewEntry = (contents, title, entryCategory, entryDateValue, deleteEntry, hour) => {
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

  const whatIndexColors = categoryArray.indexOf(entryCategory);
  console.log(whatIndexColors);

  if (entryCategory == "Do zrobienia") {
    category.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
    category.style.width = "112px";
  }
  else if (entryCategory == "Zrobione") {
    category.style.color = "#0A9C00";
    entryTopH2.style.borderLeft = "4px solid #0A9C00";
  }
  else if (entryCategory == "Notatki") {
    category.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
  }
  else if (entryCategory == "Ważne") {
    category.style.color = "#D23030";
    entryTopH2.style.borderLeft = "4px solid #D23030";
  }
  else if (entryCategory == "Usunięte") {
    category.style.color = "#D23030"
    entryTopH2.style.borderLeft = "4px solid #D23030";
  }
  else {
    category.style.color = categoryColorArray[whatIndexColors]
    entryTopH2.style.borderLeft = `4px solid ${categoryColorArray[whatIndexColors]}`;
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

  // Icon informacji
  const info = document.createElement('button');
  entryTopRightButtons.appendChild(info);
  info.className = "info-entry";

  const infoIcon = document.createElement('span');
  info.appendChild(infoIcon);
  infoIcon.className = "fas fa-info-circle";

  const infoBox = document.createElement('div');
  info.appendChild(infoBox);
  infoBox.className = "information";
  infoBox.textContent = "Godzina utworzenia wpisu " + hour //TUTAJ GODZINA UTWORZENIA WPISU

  const entryBottom = document.createElement('div');
  entry.appendChild(entryBottom);
  entryBottom.className = "entry-bottom";

  const entryBottomTextP = document.createElement('p');
  entryBottom.appendChild(entryBottomTextP);
  entryBottomTextP.textContent = contents // TU JEST TEXT 

  const openInfo = () => {
    infoBox.classList = "information-active";
  }

  info.addEventListener('mouseover', openInfo);

  const closeInfo = () => {
    infoBox.classList.toggle('information')
  }

  info.addEventListener('mouseout', closeInfo);

  // PANEL DLA USUNIĘTYCH
  if (deleteEntry == "Usunięte") {
    numberDeleted++
    entry.style.marginBottom = "25px";

    const topPanel = document.createElement('div');
    entry.prepend(topPanel);
    topPanel.className = "top-panel";

    const topPanelContainer = document.createElement('div');
    topPanel.appendChild(topPanelContainer);
    topPanelContainer.className = "top-panel-container";

    const topPanelText = document.createElement('h4');
    topPanelContainer.appendChild(topPanelText);
    topPanelText.className = "top-panel-container-text";
    topPanelText.textContent = "Przywróć do"

    const selectRestore = document.createElement('select');
    topPanelContainer.appendChild(selectRestore);
    selectRestore.id = "select-restore";
    selectRestore.dataset.value = numberDeleted;

    const buttonConfrim = document.createElement('button');
    topPanelContainer.appendChild(buttonConfrim);
    buttonConfrim.className = "button-confirm";
    buttonConfrim.textContent = "Zapisz"
    buttonConfrim.dataset.value = numberDeleted;

    const selectOption = document.createElement('option')
    selectRestore.appendChild(selectOption);
    selectOption.className = "deleted-option";
    selectOption.textContent = "Do zrobienia";

    const selectOption1 = document.createElement('option')
    selectRestore.appendChild(selectOption1);
    selectOption1.className = "deleted-option";
    selectOption1.textContent = "Ważne";

    const selectOption2 = document.createElement('option')
    selectRestore.appendChild(selectOption2);
    selectOption2.className = "deleted-option";
    selectOption2.textContent = "Notatki";

    for (let i = 0; i < categoryArray.length; i++) {
      const selectOptionCategory = document.createElement('option');
      selectRestore.appendChild(selectOptionCategory);
      selectOptionCategory.className = "deleted-option";
      selectOptionCategory.textContent = categoryArray[i]
    }
    removeEntryButton.remove();
    removeIcon.remove();
    doneEntry.remove();
    doneIcon.remove();

    // Przywracanie usuniętych wpisów 
    const restoreButton = document.querySelector('.button-confirm');

    const restoreDeletedEntries = (e) => {
      const entryAllDeleted = document.querySelectorAll('.entry');
      for (let i = 0; i < entryAllDeleted.length; i++) {
        entryAllDeleted[i].remove();
      }

      const selectRestoreOption = document.querySelector('#select-restore')
      const selectHour = document.querySelector('.information-active information');

      let selectRestoreValue = selectRestore.value // nazwa zaznaczonej kategori
      console.log(selectRestoreValue);
      console.log(hour);

      let indexDelete = deleteEntryCurrentTime.indexOf(hour);
      console.log(indexDelete);

      entryTitleArray.push(deleteEntryTitleArray[indexDelete]);
      entryContentsArray.push(deleteEntryContentsArray[indexDelete]);
      entryCategoryArray.push(selectRestoreValue);
      entryDateArray.push(deleteEntryDateArray[indexDelete]);
      entryCurrentTime.push(deleteEntryCurrentTime[indexDelete]);

      deleteEntryTitleArray.splice(indexDelete, 1);
      deleteEntryContentsArray.splice(indexDelete, 1);
      deleteEntryCategoryArray.splice(indexDelete, 1);
      deleteEntryDateArray.splice(indexDelete, 1);
      deleteEntryCurrentTime.splice(indexDelete, 1);
      // CreatingAllEntries() // Tworzenie wszystkich wpisów
      messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
      // mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI
      deletingAllSubCategories(); // usuwanie wszystkich podkategori
      subCategoryFunction() // tworzenie od nowa wszystkich podkategori
      mainTitleReload()

      for (let i = 0; i < deleteEntryCurrentTime.length; i++) {
        creationNewEntry(deleteEntryContentsArray[i], deleteEntryTitleArray[i], deleteEntryCategoryArray[i], deleteEntryDateArray[i], "Usunięte", deleteEntryCurrentTime[i]);
      }
      deletedElementsCounter();
    }
    messageActive();
    counterNumber() // licznik wpisów
    buttonConfrim.addEventListener('click', restoreDeletedEntries);
    // --------------------------------------------------------------------------
  }

  // Funkcja do zmiany wpisów na na "Zrobione"
  const changeToDone = (e) => {
    const whatIndex = entryCurrentTime.indexOf(hour) 
    entryCategoryArray[whatIndex] = "Zrobione";

    counterNumber() // odświeża licznik wpisów
    deletingAllEntries(); // usuwa wszystkie wpisy
    CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
    refreshCategories() // odświeża kategorie
   }

  doneIcon.addEventListener('click', changeToDone)

  // funkcja do usuwania poszczególnych wpisów
  const removeIndividualEntryFunction = (e) => {
    let removeDatasetValue = entry.dataset.value

    let deleteByIndex = entryTitleArray.indexOf(title);

    if (entryTitleArray.indexOf(title) >= 0) {
      console.log(entryTitleArray.indexOf(title))
      deleteEntryTitleArray.push(title);
      deleteEntryContentsArray.push(contents);
      deleteEntryCategoryArray.push("Usunięte");
      deleteEntryDateArray.push(entryDateValue);
      deleteEntryCurrentTime.push(hour);

      entryTitleArray.splice(deleteByIndex, 1);
      entryContentsArray.splice(deleteByIndex, 1);
      entryCategoryArray.splice(deleteByIndex, 1);
      entryDateArray.splice(deleteByIndex, 1);
      entryCurrentTime.splice(deleteByIndex, 1);

      entry.remove(removeDatasetValue);
      messageActive(); //zamyka komunikat
      counterNumber() // odświeża licznik wpisów
      // deletingAllEntries(); // usuwa wszystkie wpisy
      // CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
      refreshCategories() // odświeża kategorie

      deletedElementsCounter();

    }
  }
  // -----------------------------------------
  removeEntryButton.addEventListener('click', removeIndividualEntryFunction);
}
//  --------------------------------------------


// Usuwanie wszystkich wpisów 
const deletingAllEntries = () => {
  const addAllEntry = document.querySelectorAll('.entry')
  for (let i = 0; i < addAllEntry.length; i++) {
    addAllEntry[i].remove();
  }
}
// --------------------------------------------

const emptyMessage = document.querySelector(".empty-entry-message-active");

// Funkcja aktywacji wiadomości, pokazuje czy kategoria jest pusta 
const messageActive = () => {
  const entryMessage = document.querySelectorAll('.entry');
  console.log(entryMessage)
  if (!entryMessage.length < 1) {
    emptyMessage.className = "empty-entry-message"
  } 
  else {
    emptyMessage.className = "empty-entry-message-active";
  }
}
// ---------------------------------------------------------------------

// tworzenie wszystkich wpisów 
const allButtonCreatingAllEntries = document.querySelector('.all');

const CreatingAllEntries = () => {
  deletingAllEntries();
  for (let i = 0; i < entryTitleArray.length; i++) {
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i], "nic", entryCurrentTime[i]);
  }
  messageActive();
}
allButtonCreatingAllEntries.addEventListener('click', CreatingAllEntries);
console.log("AUTOMATYCZNE TWORZENIE WPISÓW")
// --------------------------------------

// Komunikat wpisów
const mess = document.querySelector('.mess')

function error() {
  mess.textContent = "";
}

let minute = setInterval(error, 4000);
// -------------------------------------

// Komunikat kategori
const messCategory = document.querySelector('.error-category')

function errorCategory() {
  messCategory.textContent = "";
}

let minuteCategory = setInterval(errorCategory, 4000);
// -------------------------------------

// Przycisk do dodawania nowych wpisów 
const addEntryButton = document.querySelector('.add-new');

const addEntryButtonFunction = () => {
  const entryContents = document.querySelector('.text-area').value // pobieranie treści
  const entryTitle = document.querySelector('.entry-title').value // pobieranie tytułu
  const EntryCategory = document.querySelector('#select').value; // pobieranie wartości select z kategori
  const entryDate = document.querySelector('.entry-date').value;
  const currentTime = new Date();
  if (entryContents.length < 1) {
    mess.textContent = "Treść nie może zostać pusta";
  }
  else if (entryTitle.length < 1) {
    mess.textContent = "Tytuł nie może być pusty";
  }
  else if (entryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł już istnieje";
  }
  else if (deleteEntryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł został wcześniej usunięty";
  }
  else {
    deletingAllEntries(); 
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate, "nothing" , currentTime)
    entryContentsArray.push(entryContents);
    entryTitleArray.push(entryTitle);
    entryCategoryArray.push(EntryCategory);
    entryDateArray.push(entryDate);
    entryCurrentTime.push(currentTime)
    newEntryOpenBox()
    messageActive();
    CreatingAllEntries()
    counterNumber()
    refreshCategories();
  }
  addEntryButton.style.background = "#1C8AF5";
}

addEntryButton.addEventListener('click', addEntryButtonFunction);
// -------------------------------------------

// usuwanie wszystkich selectów przy dodawaniu nowego wpisu
const removeAllSelectCategory = () => {
  const selectValue = document.querySelectorAll('#select > option');
  for (let i = 3; i < selectValue.length; i++) {
    selectValue[i].remove();
  }
}

// dodawanie nowego selecta przy tworzeniu nowego wpisu po zrobieniu nowej kategori 
const addNewSelectCategory = () => {
  const selectValue = document.querySelector('#select');
  removeAllSelectCategory();
  console.log(categoryArray);

  for (let i = 0; i < categoryArray.length; i++) {
    const newSelect = document.createElement('option');
    selectValue.appendChild(newSelect);
    newSelect.className = "option"
    newSelect.value = categoryArray[i]
    newSelect.textContent = categoryArray[i]
  }
}

// odświeżanie kategori
const refreshCategories = () => {
  deletingAllSubCategories(); // usuwanie wszystkich kategori.
  subCategoryFunction(); // tworzenie nowych kategori
}
// ----------------------------------------

//  TWORZENIE NOWEJ KATEGORI 
const toDoListCategory = document.querySelector('.to-do-list-category');

const createNewCategory = (nameCategoryArg, colorCategory) => {
  const cyclic = document.createElement('div');
  toDoListCategory.appendChild(cyclic);
  cyclic.className = "cyclic";

  const cyclicContainer = document.createElement('div');
  cyclic.appendChild(cyclicContainer);
  cyclicContainer.className = "cyclic-container notes-container-height";

  const cyclicText = document.createElement('div');
  cyclicContainer.appendChild(cyclicText);
  cyclicText.className = "cyclic-test main-title";

  const cyclicSpan = document.createElement('span');
  cyclicText.appendChild(cyclicSpan);
  cyclicSpan.className = "far fa-circle";

  const cyclicH2 = document.createElement('h2');
  cyclicText.appendChild(cyclicH2);
  cyclicH2.className = "to-do-main-title selection";
  cyclicH2.textContent = nameCategoryArg // nazwa kategori
  cyclicH2.dataset.subcategory = nameCategoryArg;
  cyclicH2.style.color = colorCategory

  const cyclicDelete = document.createElement('span');
  cyclicText.appendChild(cyclicDelete);
  cyclicDelete.className = "far fa-trash-alt cyclicDelete";

  const cyclicList = document.createElement('div');
  cyclicContainer.appendChild(cyclicList);
  cyclicList.className = "cyclic-list main-list";
  cyclicList.dataset.subcategory = nameCategoryArg

  const emptyCategory = document.createElement('h4');
  cyclicList.appendChild(emptyCategory);
  emptyCategory.className = "Empty-sub-category";
  emptyCategory.textContent = "Pusto, dodaj coś"

  // usuwanie poszczególnych kategori
  const deletingACategory = () => {
    console.log(cyclicH2.dataset.subcategory);

    const deleteBoxLength = document.querySelectorAll('.deletingCategory');
    console.log(deleteBoxLength);

    for (let i = 0; i < deleteBoxLength.length; i++) {
      deleteBoxLength[i].remove();
    }

    const deleteBox = document.createElement('div');
    cyclicList.prepend(deleteBox);
    deleteBox.className = "deletingCategory";
    deleteBox.textContent = `Czy napewno chcesz usunąć kategorie "${nameCategoryArg}"? Wszystkie wpisy w niej zostaną usunięte.`

    const deleteContainer = document.createElement('div');
    deleteBox.appendChild(deleteContainer);
    deleteContainer.className = "delete-container";

    const deleteCancelButton = document.createElement('button');
    deleteContainer.appendChild(deleteCancelButton);
    deleteCancelButton.className = "delete-cancel-button";
    deleteCancelButton.textContent = "Anuluj"

    const cancelDelete = () => {
      const deleteBox = document.querySelector('.deletingCategory');
      if (deleteBox) {
        deleteBox.remove();
      }
    }

    deleteCancelButton.addEventListener('click', cancelDelete)

    const deleteConfirmButton = document.createElement('button');
    deleteContainer.appendChild(deleteConfirmButton);
    deleteConfirmButton.className = "delete-confirm-button";
    deleteConfirmButton.textContent = "Usuń"

    const confirmDelete = () => {
      console.log("usunięto");
      let indexDelete = categoryArray.indexOf(nameCategoryArg) // usuwanie samej kategori 
      categoryArray.splice(indexDelete, 1); 
      categoryColorArray.splice(indexDelete, 1);

      let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});

      console.log(indexes[nameCategoryArg]);

      if (indexes[nameCategoryArg]) {
        for (let i = 0; i < indexes[nameCategoryArg].length; i++) {
          let indexToDelete = entryCategoryArray.indexOf(nameCategoryArg)
  
          deleteEntryTitleArray.push(entryTitleArray[indexToDelete]);
          deleteEntryContentsArray.push(entryContentsArray[indexToDelete]);
          deleteEntryCategoryArray.push("Usunięte");
          deleteEntryDateArray.push(entryDateArray[indexToDelete]);
          deleteEntryCurrentTime.push(entryCurrentTime[indexToDelete]);
  
          entryTitleArray.splice(indexToDelete, 1);
          entryContentsArray.splice(indexToDelete, 1);
          entryCategoryArray.splice(indexToDelete, 1);
          entryDateArray.splice(indexToDelete, 1);
          entryCurrentTime.splice(indexToDelete, 1);
        }
      }

      deleteAllCategories(); // usuwanie wszystkich kategori dodanych przez użytkownika.
      creatingAllCategory(); //tworzenie od nowa wszystkich kategori z listy
      deletingAllEntries(); // usuwanie wszystkich wpisów
      CreatingAllEntries() // Tworzenie wszystkich wpisów
      deletingAllSubCategories(); // usuwanie wszystkich podkategori
      subCategoryFunction() // tworzenie od nowa wszystkich podkategori
      addNewSelectCategory(); // odświeżenie kategori w "Nowy wpis"
      mainTitleReload(); // refresh
      counterNumber() // licznik wpisów
      deletedElementsCounter(); // licznik usuniętych wpisów
      cancelDelete();
    }
    deleteConfirmButton.addEventListener('click', confirmDelete)
  }
  
  cyclicDelete.addEventListener('click', deletingACategory)
  // -------------------------------------------------------------
}
//  -------------------------------------

// Tworzenie i dodawanie do kategorii
const mainCategoryFunction = () => {
  deletingAllEntries(); // test być może do usunięcia
  mainTitleReload(); // odświezanie pobierania to-do-main-title
  // let nameCategory = event.target.dataset.category
  let nameCategory = event.target.textContent;
  
  console.log(nameCategory + " to jest nazwa kategori")
  mainTitleSelectionFunction();
  console.log(event.target.dataset.category)

  let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
  console.log(indexes[nameCategory]) // wyświetla listę tylko z nameCategory

  if (!indexes[nameCategory]) {
    console.log('PUSTO, NIE MA NIC!')
    messageActive();
  }
  else {
    for (let i = 0; i < indexes[nameCategory].length; i++) {
      creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]], "nothing", entryCurrentTime[indexes[nameCategory][i]])
      console.log("ile razy pokazać wpis" + i)
      messageActive();
      }
    console.log(indexes[nameCategory].length);
  }
    // ----------------------------------------------
}

const mainTitleReload = () => {
  const mainTitle = document.querySelectorAll(".to-do-main-title").forEach(item => item.addEventListener('click', mainCategoryFunction))
}
mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI

const toOoMainTitle = document.querySelectorAll('.to-do-main-title');
// -----------------------------------

//usuwanie wszystkich podkategori
const deletingAllSubCategories = () => {  
  const allMainListSubCategory = document.querySelectorAll('#subCategory');
  for (let i = 0; i < allMainListSubCategory.length; i++) {
    allMainListSubCategory[i].remove(); // działa
  }
}
// ----------------------------------

// dodawanie napisu pustych kategori
const createEmptySubCategory = (index) => {
  const emptyCategories = document.querySelectorAll('.main-list');
  
  for (let i = 0; i > emptyCategories.length; i++) {
    console.log("tyle jest kategori");
  } 
  console.log(emptyCategories);
  console.log(emptyCategories.length);
  console.log(index);
  console.log(emptyCategories[index])

  const emptySubCategory = document.createElement('h4');
  emptyCategories[index].appendChild(emptySubCategory);
  emptySubCategory.className = "Empty-sub-category";
  emptySubCategory.textContent = "Pusto, dodaj coś"
}

//usuwanie pustego napisu
const deleteEmptySubCategory = () => {
  const emptySubCategory = document.querySelectorAll('.Empty-sub-category');
  console.log(emptySubCategory)
  for (let i = 0; i < emptySubCategory.length; i++) {
    emptySubCategory[i].remove();
  }
}
// ------------------------------------------------------

// tworzenie subkategori DOM 
const createSubCategoryFunction = (index, indexSubCategorie, amount) => { 
  for (let i = 0; i < amount; i++) {
    const mainContainerOnSubCatergory = document.querySelectorAll('.main-list');
    console.log("----------- w kategori o indeksie " + index + " jest " + amount + " subkategori ------------- do wklejenia w tą kategorie mam ideks " + indexSubCategorie + " który ma " + indexSubCategorie.length + " długość");

    const createSubCategory = document.createElement('h3');
    mainContainerOnSubCatergory[index].appendChild(createSubCategory);
    createSubCategory.id = "subCategory";
    createSubCategory.className = "selection";
    createSubCategory.dataset.subCategory = entryTitleArray[indexSubCategorie[i]]
    createSubCategory.textContent = entryTitleArray[indexSubCategorie[i]];
  }
  checkSubCategory()
} 
// ----------------------------------

// Przechodzenie pomiędzy subkategoriami
const subCategoryClickFunction = () => {
  const emptyMessageCom = document.querySelector('.empty-entry-message-active');
  const subCategoryValue = event.target.dataset.subCategory;
  const indexSubCategoryValue = entryTitleArray.indexOf(subCategoryValue)
  console.log(subCategoryValue)
  mainTitleSelectionFunction();
  deletingAllEntries();
  creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue], "nothing", entryCurrentTime[indexSubCategoryValue]);
  messageActive();
}

const checkSubCategory = () => {
  document.querySelectorAll("#subCategory").forEach(item => item.addEventListener('click', subCategoryClickFunction))
}
// ---------------------------------------------------

// Pod kategorie
let numberSubCategory = -1;
const subCategoryFunction = () => {   
  const mainList = document.querySelectorAll('.main-list');
  console.log(mainList)
  console.log(toOoMainTitle); // trzeba sprawdzić jaki index ma dana kategoria, żeby pózniej po indexie dodać do pod kategori tytuły
  let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});
  let amount = 0;
  deleteEmptySubCategory()
  for (let i = 0; i < mainList.length; i++) { // funkcja wywołuje się tyle razy ile jest kategori
    let subCategoryList = mainList[i].dataset.subcategory // nazwa  kategori 
    numberSubCategory++
    console.log(subCategoryList + " ma index " + numberSubCategory);  
    console.log(indexes[subCategoryList]); //to są indeksy poszczególnych wpisów

    if (!indexes[subCategoryList]) {
      console.log(numberSubCategory + ' TU JEST PUSTO, NIE MA NIC!')
      createEmptySubCategory(numberSubCategory)
    }
    else {
      amount = indexes[subCategoryList].length;
    }

    createSubCategoryFunction(numberSubCategory, indexes[subCategoryList], amount);
    amount = 0;

    for (let i = 0; i > amount; i++) {
      console.log("tyle razy musi zrobić w jednej kategori");
    }
  }
numberSubCategory = -1;
}

// ------------------------------------------------------------

// licznik wpisów
const numberEntry = document.querySelector('#number-entry') 
const counterNumber = () => {
  
  numberEntry.textContent = "Aktualnych wpisów: " + entryTitleArray.length
}
// ----------------------------------------------------------

// FUNKCJA DO USUWANIA WSZYSTKICH KATEGORI DODANYCH PRZEZ UŻYTKOWNIKA
const deleteAllCategories = () => {
  const howMuchUserCategories = document.querySelectorAll('.cyclic');
  for (let i = 0; i < howMuchUserCategories.length; i++) {
    howMuchUserCategories[i].remove();
  }
}

// ------------------------------------------

// Tworzenie automatycznie wszystkich kategori z listy
const creatingAllCategory = () => {
  for (let i = 0; i < categoryArray.length; i++) {
    createNewCategory(categoryArray[i], categoryColorArray[i]);
  }
}

// Wybór koloru
const categoryColorsFunction = () => {
  let categoryColor = event.target.dataset.color;
  const CreateNameCategoryValue = document.querySelector('.category-title');
  CreateNameCategoryValue.style.color = categoryColor;
  console.log(categoryColor);
}

document.querySelectorAll(".category-circle").forEach(item => item.addEventListener('click', categoryColorsFunction))

// Pobieranie wartości przy polu i dodawanie do listy |kategorie|
const addNewCategory = document.querySelector('.category-add')
const categoryError = document.querySelector('.error-category');

const createNewCategoryFunction = () => {
  const CreateNameCategoryValue = document.querySelector('.category-title').value
  const createCategoryColor = document.querySelector('.category-title');
  if (createCategoryColor.style.color == "black") {
    messCategory.textContent = "Musisz wybrać kolor kategori"
  }
  else if (categoryArray.includes(CreateNameCategoryValue)) {
    messCategory.textContent = "Taka kategoria już istnieje";
  }
  else if (CreateNameCategoryValue.length >= 1) {
    console.log(CreateNameCategoryValue);
    categoryArray.push(CreateNameCategoryValue);
    categoryColorArray.push(createCategoryColor.style.color);
    console.log(categoryArray)
  
    deleteAllCategories(); // usuwanie wszystkich kategori dodanych przez użytkownika.
    creatingAllCategory(); //tworzenie od nowa wszystkich kategori z listy
    deletingAllSubCategories(); // usuwanie wszystkich podkategori
    subCategoryFunction() // tworzenie od nowa wszystkich podkategori
    addNewSelectCategory(); // odświeżenie kategori w "Nowy wpis"
    closeCreateCategory(); // zamykanie okna 
    mainTitleReload(); // refresh
  }
  else {
    messCategory.textContent = "Nazwa kategori nie może być pusta"
  }
  addNewSelectCategory();
  addNewCategory.style.background = "#1C8AF5";
}

addNewCategory.addEventListener('click', createNewCategoryFunction);

// licznik usuniętych elementów 
const deletedElements = document.querySelector('.deleted-list-h4');

const deletedElementsCounter = () => {
  deletedElements.textContent = " Usuniętych elementów " + deleteEntryContentsArray.length;
}

// ----------------------------------------------------------

// Kategoria "Usunięte"
const deletedText = document.querySelector('.deleted-text');
const deleteShowButton = document.querySelector('.deleted-list-h3-see');
const deletedTextFunction = () => {
  deletingAllEntries();
  messageActive();
  const messageActiveDelete = document.querySelector('.empty-entry-message-active');
  for (let i = 0; i < deleteEntryTitleArray.length; i++) {
    creationNewEntry(deleteEntryContentsArray[i], deleteEntryTitleArray[i], deleteEntryCategoryArray[i], deleteEntryDateArray[i], "Usunięte", deleteEntryCurrentTime[i]);
  }
  console.log(deleteEntryCategoryArray.length)
  if (deleteEntryTitleArray.length >= 1) {
    console.log("jest coś")
    messageActiveDelete.className = "empty-entry-message"
   
  } 
  else {
    console.log("nie ma nic")
    messageActiveDelete.className = "empty-entry-message-active";
  }
}

deletedText.addEventListener('click', deletedTextFunction);
deleteShowButton.addEventListener('click', deletedTextFunction);
// ---------------------------------------------------------------------------

// Zaznaczenie kategori
const mainTitleSelectionFunction = () => {
  reloadMainTitleSelection();
  const howMuchSelection = document.querySelectorAll('.selection');
  // console.log(howMuchSelection[0]);
  for (let i = 0; i < howMuchSelection.length; i ++) {
    howMuchSelection[i].style.background = "none";
  }
  let eventTarget = event.target
  eventTarget.style.background = "rgb(243, 243, 243)";
}

const reloadMainTitleSelection = () => {
  const howMuchSelection = document.querySelectorAll('.selection');
  howMuchSelection[0].style.background = "rgb(243, 243, 243)";
  const mainTitleSelection = document.querySelectorAll(".selection").forEach(item => item.addEventListener('click', mainTitleSelectionFunction))
}
reloadMainTitleSelection();
// ----------------------------------------------------------------------------

// Funkcja do godziny 

const entryHour = document.querySelector('.entry-hour');
let numberHour = 0;

const entryHourBlockFunction = () => {
  let entryHourValue = document.querySelector('.entry-hour').value;
  console.log(entryHourValue + " to jest wartość")
  numberHour++
  console.log(numberHour);
  if (event.keyCode == 8) {
    console.log("kliknięcto backspace")
    entryHour.value = "";
    numberHour = 0;
  }
  if (numberHour == 3) {
    console.log('Więcej niż 2')
    entryHour.value = entryHourValue + ":";
  }
  else if (numberHour == 5) {
    entryHour.value = "";
    numberHour = 1;
  }
}

entryHour.addEventListener('keydown', entryHourBlockFunction);


//---------------------------------------------------------------------- 

// odświeżanie
const reloadScript = () => {
  CreatingAllEntries() // Tworzenie wszystkich wpisów
  messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
  // mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI
  creatingAllCategory();
  deletingAllSubCategories(); // usuwanie wszystkich podkategori
  subCategoryFunction() // tworzenie od nowa wszystkich podkategori
  mainTitleReload()
  addNewSelectCategory();
  counterNumber() // licznik wpisów
  deletedElementsCounter(); // licznik usuniętych wpisów
  reloadMainTitleSelection();
}
reloadScript()
// ------------------------------------------------------------------------------



