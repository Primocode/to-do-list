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

const newEntryOpenBox = () => {
  boxToCreateEntries.classList.toggle('active')
}

newEntry.addEventListener('click', newEntryOpenBox);

const exitFunction = () => {
  boxToCreateEntries.classList.toggle('active')
}

exitButton.addEventListener('click', exitFunction);

newEntryCircle.addEventListener('click', newEntryOpenBox);

// ------------------------------------------------

// Dodawanie wpisów do tablicy
let entryTitleArray = ["Samochód", "rower", "kanapka" ];
let entryContentsArray = ["Samochód jest super", "trek 1,2", "ser szynka"];
let entryCategoryArray = ["Ważne", "Ważne", "Do zrobienia"];
let entryDateArray = ["", "", ""];


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

  // Funkcja do zmiany na "Zrobione"
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

// tworzenie wszystkich wpisów 
const allButtonCreatingAllEntries = document.querySelector('.all');

const CreatingAllEntries = () => {
  deletingAllEntries();
  for (let i = 0; i < entryTitleArray.length; i++) {
    creationNewEntry(entryContentsArray[i], entryTitleArray[i], entryCategoryArray[i], entryDateArray[i]);
  }
  messageActive();
}

CreatingAllEntries()
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

messageActive();

// ----------------------------------------

//  TWORZENIE NOWEJ KATEGORI 

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

//  -------------------------------------

// Tworzenie i dodawanie do kategorii
const mainCategoryFunction = (e) => {
  deletingAllEntries();
  let nameCategory = e.target.dataset.category
  console.log(nameCategory + " to jest nazwa kategori")

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

const mainTitle = document.querySelectorAll(".to-do-main-title").forEach(item => item.addEventListener('click', mainCategoryFunction))

const mainContainerOnSubCatergory = document.querySelectorAll('.main-list');
const toOoMainTitle = document.querySelectorAll('.to-do-main-title');

// -----------------------------------

//usuwanie wszystkich podkategori
const deletingAllSubCategories = () => {  
  const allMainListSubCategory = document.querySelectorAll('#subCategory');
  for (let i = 0; i < allMainListSubCategory.length; i++) {
    allMainListSubCategory[i].remove(); // działa
  }
}
deletingAllSubCategories();

// ----------------------------------

// Tworzenie napisu w kategori jeżeli nie ma podkategori

const mainList = document.querySelectorAll('.main-list');

const createEmptySubCategory = (index) => {
  const emptyCategories = document.querySelectorAll('.main-list');
  
  for (let i = 0; i > emptyCategories.length; i++) {
    console.log("tyle jest kategori");
  } 

  console.log(mainList.length);
  console.log(index);

  // for (let i = 0; i < mainList.length; i++) {
  const emptySubCategory = document.createElement('h4');
  mainList[index].appendChild(emptySubCategory);
  emptySubCategory.className = "Empty-sub-category";
  emptySubCategory.textContent = "Pusto, dodaj coś"
    
  // }
}



const deleteEmptySubCategory = () => {
  const emptySubCategory = document.querySelectorAll('.Empty-sub-category');
  console.log(emptySubCategory)
  for (let i = 0; i < emptySubCategory.length; i++) {
    emptySubCategory[i].remove();
  }
}


// ------------------------------------------------------

// tworzenie pod kategori DOM 
const createSubCategoryFunction = (index, indexSubCategorie, amount) => { 
  // for (let i = 0; i < cos; i++) {
  //     console.log(cos.length + " to jest length"); 
  // }

    // index to index kategori
    // amount pokazuje ile jest subkategori w kategori

    


  for (let i = 0; i < amount; i++) {
    console.log("----------- w kategori o indeksie " + index + " jest " + amount + " subkategori ------------- do wklejenia w tą kategorie mam ideks " + indexSubCategorie + " który ma " + indexSubCategorie.length + " długość");

    const createSubCategory = document.createElement('h3');
    mainContainerOnSubCatergory[index].appendChild(createSubCategory);
    createSubCategory.id = "subCategory";
    createSubCategory.dataset.subCategory = entryTitleArray[indexSubCategorie[i]]
    createSubCategory.textContent = entryTitleArray[indexSubCategorie[i]];

  }

} 

// ----------------------------------

let numberSubCategory = -1;
// Pod kategorie
const subCategoryFunction = () => {   
  const mainList = document.querySelectorAll('.main-list');

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
subCategoryFunction()

// ------------------------------------------------------------

// licznik wpisów
const numberEntry = document.querySelector('#number-entry') 
const counterNumber = () => {
  numberEntry.textContent = "Aktualnych wpisów: " + entryTitleArray.length
}
counterNumber()



// Subkategorie - po kliknięciu wyświetlanie poszczególnych

const subCategoryClick = document.querySelector("#subCategory");

const subCategoryClickFunction = () => {

  const subCategoryValue = event.target.dataset.subCategory;
  const indexSubCategoryValue = entryTitleArray.indexOf(subCategoryValue)

  console.log(indexSubCategoryValue)
  deletingAllEntries();
  creationNewEntry(entryContentsArray[indexSubCategoryValue], entryTitleArray[indexSubCategoryValue], entryCategoryArray[indexSubCategoryValue], entryDateArray[indexSubCategoryValue]);
}

document.querySelectorAll("#subCategory").forEach(item => item.addEventListener('click', subCategoryClickFunction))



// --------------!--------------------!---------------!---------------!-------------