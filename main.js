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
let entryTitleArray = ["Samochód", "rower", "kanapka"];
let entryContentsArray = ["Samochód jest super", "trek 1,2", "ser szynka"];
let entryCategoryArray = ["Ważne", "Ważne", "Do zrobienia"];
let entryDateArray = ["", "", ""];

let categoryArray = [];
let categoryColorArray = [];


let deleteEntryTitleArray = [];
let deleteEntryContentsArray = [];
let deleteEntryCategoryArray = [];
let deleteEntryDateArray = [];

// ----------------------------------------------

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
    category.style.width = "112px";
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

  // Funkcja do zmiany wpisów na na "Zrobione"
  const changeToDone = (e) => {
    verificationTitleIndex = entryTopH2.textContent
    verificationContentIndex = entryBottomTextP.textContent
    verificationCategoryIndex = category.textContent
    verificationDateIndex = date.textContent
    console.log(verificationContentIndex);
    console.log(verificationTitleIndex);
    console.log(verificationCategoryIndex);
    console.log(verificationDateIndex);

    const whatIndex = entryTitleArray.indexOf(verificationTitleIndex)
    if (entryTitleArray[verificationTitleIndex] == entryContentsArray[verificationContentIndex]) {
      if (entryCategoryArray[verificationCategoryIndex] == entryDateArray[verificationDateIndex]) {
        entryCategoryArray[whatIndex] = "Zrobione";
      }
    }
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
    deleteEntryCategoryArray.push(entryCategory);
    deleteEntryDateArray.push(entryDateValue);

    entryTitleArray.splice(entryTitleArray.indexOf(title), 1);
    entryContentsArray.splice(entryContentsArray.indexOf(contents), 1);
    entryCategoryArray.splice(entryCategoryArray.indexOf(entryCategory), 1);
    entryDateArray.splice(entryDateArray.indexOf(entryDateValue), 1);

    entry.remove(removeDatasetValue);
    messageActive(); //zamyka komunikat
    counterNumber() // odświeża licznik wpisów
    deletingAllEntries(); // usuwa wszystkie wpisy
    CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
    refreshCategories() // odświeża kategorie
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
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i]);
  }
  messageActive();
}

// CreatingAllEntries()
allButtonCreatingAllEntries.addEventListener('click', CreatingAllEntries);
console.log("AUTOMATYCZNE TWORZENIE WPISÓW")


// --------------------------------------

// Komunikat
const mess = document.querySelector('.mess')

function error() {
  mess.textContent = "";
}

let minute = setInterval(error, 4000);

// -------------------------------------

// Przycisk do dodawania nowych wpisów 
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
    refreshCategories();
  }
}

addEntryButton.addEventListener('click', addEntryButtonFunction);

// -------------------------------------------

// usuwanie wszystkich selectów przed dodawaniem

const removeAllSelectCategory = () => {
  const selectValue = document.querySelectorAll('#select');
  console.log(selectValue);
}

// dodawanie nowego selecta po zrobieniu nowej kategori 

const addNewSelectCategory = (selectValueText) => {
  const selectValue = document.querySelector('#select');
  console.log(selectValue);
  const newSelect = document.createElement('option');

  for (let i = 0; i < categoryArray.length; i++) {
    selectValue.appendChild(newSelect);
    newSelect.className = "option"
    newSelect.value = categoryArray[i]
    newSelect.textContent = categoryArray[i]
  }
}

// ---------------------------------------------

// odświeżanie i tworzenie od nowa z listy
const refresh = document.querySelector('.new-talk-button-refresh');

const refreshFunction = () => {
  refreshCategories();
}

refresh.addEventListener('click', refreshFunction);

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

const createNewCategory = (nameCategoryArg) => {
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

  const cyclicList = document.createElement('div');
  cyclicContainer.appendChild(cyclicList);
  cyclicList.className = "cyclic-list main-list";
  cyclicList.dataset.subcategory = nameCategoryArg

  const emptyCategory = document.createElement('h4');
  cyclicList.appendChild(emptyCategory);
  emptyCategory.className = "Empty-sub-category";
  emptyCategory.textContent = "Pusto, dodaj coś"
  
  addNewSelectCategory(nameCategoryArg);
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
      creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]])
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
  creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue]);
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
    console.log(categoryArray[i]);
    createNewCategory(categoryArray[i])
  }
}
// Pobieranie wartości przy polu i dodawanie do listy

const addNewCategory = document.querySelector('.category-add')

const createNewCategoryFunction = () => {
  const CreateNameCategoryValue = document.querySelector('.category-title').value;
  console.log(CreateNameCategoryValue);
  categoryArray.push(CreateNameCategoryValue);
  console.log(categoryArray)

  deleteAllCategories(); // usuwanie wszystkich kategori dodanych przez użytkownika.
  // createEmptySubCategory() // TO JEST FUNKCJA POKAZUJĄCA NAPIS PUSTE POTRZEBUJE ARGUMENTU INDEKSU GDZIE MA POKAZAĆ
  creatingAllCategory(); //tworzenie od nowa wszystkich kategori z listy

  // deletingAllSubCategories(); // usuwanie wszystkich kategori.
  // subCategoryFunction(); // tworzenie nowych kategori

  // mainTitleReload(); // reload tak aby można było przejść do nowej kategori
  closeCreateCategory(); // zamykanie okna po zrobieniu kategori;
  mainTitleReload(); // refresh
}

addNewCategory.addEventListener('click', createNewCategoryFunction);

// TESTTETSTETSTETSTETSTS

// TESTETESTETETSTESTET

// 0-dsa-0ds-0dasd-0sad-0as-0-0sad-0as--f0s-0g-0g0s-ag0-asg0-a0sg-0as-g0s-ag0s


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




// // timer

// let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]

// function Timer() {
// let date = new Date();
//   document.getElementById("time").innerHTML = date.toLocaleTimeString();
//   document.getElementById("day").innerHTML = day[date.getDay()];
// }
// Timer()
// let myVar = setInterval(Timer, 1000);

// // ------------------------------------------------

// // Otwieranie panelu i zamykanie
// const newEntry = document.querySelector('.add-new-entry')
// const boxToCreateEntries = document.querySelector('.add-new-talk-container')
// const exitButton = document.querySelector('.exit');
// const newEntryCircle = document.querySelector('.add')
// const createCategory = document.querySelector('.creating-category');
// const createCategoryExit = document.querySelector('.category-exit');

// const newEntryOpenBox = () => {
//   boxToCreateEntries.classList.toggle('active')
// }

// newEntry.addEventListener('click', newEntryOpenBox);

// const exitFunction = () => {
//   boxToCreateEntries.classList.toggle('active')
// }

// exitButton.addEventListener('click', exitFunction);

// const openCreateCategory = () => {
//   createCategory.classList.toggle("creating-category-active")
// }

// newEntryCircle.addEventListener('click', openCreateCategory);

// const closeCreateCategory = () => {
//   createCategory.classList.toggle("creating-category-active")
// }

// createCategoryExit.addEventListener('click', closeCreateCategory);

// // ------------------------------------------------

// // Dodawanie wpisów do tablicy
// let entryTitleArray = ["Samochód", "rower", "kanapka"];
// let entryContentsArray = ["Samochód jest super", "trek 1,2", "ser szynka"];
// let entryCategoryArray = ["Ważne", "Ważne", "Do zrobienia"];
// let entryDateArray = ["", "", ""];

// let categoryArray = [];
// let categoryColorArray = [];


// let deleteEntryTitleArray = [];
// let deleteEntryContentsArray = [];
// let deleteEntryCategoryArray = [];
// let deleteEntryDateArray = [];

// // ----------------------------------------------

// // Tworzenie nowych wpisów
// number = 0;

// const mainEntry = document.querySelector('.main-content-entry');

// const creationNewEntry = (contents, title, entryCategory, entryDateValue) => {
//   number++
//   const entry = document.createElement('div');
//   mainEntry.appendChild(entry)
//   entry.className = "entry";
//   entry.dataset.value = number;

//   const entryTop = document.createElement('div');
//   entry.appendChild(entryTop);
//   entryTop.className = "entry-top";

//   // TYTUŁ WPISU!! TYTUŁ WPISU!!!
//   const entryTopH2 = document.createElement('h2');
//   entryTop.appendChild(entryTopH2);
//   entryTopH2.textContent = title; // - TEXT CONTENT TYTUŁU WPISU

//   const EntryTopRight = document.createElement('div');
//   entryTop.appendChild(EntryTopRight);
//   EntryTopRight.className = "entry-top-right";

//   // DATA WPISU !! DATA WPISU
//   const date = document.createElement('div');
//   EntryTopRight.appendChild(date);
//   date.className = "date";
//   date.textContent = entryDateValue // -- TEXT CONTENT DATY WPISU

//   // KATEGORIA WPISU!! KATEGORIA WPISU!!
//   const category = document.createElement('div');
//   EntryTopRight.appendChild(category);
//   category.className = "category";
//   category.textContent = entryCategory // -- TEXT CONTENT KATEGORI WPISU

//   if (entryCategory == "Do zrobienia") {
//     category.style.color = "#1C8AF5";
//     entryTopH2.style.borderLeft = "4px solid #1C8AF5";
//     category.style.width = "112px";
//   }
//   else if (entryCategory == "Zrobione") {
//     category.style.color = "#0A9C00";
//     entryTopH2.style.borderLeft = "4px solid #0A9C00";
//   }
//   else if (entryCategory == "Ważne") {
//     category.style.color = "#D23030";
//     entryTopH2.style.borderLeft = "4px solid #D23030";
//   }
//   else {
//     category.style.color = "#1C8AF5";
//     entryTopH2.style.borderLeft = "4px solid #1C8AF5";
//   }

//   const entryTopRightButtons = document.createElement('div');
//   entryTop.appendChild(entryTopRightButtons);
//   entryTopRightButtons.className = "entry-top-right-buttons";

//   // USUWANIE ELEMENTU!
//   const removeEntryButton = document.createElement('button');
//   entryTopRightButtons.appendChild(removeEntryButton);
//   removeEntryButton.className = "remove-entry"; 

//   const removeIcon = document.createElement('span');
//   removeEntryButton.appendChild(removeIcon);
//   removeIcon.className = "far fa-trash-alt";
//   removeIcon.dataset.key = "88"

//   // dodawanie do zrobionych
//   const doneEntry = document.createElement('button');
//   entryTopRightButtons.appendChild(doneEntry);
//   doneEntry.className = "done-entry";

//   // ICON DODAWANIA DO ZROBIONYCH

//   const doneIcon = document.createElement('span');
//   doneEntry.appendChild(doneIcon);
//   doneIcon.className = "far fa-check-circle";

//   const entryBottom = document.createElement('div');
//   entry.appendChild(entryBottom);
//   entryBottom.className = "entry-bottom";

//   const entryBottomTextP = document.createElement('p');
//   entryBottom.appendChild(entryBottomTextP);
//   entryBottomTextP.textContent = contents // TU JEST TEXT 

//   // Funkcja do zmiany wpisów na na "Zrobione"
//   const changeToDone = (e) => {
//     verificationTitleIndex = entryTopH2.textContent
//     verificationContentIndex = entryBottomTextP.textContent
//     verificationCategoryIndex = category.textContent
//     verificationDateIndex = date.textContent
//     console.log(verificationContentIndex);
//     console.log(verificationTitleIndex);
//     console.log(verificationCategoryIndex);
//     console.log(verificationDateIndex);

//     const whatIndex = entryTitleArray.indexOf(verificationTitleIndex)
//     if (entryTitleArray[verificationTitleIndex] == entryContentsArray[verificationContentIndex]) {
//       if (entryCategoryArray[verificationCategoryIndex] == entryDateArray[verificationDateIndex]) {
//         entryCategoryArray[whatIndex] = "Zrobione";
//       }
//     }
//     counterNumber() // odświeża licznik wpisów
//     deletingAllEntries(); // usuwa wszystkie wpisy
//     CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
//     refreshCategories() // odświeża kategorie
//    }

//   doneIcon.addEventListener('click', changeToDone)

//   // funkcja do usuwania poszczególnych wpisów
//   const removeIndividualEntryFunction = (e) => {
//     let removeDatasetValue = entry.dataset.value

//     deleteEntryTitleArray.push(title);
//     deleteEntryContentsArray.push(contents);
//     deleteEntryCategoryArray.push(entryCategory);
//     deleteEntryDateArray.push(entryDateValue);

//     entryTitleArray.splice(entryTitleArray.indexOf(title), 1);
//     entryContentsArray.splice(entryContentsArray.indexOf(contents), 1);
//     entryCategoryArray.splice(entryCategoryArray.indexOf(entryCategory), 1);
//     entryDateArray.splice(entryDateArray.indexOf(entryDateValue), 1);

//     entry.remove(removeDatasetValue);
//     messageActive(); //zamyka komunikat
//     counterNumber() // odświeża licznik wpisów
//     deletingAllEntries(); // usuwa wszystkie wpisy
//     CreatingAllEntries(); // tworzy wszystkie wpisy od nowa
//     refreshCategories() // odświeża kategorie
//   }
//   // -----------------------------------------
  
//   removeEntryButton.addEventListener('click', removeIndividualEntryFunction);
// }

// //  --------------------------------------------


// // Usuwanie wszystkich wpisów 
// const deletingAllEntries = () => {
//   const addAllEntry = document.querySelectorAll('.entry')
//   for (let i = 0; i < addAllEntry.length; i++) {
//     addAllEntry[i].remove();
//   }
// }

// // --------------------------------------------

// const emptyMessage = document.querySelector(".empty-entry-message-active");

// // Funkcja aktywacji wiadomości, pokazuje czy kategoria jest pusta 

// const messageActive = () => {
//   const entryMessage = document.querySelectorAll('.entry');
//   console.log(entryMessage)
//   if (!entryMessage.length < 1) {
//     emptyMessage.className = "empty-entry-message"
//   } 
//   else {
//     emptyMessage.className = "empty-entry-message-active";
//   }
// }

// // ---------------------------------------------------------------------

// // tworzenie wszystkich wpisów 
// const allButtonCreatingAllEntries = document.querySelector('.all');

// const CreatingAllEntries = () => {
//   deletingAllEntries();
//   for (let i = 0; i < entryTitleArray.length; i++) {
//     creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i]);
//   }
//   messageActive();
// }

// // CreatingAllEntries()
// allButtonCreatingAllEntries.addEventListener('click', CreatingAllEntries);
// console.log("AUTOMATYCZNE TWORZENIE WPISÓW")


// // --------------------------------------

// // Komunikat
// const mess = document.querySelector('.mess')

// function error() {
//   mess.textContent = "";
// }

// let minute = setInterval(error, 4000);

// // -------------------------------------

// // Przycisk do dodawania nowych wpisów 
// const addEntryButton = document.querySelector('.add-new');

// const addEntryButtonFunction = () => {
//   const entryContents = document.querySelector('.text-area').value // pobieranie treści
//   const entryTitle = document.querySelector('.entry-title').value // pobieranie tytułu
//   const EntryCategory = document.querySelector('#select').value; // pobieranie wartości select z kategori
//   const entryDate = document.querySelector('.entry-date').value;
//   if (entryContents.length < 1) {
//     mess.textContent = "Treść nie może zostać pusta";
//   }
//   else if (entryTitle.length < 1) {
//     mess.textContent = "Tytuł nie może być pusty";
//   }
//   else {
//     deletingAllEntries(); 
//     creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate)
//     entryContentsArray.push(entryContents);
//     entryTitleArray.push(entryTitle);
//     entryCategoryArray.push(EntryCategory);
//     entryDateArray.push(entryDate);
//     newEntryOpenBox()
//     messageActive();
//     CreatingAllEntries()
//     counterNumber()
//     refreshCategories();
//   }
// }

// addEntryButton.addEventListener('click', addEntryButtonFunction);

// // -------------------------------------------

// // usuwanie wszystkich selectów przed dodawaniem

// const removeAllSelectCategory = () => {
//   const selectValue = document.querySelectorAll('#select');
//   console.log(selectValue);
// }

// // dodawanie nowego selecta po zrobieniu nowej kategori 

// const addNewSelectCategory = (selectValueText) => {
//   const selectValue = document.querySelector('#select');
//   console.log(selectValue);
//   const newSelect = document.createElement('option');

//   for (let i = 0; i < categoryArray.length; i++) {
//     selectValue.appendChild(newSelect);
//     newSelect.className = "option"
//     newSelect.value = categoryArray[i]
//     newSelect.textContent = categoryArray[i]
//   }
// }

// // ---------------------------------------------

// // odświeżanie i tworzenie od nowa z listy
// const refresh = document.querySelector('.new-talk-button-refresh');

// const refreshFunction = () => {
//   refreshCategories();
// }

// refresh.addEventListener('click', refreshFunction);

// // ----------------------------------------


// // odświeżanie kategori

// const refreshCategories = () => {
//   deletingAllSubCategories(); // usuwanie wszystkich kategori.
//   subCategoryFunction(); // tworzenie nowych kategori
// }

// // ------------


// // wyświetlanie napisu o pustej tablicy 

// // messageActive();

// // ----------------------------------------

// //  TWORZENIE NOWEJ KATEGORI 

// const toDoListCategory = document.querySelector('.to-do-list-category');

// const createNewCategory = (nameCategoryArg) => {
//   const cyclic = document.createElement('div');
//   toDoListCategory.appendChild(cyclic);
//   cyclic.className = "cyclic";

//   const cyclicContainer = document.createElement('div');
//   cyclic.appendChild(cyclicContainer);
//   cyclicContainer.className = "cyclic-container notes-container-height";

//   const cyclicText = document.createElement('div');
//   cyclicContainer.appendChild(cyclicText);
//   cyclicText.className = "cyclic-test main-title";

//   const cyclicSpan = document.createElement('span');
//   cyclicText.appendChild(cyclicSpan);
//   cyclicSpan.className = "far fa-circle";

//   const cyclicH2 = document.createElement('h2');
//   cyclicText.appendChild(cyclicH2);
//   cyclicH2.className = "to-do-main-title";
//   cyclicH2.textContent = nameCategoryArg // nazwa kategori
//   cyclicH2.dataset.subcategory = nameCategoryArg;

//   const cyclicList = document.createElement('div');
//   cyclicContainer.appendChild(cyclicList);
//   cyclicList.className = "cyclic-list main list";
//   cyclicList.dataset.subcategory = nameCategoryArg
  
//   addNewSelectCategory(nameCategoryArg);
// }

// //  -------------------------------------

// // Tworzenie i dodawanie do kategorii
// const mainCategoryFunction = () => {
//   deletingAllEntries(); // test być może do usunięcia
//   mainTitleReload(); // odświezanie pobierania to-do-main-title
//   // let nameCategory = event.target.dataset.category
//   let nameCategory = event.target.textContent;
  
//   console.log(nameCategory + " to jest nazwa kategori")
//   console.log(event.target.dataset.category)

//   let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{})
//   console.log(indexes[nameCategory]) // wyświetla listę tylko z nameCategory

//   if (!indexes[nameCategory]) {
//     console.log('PUSTO, NIE MA NIC!')
//     messageActive();
//   }
//   else {
//     for (let i = 0; i < indexes[nameCategory].length; i++) {
//       creationNewEntry(entryContentsArray[indexes[nameCategory][i]], entryTitleArray[indexes[nameCategory][i]], entryCategoryArray[indexes[nameCategory][i]], entryDateArray[indexes[nameCategory][i]])
//       console.log("ile razy pokazać wpis" + i)
//       messageActive();
//       }
//     console.log(indexes[nameCategory].length);
//   }
//     // ----------------------------------------------
// }

// const mainTitleReload = () => {
//   const mainTitle = document.querySelectorAll(".to-do-main-title").forEach(item => item.addEventListener('click', mainCategoryFunction))
// }
// mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI

// const mainContainerOnSubCatergory = document.querySelectorAll('.main-list');
// const toOoMainTitle = document.querySelectorAll('.to-do-main-title');

// // -----------------------------------

// //usuwanie wszystkich podkategori
// const deletingAllSubCategories = () => {  
//   const allMainListSubCategory = document.querySelectorAll('#subCategory');
//   for (let i = 0; i < allMainListSubCategory.length; i++) {
//     allMainListSubCategory[i].remove(); // działa
//   }
// }
// // deletingAllSubCategories();

// // ----------------------------------

// // dodawanie napisu pustych kategori

// // const mainList = document.querySelectorAll('.main-list');

// const createEmptySubCategory = (index) => {
//   const emptyCategories = document.querySelectorAll('.main-list');
  
//   for (let i = 0; i > emptyCategories.length; i++) {
//     console.log("tyle jest kategori");
//   } 


//   console.log(emptyCategories);

  
//   console.log(emptyCategories.length);
//   console.log(index);
//   console.log(emptyCategories[index])

//   // for (let i = 0; i < mainList.length; i++) {
//   const emptySubCategory = document.createElement('h4');
//   emptyCategories[index].appendChild(emptySubCategory);
//   emptySubCategory.className = "Empty-sub-category";
//   emptySubCategory.textContent = "Pusto, dodaj coś"
    
//   // }
// }

// //usuwanie pustego napisu
// const deleteEmptySubCategory = () => {
//   const emptySubCategory = document.querySelectorAll('.Empty-sub-category');
//   console.log(emptySubCategory)
//   for (let i = 0; i < emptySubCategory.length; i++) {
//     emptySubCategory[i].remove();
//   }
// }


// // ------------------------------------------------------

// // tworzenie subkategori DOM 
// const createSubCategoryFunction = (index, indexSubCategorie, amount) => { 
//   for (let i = 0; i < amount; i++) {
//     console.log("----------- w kategori o indeksie " + index + " jest " + amount + " subkategori ------------- do wklejenia w tą kategorie mam ideks " + indexSubCategorie + " który ma " + indexSubCategorie.length + " długość");

//     const createSubCategory = document.createElement('h3');
//     mainContainerOnSubCatergory[index].appendChild(createSubCategory);
//     createSubCategory.id = "subCategory";
//     createSubCategory.dataset.subCategory = entryTitleArray[indexSubCategorie[i]]
//     createSubCategory.textContent = entryTitleArray[indexSubCategorie[i]];

//   }
  
//   checkSubCategory()
// } 

// // ----------------------------------

// // Przechodzenie pomiędzy subkategoriami
// const subCategoryClickFunction = () => {
//   const subCategoryValue = event.target.dataset.subCategory;
//   const indexSubCategoryValue = entryTitleArray.indexOf(subCategoryValue)
//   console.log(subCategoryValue)
//   deletingAllEntries();
//   creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue]);
// }

// const checkSubCategory = () => {
//   document.querySelectorAll("#subCategory").forEach(item => item.addEventListener('click', subCategoryClickFunction))
// }

// // ---------------------------------------------------


// let numberSubCategory = -1;
// // Pod kategorie
// const subCategoryFunction = () => {   
//   const mainList = document.querySelectorAll('.main-list');
//   console.log(mainList)
//   // console.log(mainList.dataset.subcategory);


//   console.log(toOoMainTitle); // trzeba sprawdzić jaki index ma dana kategoria, żeby pózniej po indexie dodać do pod kategori tytuły
//   let indexes = entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});
//   let amount = 0;
//   deleteEmptySubCategory()
//   for (let i = 0; i < mainList.length; i++) { // funkcja wywołuje się tyle razy ile jest kategori
//     let subCategoryList = mainList[i].dataset.subcategory // nazwa  kategori 
//     numberSubCategory++
//     console.log(subCategoryList + " ma index " + numberSubCategory);  
//     console.log(indexes[subCategoryList]); //to są indeksy poszczególnych wpisów

//     if (!indexes[subCategoryList]) {
//       console.log(numberSubCategory + ' TU JEST PUSTO, NIE MA NIC!')
//       createEmptySubCategory(numberSubCategory)
//     }
//     else {
//       amount = indexes[subCategoryList].length;
//     }

    
//     createSubCategoryFunction(numberSubCategory, indexes[subCategoryList], amount);
//     amount = 0;

//   for (let i = 0; i > amount; i++) {
//     console.log("tyle razy musi zrobić w jednej kategori");
//   }

//     //1 argument to index do której kategori dodać, a drugi argument to są indeksy poszczególnych wpisów
//   }
  
// numberSubCategory = -1;
// }
// // subCategoryFunction()

// // ------------------------------------------------------------

// // licznik wpisów
// const numberEntry = document.querySelector('#number-entry') 
// const counterNumber = () => {
  
//   numberEntry.textContent = "Aktualnych wpisów: " + entryTitleArray.length
// }
// // counterNumber()

// // ----------------------------------------------------------

// // FUNKCJA DO USUWANIA WSZYSTKICH KATEGORI DODANYCH PRZEZ UŻYTKOWNIKA

// const deleteAllCategories = () => {
//   const howMuchUserCategories = document.querySelectorAll('.cyclic');
//   for (let i = 0; i < howMuchUserCategories.length; i++) {
//     howMuchUserCategories[i].remove();
//   }
// }

// // ------------------------------------------

// // Tworzenie automatycznie wszystkich kategori z listy

// const creatingAllCategory = () => {
//   for (let i = 0; i < categoryArray.length; i++) {
//     console.log(categoryArray[i]);
//     createNewCategory(categoryArray[i])
//   }
// }
// // Pobieranie wartości przy polu i dodawanie do listy

// const addNewCategory = document.querySelector('.category-add')

// const createNewCategoryFunction = () => {
//   const CreateNameCategoryValue = document.querySelector('.category-title').value;
//   console.log(CreateNameCategoryValue);
//   categoryArray.push(CreateNameCategoryValue);
//   console.log(categoryArray)

//   deleteAllCategories(); // usuwanie wszystkich kategori dodanych przez użytkownika.
//   // createEmptySubCategory() // TO JEST FUNKCJA POKAZUJĄCA NAPIS PUSTE POTRZEBUJE ARGUMENTU INDEKSU GDZIE MA POKAZAĆ
//   creatingAllCategory(); //tworzenie od nowa wszystkich kategori z listy

//   // deletingAllSubCategories(); // usuwanie wszystkich kategori.
//   // subCategoryFunction(); // tworzenie nowych kategori

//   // mainTitleReload(); // reload tak aby można było przejść do nowej kategori
//   closeCreateCategory(); // zamykanie okna po zrobieniu kategori;
//   mainTitleReload(); // refresh
// }

// addNewCategory.addEventListener('click', createNewCategoryFunction);

// // TESTTETSTETSTETSTETSTS

// // TESTETESTETETSTESTET

// // 0-dsa-0ds-0dasd-0sad-0as-0-0sad-0as--f0s-0g-0g0s-ag0-asg0-a0sg-0as-g0s-ag0s


// const reloadScript = () => {
//   CreatingAllEntries() // Tworzenie wszystkich wpisów
//   messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
//   // mainTitleReload(); // RELOADOWANIE PRZECHODZENIA DO POSZCZEGÓLNYCH KATEGORI
//   deletingAllSubCategories(); // usuwanie wszystkich podkategori
//   subCategoryFunction() // tworzenie od nowa wszystkich podkategori
//   mainTitleReload()
//   counterNumber() // licznik wpisów
// }
// reloadScript()

// // 0-gas08gas907gas07f0as-f7asfj0syfu0myh589aeyhkeafdhffdfsdshfjdhfdhfdhfdhf





// // ---------------------------------------------------
// // --------------!--------------------!---------------!---------------!-------------