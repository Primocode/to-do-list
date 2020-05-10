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

// ------------------------------------------------

// Dodawanie wpisów do tablicy
// let entryTitleArray = ["Samochód", "rower", "kanapka"];
// let entryContentsArray = ["Samochód jest super", "trek 1,2", "ser szynka"];
// let entryCategoryArray = ["Ważne", "Ważne", "Do zrobienia"];
// let entryDateArray = ["", "", ""];
// let entryCurrentTime = ["15,05,05", "14,55,55", "15;55,55"];

let entryTitleArray = [];
let entryContentsArray = [];
let entryCategoryArray = [];
let entryDateArray = [];
let entryCurrentTime = [];

let categoryArray = [];
let categoryColorArray = [];

let category = ["Do zrobienia", "Ważne", "Notatki"]


let deleteEntryTitleArray = [];
let deleteEntryContentsArray = [];
let deleteEntryCategoryArray = [];
let deleteEntryDateArray = [];
let deleteEntryCurrentTime = [];

// ----------------------------------------------

// Tworzenie nowych wpisów
number = 0;
let numberDeleted = 0;
const mainEntry = document.querySelector('.main-content-entry');

const creationNewEntry = (contents, title, entryCategory, entryDateValue, deleteEntry, hour, colorsCategory) => {
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
  // else if (entryCategory == entryCategory) { // Jeżeli kategoria jest równa kategori
  //   category.style.color = colorsCategory
  //   entryTopH2.style.borderLeft = `4px solid ${colorsCategory}`;
  // }
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

      // let selectHourValue = selectHour.textContent;
      // console.log(selectHourValue);

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
  
  // ----------------------------------------------------------------------------
  }


  // Funkcja do zmiany wpisów na na "Zrobione"
  const changeToDone = (e) => {
    // verificationTitleIndex = entryTopH2.textContent
    // verificationContentIndex = entryBottomTextP.textContent
    // verificationCategoryIndex = category.textContent
    // verificationDateIndex = date.textContent
    // verificationCurrentDate = infoBox.textContent;
    // console.log(verificationContentIndex);
    // console.log(verificationTitleIndex);
    // console.log(verificationCategoryIndex);
    // console.log(verificationDateIndex);
    // console.log(verificationCurrentDate);

    // const whatIndex = entryCurrentTime.indexOf(verificationCurrentDate) 
    // if (entryTitleArray[verificationTitleIndex] == entryCurrentTime[verificationCurrentDate]) {
    //   if (entryCategoryArray[verificationCategoryIndex] == entryContentsArray[verificationContentIndex]) {
    //     entryCategoryArray[whatIndex] = "Zrobione";
    //   }
    // }

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

    deleteEntryTitleArray.push(title);
    deleteEntryContentsArray.push(contents);
    deleteEntryCategoryArray.push("Usunięte");
    deleteEntryDateArray.push(entryDateValue);
    deleteEntryCurrentTime.push(hour);

    entryTitleArray.splice(entryTitleArray.indexOf(title), 1);
    entryContentsArray.splice(entryContentsArray.indexOf(contents), 1);
    entryCategoryArray.splice(entryCategoryArray.indexOf(entryCategory), 1);
    entryDateArray.splice(entryDateArray.indexOf(entryDateValue), 1);
    entryCurrentTime.splice(entryCurrentTime.indexOf(hour), 1);

    entry.remove(removeDatasetValue);
    messageActive(); //zamyka komunikat
    counterNumber() // odświeża licznik wpisów
    // deletingAllEntries(); // usuwa wszystkie wpisy
    // CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
    refreshCategories() // odświeża kategorie

    deletedElementsCounter();
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
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i], "nic", entryCurrentTime[i], categoryColorArray[i]);
  }
  messageActive();
}

// CreatingAllEntries()
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
  // else if (entryCurrentTime.indexOf(currentTime)) {
  //   mess.textContent = "Błąd - spróbuj ponownie"
  // }
  else {
    deletingAllEntries(); 
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate, "nothing" , currentTime, categoryColorArray)
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
}

addEntryButton.addEventListener('click', addEntryButtonFunction);

// -------------------------------------------

// usuwanie wszystkich selectów przed dodawaniem

const removeAllSelectCategory = () => {
  const selectValue = document.querySelectorAll('#select > option');
  for (let i = 3; i < selectValue.length; i++) {
    // selectValue[i].remove();
    selectValue[i].remove();
  }
}

// dodawanie nowego selecta po zrobieniu nowej kategori 

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

// ----------------------------------------


// odświeżanie kategori

const refreshCategories = () => {
  deletingAllSubCategories(); // usuwanie wszystkich kategori.
  subCategoryFunction(); // tworzenie nowych kategori
}

// ------------


// wyświetlanie napisu o pustej tablicy 

// messageActive();

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
  cyclicH2.className = "to-do-main-title";
  cyclicH2.textContent = nameCategoryArg // nazwa kategori
  cyclicH2.dataset.subcategory = nameCategoryArg;
  cyclicH2.style.color = colorCategory

  const cyclicList = document.createElement('div');
  cyclicContainer.appendChild(cyclicList);
  cyclicList.className = "cyclic-list main-list";
  cyclicList.dataset.subcategory = nameCategoryArg

  const emptyCategory = document.createElement('h4');
  cyclicList.appendChild(emptyCategory);
  emptyCategory.className = "Empty-sub-category";
  emptyCategory.textContent = "Pusto, dodaj coś"

}

//  -------------------------------------

// Tworzenie i dodawanie do kategorii
const mainCategoryFunction = () => {
  deletingAllEntries(); // test być może do usunięcia
  mainTitleReload(); // odświezanie pobierania to-do-main-title
  // let nameCategory = event.target.dataset.category
  let nameCategory = event.target.textContent;
  
  console.log(nameCategory + " to jest nazwa kategori")
  console.log(event.target.dataset.category)

  let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
  console.log(indexes[nameCategory]) // wyświetla listę tylko z nameCategory

  if (!indexes[nameCategory]) {
    console.log('PUSTO, NIE MA NIC!')
    messageActive();
  }
  else {
    for (let i = 0; i < indexes[nameCategory].length; i++) {
      creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]], "nothing", entryCurrentTime[indexes[nameCategory][i]], categoryColorArray[indexes[nameCategory][i]])
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
// deletingAllSubCategories();

// ----------------------------------

// dodawanie napisu pustych kategori

// const mainList = document.querySelectorAll('.main-list');

const createEmptySubCategory = (index) => {
  const emptyCategories = document.querySelectorAll('.main-list');
  
  for (let i = 0; i > emptyCategories.length; i++) {
    console.log("tyle jest kategori");
  } 


  console.log(emptyCategories);

  
  console.log(emptyCategories.length);
  console.log(index);
  console.log(emptyCategories[index])

  // for (let i = 0; i < mainList.length; i++) {
  const emptySubCategory = document.createElement('h4');
  emptyCategories[index].appendChild(emptySubCategory);
  emptySubCategory.className = "Empty-sub-category";
  emptySubCategory.textContent = "Pusto, dodaj coś"
    
  // }
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
    createSubCategory.dataset.subCategory = entryTitleArray[indexSubCategorie[i]]
    createSubCategory.textContent = entryTitleArray[indexSubCategorie[i]];

  }
  
  checkSubCategory()
} 

// ----------------------------------

// Przechodzenie pomiędzy subkategoriami
const subCategoryClickFunction = () => {
  const subCategoryValue = event.target.dataset.subCategory;
  const indexSubCategoryValue = entryTitleArray.indexOf(subCategoryValue)
  console.log(subCategoryValue)
  deletingAllEntries();
  creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue], "nothing", entryCurrentTime[indexSubCategoryValue], categoryColorArray[indexSubCategoryValue]);

}

const checkSubCategory = () => {
  document.querySelectorAll("#subCategory").forEach(item => item.addEventListener('click', subCategoryClickFunction))
}

// ---------------------------------------------------


let numberSubCategory = -1;
// Pod kategorie
const subCategoryFunction = () => {   
  const mainList = document.querySelectorAll('.main-list');
  console.log(mainList)
  // console.log(mainList.dataset.subcategory);


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

    //1 argument to index do której kategori dodać, a drugi argument to są indeksy poszczególnych wpisów
  }
  
numberSubCategory = -1;
}
// subCategoryFunction()

// ------------------------------------------------------------

// licznik wpisów
const numberEntry = document.querySelector('#number-entry') 
const counterNumber = () => {
  
  numberEntry.textContent = "Aktualnych wpisów: " + entryTitleArray.length
}
// counterNumber()

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
    // console.log("JEST BLACK");
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
    closeCreateCategory(); // zamykanie okna po zrobieniu kategori;
    mainTitleReload(); // refresh
  }
  else {
    messCategory.textContent = "Nazwa kategori nie może być pusta"
  }
  // console.log(createCategoryColor.style.color);
  addNewSelectCategory();

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
    creationNewEntry(deleteEntryContentsArray[i], deleteEntryTitleArray[i], deleteEntryCategoryArray[i], deleteEntryDateArray[i], "Usunięte", deleteEntryCurrentTime[i], categoryColorArray[i]);
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


const reloadScript = () => {
  CreatingAllEntries() // Tworzenie wszystkich wpisów
  messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
  // mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI
  deletingAllSubCategories(); // usuwanie wszystkich podkategori
  subCategoryFunction() // tworzenie od nowa wszystkich podkategori
  mainTitleReload()
  counterNumber() // licznik wpisów
}
reloadScript()

// 0-gas08gas907gas07f0as-f7asfj0syfu0myh589aeyhkeafdhffdfsdshfjdhfdhfdhfdhf





// ---------------------------------------------------
// --------------!--------------------!---------------!---------------!-------------



