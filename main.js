// timer

let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
let month = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Pażdziernik", "Listopad", "Grudzień"]

function Timer() {
let date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
  document.getElementById("day").innerHTML = day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()];
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

// Otwieranie / zamykanie menu

const menuOpenClose = document.querySelector('.menu-open-close')
const header = document.querySelector('header')
const closeMenu = document.querySelector('.close-menu');
const navigation = document.querySelector('nav') 


const menuOpenCloseFunction = () => {
  if (header.className == "header-active-nav") {
    header.className = "header";
  }
  else {
    header.className = "header-active-nav";
  }

  if (navigation.className == "nav") {
    navigation.className = "nav-active";
  }
  else {
    navigation.className = "nav";
  }
  document.querySelector('.search-input').value = null;
  document.querySelector('.empty-search').remove();
}

menuOpenClose.addEventListener('click', menuOpenCloseFunction);

closeMenu.addEventListener('click', menuOpenCloseFunction);

// -----------------------------------------------

let entryTitleArray = [];
let entryContentsArray = [];
let entryCategoryArray = [];
let entryDateArray = [];
let entryCurrentTime = [];
let entryHourTime = [];

let categoryArray = [];
let categoryColorArray = [];

let deleteEntryTitleArray = [];
let deleteEntryContentsArray = [];
let deleteEntryCategoryArray = [];
let deleteEntryDateArray = [];
let deleteEntryCurrentTime = [];
let deleteEntryHourTime = [];

// Tworzenie nowych wpisów
number = 0;
let numberDeleted = 0;
const mainEntry = document.querySelector('.main-content-entry');

const creationNewEntry = (contents, title, entryCategory, entryDateValue, deleteEntry, hour, givenTime) => {
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

  const entryTopRightButtons = document.createElement('div');
  entryTop.appendChild(entryTopRightButtons);
  entryTopRightButtons.className = "entry-top-right-buttons";

  const entryBottom = document.createElement('div');
  entry.appendChild(entryBottom);
  entryBottom.className = "entry-bottom";

  const entryBottomTextP = document.createElement('p');
  entryBottom.appendChild(entryBottomTextP);
  entryBottomTextP.textContent = contents // TU JEST TEXT 

  // DÓŁ WPISU
  const entryBottomContainer = document.createElement('div');
  entry.appendChild(entryBottomContainer);
  entryBottomContainer.className = "entry-bottom-container";

  const entryLeftBox = document.createElement('div');
  entryBottomContainer.appendChild(entryLeftBox);
  entryLeftBox.className = "entry-bottom-left"

  // KATEGORIA
  const entryLeftCategory = document.createElement('h3');
  entryLeftBox.appendChild(entryLeftCategory);
  entryLeftCategory.className = "entry-left-category";
  entryLeftCategory.textContent = entryCategory; // KATEGORIA

  //--------------------------------------------------------------

  // DATA 
  const entryLeftDate = document.createElement('h4');
  entryLeftBox.appendChild(entryLeftDate);
  entryLeftDate.className = "entry-left-date";
  if (entryDateValue.length > 1) {
    entryLeftDate.textContent = "do " + entryDateValue;  // DATA PODANA PRZEZ UŻYTKOWNIKA
  }   
  else {
    entryLeftDate.textContent = entryDateValue
  }                                                      

  const entryLeftHour = document.createElement('h4');
  entryLeftBox.appendChild(entryLeftHour);
  entryLeftHour.className = "entry-left-hour";
  entryLeftHour.textContent = givenTime

  // ------------------------------------------------------------

  const entryBottomRight = document.createElement('div');
  entryBottomContainer.appendChild(entryBottomRight);
  entryBottomRight.className = "entry-bottom-right";

  //INFORMACJE 
  const info = document.createElement('button');
  entryBottomRight.appendChild(info);
  info.className = "info-entry";

  const infoIcon = document.createElement('span');
  info.appendChild(infoIcon);
  infoIcon.className = "fas fa-info";

  const infoBox = document.createElement('div');
  info.appendChild(infoBox);
  infoBox.className = "information";
  infoBox.textContent = "Godzina utworzenia wpisu " + hour //TUTAJ GODZINA UTWORZENIA WPISU

  // USUWANIE ELEMENTU!
  const removeEntryButton = document.createElement('button');
  entryBottomRight.appendChild(removeEntryButton);
  removeEntryButton.className = "remove-entry"; 

  const removeIcon = document.createElement('span');
  removeEntryButton.appendChild(removeIcon);
  removeIcon.className = "fas fa-trash";
  removeIcon.dataset.key = "88"

  // dodawanie do zrobionych
  const doneEntry = document.createElement('button');
  entryBottomRight.appendChild(doneEntry);
  doneEntry.className = "done-entry";

  // ICON DODAWANIA DO ZROBIONYCH
  const doneIcon = document.createElement('span');
  doneEntry.appendChild(doneIcon);
  doneIcon.className = "fas fa-check";

  const whatIndexColors = categoryArray.indexOf(entryCategory);
  console.log(whatIndexColors);

  if (entryCategory == "Do zrobienia") {
    entryLeftCategory.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
  }
  else if (entryCategory == "Zrobione") {
    entryLeftCategory.style.color = "#0A9C00";
    entryTopH2.style.borderLeft = "4px solid #0A9C00";
  }
  else if (entryCategory == "Notatki") {
    entryLeftCategory.style.color = "#1C8AF5";
    entryTopH2.style.borderLeft = "4px solid #1C8AF5";
  }
  else if (entryCategory == "Ważne") {
    entryLeftCategory.style.color = "#D23030";
    entryTopH2.style.borderLeft = "4px solid #D23030";
  }
  else if (entryCategory == "Usunięte") {
    entryLeftCategory.style.color = "#D23030"
    entryTopH2.style.borderLeft = "4px solid #D23030";
  }
  else {
    entryLeftCategory.style.color = categoryColorArray[whatIndexColors]
    entryTopH2.style.borderLeft = `4px solid ${categoryColorArray[whatIndexColors]}`;
  }
  // ------------------------------------------------------------

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
      entryHourTime.push(deleteEntryHourTime[indexDelete]);

      deleteEntryTitleArray.splice(indexDelete, 1);
      deleteEntryContentsArray.splice(indexDelete, 1);
      deleteEntryCategoryArray.splice(indexDelete, 1);
      deleteEntryDateArray.splice(indexDelete, 1);
      deleteEntryCurrentTime.splice(indexDelete, 1);
      deleteEntryHourTime.splice(indexDelete, 1);
      // CreatingAllEntries() // Tworzenie wszystkich wpisów
      messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
      // mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI
      deletingAllSubCategories(); // usuwanie wszystkich podkategori
      subCategoryFunction() // tworzenie od nowa wszystkich podkategori
      mainTitleReload()

      for (let i = 0; i < deleteEntryCurrentTime.length; i++) {
        creationNewEntry(deleteEntryContentsArray[i], deleteEntryTitleArray[i], deleteEntryCategoryArray[i], deleteEntryDateArray[i], "Usunięte", deleteEntryCurrentTime[i], deleteEntryHourTime[i]);
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
    reloadMainTitleSelection(); // Przejście do listy (Wszystkie);
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
      deleteEntryHourTime.push(givenTime)

      entryTitleArray.splice(deleteByIndex, 1);
      entryContentsArray.splice(deleteByIndex, 1);
      entryCategoryArray.splice(deleteByIndex, 1);
      entryDateArray.splice(deleteByIndex, 1);
      entryCurrentTime.splice(deleteByIndex, 1);
      entryHourTime.splice(deleteByIndex, 1);

      entry.remove(removeDatasetValue);
      messageActive(); //zamyka komunikat
      counterNumber() // odświeża licznik wpisów
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
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i], " ", entryCurrentTime[i], entryHourTime[i]);
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
  const entryHourValue = document.querySelector('.entry-hour').value;
  const currentTime = new Date();
  if (entryTitle.length < 1) {
    mess.textContent = "Tytuł nie może być pusty";
  }
  else if (entryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł już istnieje";
  }
  else if (deleteEntryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł został wcześniej usunięty";
  }
  else {
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate, "nothing" , currentTime, entryHourValue)
    entryContentsArray.push(entryContents);
    entryTitleArray.push(entryTitle);
    entryCategoryArray.push(EntryCategory);
    entryDateArray.push(entryDate);
    entryCurrentTime.push(currentTime)
    entryHourTime.push(entryHourValue);
    newEntryOpenBox()
    messageActive();
    deletingAllSubCategories(); // usuwanie wszystkich podkategori
    subCategoryFunction() // tworzenie od nowa wszystkich podkategori
    counterNumber()
    deletingAllEntries(); // usuwanie wszystkich wpisów
    CreatingAllEntries() // Tworzenie wszystkich wpisów
    refreshCategories();
    mainTitleSelectionFunction();
    reloadMainTitleSelection(); // Przejście do listy (Wszystkie);
    document.querySelector('.text-area').value = null;
    document.querySelector('.entry-title').value = null;
    document.querySelector('.entry-date').value = null;
    document.querySelector('.entry-hour').value = null;
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
  cyclicSpan.style.color = colorCategory;

  const cyclicH2 = document.createElement('h2');
  cyclicText.appendChild(cyclicH2);
  cyclicH2.className = "to-do-main-title selection";
  cyclicH2.textContent = nameCategoryArg // nazwa kategori
  cyclicH2.dataset.category = nameCategoryArg;
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
    deleteBox.textContent = `Czy napewno chcesz usunąć listę o nazwie "${nameCategoryArg}"? Cała zawartość tej listy zostanie usunięta.`

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
          deleteEntryHourTime.push(entryHourTime[indexToDelete]);
  
          entryTitleArray.splice(indexToDelete, 1);
          entryContentsArray.splice(indexToDelete, 1);
          entryCategoryArray.splice(indexToDelete, 1);
          entryDateArray.splice(indexToDelete, 1);
          entryCurrentTime.splice(indexToDelete, 1);
          entryHourTime.splice(indexToDelete, 1)
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
      reloadMainTitleSelection(); // Aktywacja przycisku (Wszystkie)
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
      creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]], "nothing", entryCurrentTime[indexes[nameCategory][i]], entryHourTime[indexes[nameCategory][i]])
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
    createSubCategory.dataset.category = entryCategoryArray[indexSubCategorie[i]];
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
  creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue], "nothing", entryCurrentTime[indexSubCategoryValue], entryHourTime[indexSubCategoryValue]);
  messageActive();
  menuCloseFunction();
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
    document.querySelector('.category-title').value = null;
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
    creationNewEntry(deleteEntryContentsArray[i], deleteEntryTitleArray[i], deleteEntryCategoryArray[i], deleteEntryDateArray[i], "Usunięte", deleteEntryCurrentTime[i], deleteEntryHourTime[i]);
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
const whatCategory = document.querySelector('.top-header-title');
const mainTitleSelectionFunction = () => {
  reloadMainTitleSelection();
  const howMuchSelection = document.querySelectorAll('.selection');
  for (let i = 0; i < howMuchSelection.length; i ++) {
    howMuchSelection[i].style.background = "none";
  }
  let eventTarget = event.target
  eventTarget.style.background = "rgb(243, 243, 243)";
  whatCategory.textContent = "Wszystko";
  console.log(event.target.textContent);
  whatCategory.textContent = event.target.dataset.category;

  
  if (whatCategory.textContent == "") {
    whatCategory.textContent = "Wszystko";
  }
}

const reloadMainTitleSelection = () => {
  const whatCategory = document.querySelector('.top-header-title');
  const howMuchSelection = document.querySelectorAll('.selection');
  for (let i = 0; i < howMuchSelection.length; i ++) {
    howMuchSelection[i].style.background = "none";
  }
  howMuchSelection[0].style.background = "rgb(243, 243, 243)";

  whatCategory.textContent = "Wszystko"

  const mainTitleSelection = document.querySelectorAll(".selection").forEach(item => item.addEventListener('click', mainTitleSelectionFunction))
}
reloadMainTitleSelection();
// ----------------------------------------------------------------------------

// Zamykanie okna menu z róznymi rozdzielczościami
const menuCloseFunction = () => {
  if (window.innerWidth < 725) {
    menuOpenCloseFunction();
  }
}

document.querySelectorAll(".selection").forEach(item => item.addEventListener('click', menuCloseFunction))

// --------------------------------------------------

// Dodawanie tagów 

// const tagContainer = document.querySelector('.tag');
// const tagInput = document.querySelector('.tag-input')

// const tagsContainer = document.createElement('ul')
// tagContainer.appendChild(tagsContainer);
// tagsContainer.className = "tags-container"

// const tagInputValueFunction = () => {
//   const tagInputValue = document.querySelector('.tag-input').value
//   console.log(tagInputValue);

//   const addTag = (value) => {
//     const createTag = document.createElement('li');
//     tagsContainer.appendChild(createTag);
//     createTag.className = "tag"
//     createTag.textContent = value;
//   }

//   if (event.keyCode == 13) {
//     console.log("Wcisnąłeś enter")
//     document.querySelector('.tag-input').value = null;
//     addTag(tagInputValue)
//   }
//   if (event.keyCode == 32) {
//     console.log("Wcisnąłeś spacje")
//     document.querySelector('.tag-input').value = null;
//     addTag(tagInputValue)
//   }

//   if (event.keyCode == 8) {
//     document.querySelector('.tag-input').value = null;
//   }
// }

// tagInput.addEventListener('keyup', tagInputValueFunction);

// -----------------------------------------------------------------------------

// Pokazywanie zadania z wyszukiwarki

const showTheTask = (index) => {
    deletingAllEntries();
    creationNewEntry(entryContentsArray[index], entryTitleArray[index], entryCategoryArray[index], entryDateArray[index], "nothing", entryCurrentTime[index], entryHourTime[index]);
    whatCategory.textContent = entryCategoryArray[index]
    messageActive();
}

// ---------------------------------------------------------------------

// Wyszukiwanie zadań

const searchInput = document.querySelector('.search-input');
const itemsContainer = document.querySelector('.sophisticated-items-container');

const searchElements = () => {
  const searchInputValue = document.querySelector('.search-input').value;
  const searchCategoryRemove = document.querySelectorAll('.search-category');
  const allItemsContainer = document.querySelectorAll('.sophisticated-items');
  const emptySearch = document.querySelectorAll('.empty-search');
  for (let i = 0; i < allItemsContainer.length; i++) {
    allItemsContainer[i].remove();
    searchCategoryRemove[i].remove();
  }

  for (let i = 0; i < emptySearch.length; i ++) {
    emptySearch[i].remove();
  }

  if (!searchInputValue == "") {
    const sophisticatedAllItem = document.querySelectorAll('.sophisticated-items-container');
    for (let i = 0; i > sophisticatedAllItem.length; i++) {
      searchItemsContainer.remove()
    }
  
    if (!entryTitleArray.find( (item) => item.includes(searchInputValue)) == "") {
      let result = entryTitleArray.find( (item) => item.startsWith(searchInputValue))
      const searchItemsContainer = document.createElement('div');
      itemsContainer.appendChild(searchItemsContainer);
      searchItemsContainer.className="sophisticated-items";
      searchItemsContainer.dataset.category = entryCategoryArray[entryTitleArray.indexOf(result)]
      const searchCategory = document.createElement('h4');
      itemsContainer.appendChild(searchCategory);
      searchCategory.className = "search-category";
      searchCategory.textContent = entryCategoryArray[entryTitleArray.indexOf(result)]

      showTheTask(entryTitleArray.indexOf(result))

      // let result = entryTitleArray.find( (item) => item.includes(searchInputValue))
      searchItemsContainer.textContent = result;
    }
  
    // Stworzyć sophisticated-items-container 

    if (allItemsContainer.length < 1) {
      const createEmptyItem = document.createElement('h4');
      itemsContainer.appendChild(createEmptyItem);
      createEmptyItem.className = "empty-search"
      createEmptyItem.textContent = "Nie znaleziono takiego zadania"
    }
  }
}

searchInput.addEventListener('keyup', searchElements);
// ---------------------------------------------------------------------



// odświeżanie
const reloadScript = () => {
  CreatingAllEntries() // Tworzenie wszystkich wpisów
  messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
  creatingAllCategory(); // Tworzenie wszystkich wpisów
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
