// timer
let day = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
let month = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Pażdziernik", "Listopad", "Grudzień"]

const timer = () => {
  let date = new Date();
  document.querySelector("#time").textContent = date.toLocaleTimeString();
  document.querySelector("#day").textContent = day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()];
}
timer()
setInterval(timer, 1000);
// ------------------------------------------------

// Otwieranie panelu i zamykanie
const newEntryOpenBox = () => {
  document.querySelector('.add-new-talk-container').classList.toggle('active');
}

document.querySelector('.add-new-entry').addEventListener('click', newEntryOpenBox);

const exitFunction = () => {
  document.querySelector('.add-new-talk-container').classList.toggle('active');
}

document.querySelector('.exit').addEventListener('click', exitFunction);

const openCreateCategory = () => {
  document.querySelector('.creating-category').classList.toggle("creating-category-active");
}

document.querySelector('.add').addEventListener('click', openCreateCategory);

const closeCreateCategory = () => {
  document.querySelector('.creating-category').classList.toggle("creating-category-active");
}

document.querySelector('.category-exit').addEventListener('click', closeCreateCategory);
// -----------------------------------------------------------------

// Otwieranie / zamykanie menu
const header = document.querySelector('header');
const navigation = document.querySelector('nav');
const shadow = document.querySelector('.shadow');

const menuOpenCloseFunction = () => {
  if (header.className == "header-active-nav") {
    header.className = "header";
    shadow.className = "shadow-active";
  }
  else {
    header.className = "header-active-nav";
    shadow.className = "shadow";
  }

  if (navigation.className == "nav") {
    navigation.className = "nav-active";
  }
  else {
    navigation.className = "nav";
  }
  document.querySelector('.search-input').value = null;
  if (document.querySelector('.empty-search')) {
    document.querySelector('.empty-search').remove();
    document.querySelector('.sophisticated-items-container').remove();
  }
}
document.querySelector('.menu-open-close').addEventListener('click', menuOpenCloseFunction);
document.querySelector('.close-menu').addEventListener('click', menuOpenCloseFunction);
// -----------------------------------------------

const taskValues = {
  entryTitleArray: [],
  entryContentsArray: [],
  entryCategoryArray: [],
  entryDateArray: [],
  entryCurrentTime: [],
  entryHourTime: [],

  categoryArray: [],
  categoryColorArray: [],

  deleteEntryTitleArray: [],
  deleteEntryContentsArray: [],
  deleteEntryCategoryArray: [],
  deleteEntryDateArray: [],
  deleteEntryCurrentTime: [],
  deleteEntryHourTime: [],
}

// Tworzenie nowych zadań
let numberDeleted = 0;
const creationNewEntry = (contents, title, entryCategory, entryDateValue, deleteEntry, hour, givenTime) => {
  const entry = document.createElement('div');
  document.querySelector('.main-content-entry').appendChild(entry);
  entry.className = "entry";

  const entryTop = document.createElement('div');
  entry.appendChild(entryTop);
  entryTop.className = "entry-top";

  const entryTopH2 = document.createElement('h2');
  entryTop.appendChild(entryTopH2);
  entryTopH2.textContent = title; 

  const entryTopRightButtons = document.createElement('div');
  entryTop.appendChild(entryTopRightButtons);
  entryTopRightButtons.className = "entry-top-right-buttons";

  const entryBottom = document.createElement('div');
  entry.appendChild(entryBottom);
  entryBottom.className = "entry-bottom";

  const entryBottomTextP = document.createElement('p');
  entryBottom.appendChild(entryBottomTextP);
  entryBottomTextP.textContent = contents; 

  const entryBottomContainer = document.createElement('div');
  entry.appendChild(entryBottomContainer);
  entryBottomContainer.className = "entry-bottom-container";

  const entryLeftBox = document.createElement('div');
  entryBottomContainer.appendChild(entryLeftBox);
  entryLeftBox.className = "entry-bottom-left";

  const entryLeftCategory = document.createElement('h3');
  entryLeftBox.appendChild(entryLeftCategory);
  entryLeftCategory.className = "entry-left-category";
  entryLeftCategory.textContent = entryCategory; 

  const entryLeftDate = document.createElement('h4');
  entryLeftBox.appendChild(entryLeftDate);
  entryLeftDate.className = "entry-left-date";

  if (entryDateValue) {
    entryLeftDate.textContent = "do " + entryDateValue; 
  }   
  else {
    entryLeftDate.textContent = entryDateValue;
  }                                                            

  const entryLeftHour = document.createElement('h4');
  entryLeftBox.appendChild(entryLeftHour);
  entryLeftHour.className = "entry-left-hour";
  entryLeftHour.textContent = givenTime;

  const entryBottomRight = document.createElement('div');
  entryBottomContainer.appendChild(entryBottomRight);
  entryBottomRight.className = "entry-bottom-right";

  const info = document.createElement('button');
  entryBottomRight.appendChild(info);
  info.className = "info-entry";

  const infoIcon = document.createElement('span');
  info.appendChild(infoIcon);
  infoIcon.className = "fas fa-info";

  const infoBox = document.createElement('div');
  info.appendChild(infoBox);
  infoBox.className = "information";
  infoBox.textContent = "Czas utworzenia wpisu " + hour;

  const removeEntryButton = document.createElement('button');
  entryBottomRight.appendChild(removeEntryButton);
  removeEntryButton.className = "remove-entry"; 

  const removeIcon = document.createElement('span');
  removeEntryButton.appendChild(removeIcon);
  removeIcon.className = "fas fa-trash";

  const doneEntry = document.createElement('button');
  entryBottomRight.appendChild(doneEntry);
  doneEntry.className = "done-entry";

  const doneIcon = document.createElement('span');
  doneEntry.appendChild(doneIcon);
  doneIcon.className = "fas fa-check";

  const editEntry = document.createElement('button');
  entryBottomRight.appendChild(editEntry);
  editEntry.className = "edit-entry";

  const editIcon = document.createElement('span');
  editEntry.appendChild(editIcon);
  editIcon.className = "fas fa-pencil-alt";

  const whatIndexColors = taskValues.categoryArray.indexOf(entryCategory);

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
    entryLeftCategory.style.color = taskValues.categoryColorArray[whatIndexColors];
    entryTopH2.style.borderLeft = `4px solid ${taskValues.categoryColorArray[whatIndexColors]}`;
  }
  // ------------------------------------------------------------

  // Hover panelu informacji
  info.addEventListener('mouseover', function () {
    infoBox.classList = "information-active";
  })

  info.addEventListener('mouseout', function () {
    infoBox.classList.toggle('information');
  })
  // --------------------------------------

  // Górny panel kategori "Usunięte"
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
    topPanelText.textContent = "Przywróć do";

    const selectRestore = document.createElement('select');
    topPanelContainer.appendChild(selectRestore);
    selectRestore.className = "select-restore";
    selectRestore.dataset.value = numberDeleted;

    const buttonConfrim = document.createElement('button');
    topPanelContainer.appendChild(buttonConfrim);
    buttonConfrim.className = "button-confirm";
    buttonConfrim.textContent = "Zapisz";
    buttonConfrim.dataset.value = numberDeleted;

    const selectOption0 = document.createElement('option');
    selectRestore.appendChild(selectOption0);
    selectOption0.className = "deleted-option";
    selectOption0.textContent = "Usuń na zawsze";

    const selectOption = document.createElement('option');
    selectRestore.appendChild(selectOption);
    selectOption.className = "deleted-option";
    selectOption.textContent = "Do zrobienia";

    const selectOption1 = document.createElement('option');
    selectRestore.appendChild(selectOption1);
    selectOption1.className = "deleted-option";
    selectOption1.textContent = "Ważne";

    const selectOption2 = document.createElement('option');
    selectRestore.appendChild(selectOption2);
    selectOption2.className = "deleted-option";
    selectOption2.textContent = "Notatki";

    taskValues.categoryArray.forEach(item => {
      const selectOptionCategory = document.createElement('option');
      selectRestore.appendChild(selectOptionCategory);
      selectOptionCategory.className = "deleted-option";
      selectOptionCategory.textContent = item;
    })
    removeEntryButton.remove();
    doneEntry.remove();
    editEntry.remove();

    // Funkcja przywracania usuniętych wpisów
    const restoreDeletedEntries = (e) => {
      document.querySelectorAll('.entry').forEach(item => {
        item.remove();
      })
      let indexDelete = taskValues.deleteEntryCurrentTime.indexOf(hour);

      if (selectRestore.value == "Usuń na zawsze") {
        taskValues.deleteEntryTitleArray.splice(indexDelete, 1);
        taskValues.deleteEntryContentsArray.splice(indexDelete, 1);
        taskValues.deleteEntryCategoryArray.splice(indexDelete, 1);
        taskValues.deleteEntryDateArray.splice(indexDelete, 1);
        taskValues.deleteEntryCurrentTime.splice(indexDelete, 1);
        taskValues.deleteEntryHourTime.splice(indexDelete, 1);
      }
      else {
        taskValues.entryTitleArray.push(taskValues.deleteEntryTitleArray[indexDelete]);
        taskValues.entryContentsArray.push(taskValues.deleteEntryContentsArray[indexDelete]);
        taskValues.entryCategoryArray.push(selectRestore.value);
        taskValues.entryDateArray.push(taskValues.deleteEntryDateArray[indexDelete]);
        taskValues.entryCurrentTime.push(taskValues.deleteEntryCurrentTime[indexDelete]);
        taskValues.entryHourTime.push(taskValues.deleteEntryHourTime[indexDelete]);
  
        taskValues.deleteEntryTitleArray.splice(indexDelete, 1);
        taskValues.deleteEntryContentsArray.splice(indexDelete, 1);
        taskValues.deleteEntryCategoryArray.splice(indexDelete, 1);
        taskValues.deleteEntryDateArray.splice(indexDelete, 1);
        taskValues.deleteEntryCurrentTime.splice(indexDelete, 1);
        taskValues.deleteEntryHourTime.splice(indexDelete, 1);
      }
      
      taskValues.deleteEntryCurrentTime.forEach((item, i) => {
          creationNewEntry(taskValues.deleteEntryContentsArray[i], taskValues.deleteEntryTitleArray[i], taskValues.deleteEntryCategoryArray[i], taskValues.deleteEntryDateArray[i], "Usunięte", taskValues.deleteEntryCurrentTime[i], taskValues.deleteEntryHourTime[i]);
      });
      messageActive(); 
      deletingAllSubCategories(); 
      subCategoryFunction();
      mainTitleReload();
      deletedElementsCounter();
      counterNumber();
      savingTasks();
    }
    messageActive();
    counterNumber();
    buttonConfrim.addEventListener('click', restoreDeletedEntries);
    // --------------------------------------------------------------------------
  }

  // Funkcja do zmiany wpisów do kategori "Zrobione"
  const changeToDone = (e) => {
    taskValues.entryCategoryArray[taskValues.entryCurrentTime.indexOf(hour)] = "Zrobione";
    counterNumber();
    deletingAllEntries();
    creatingAllEntries(); 
    refreshCategories(); 
    reloadMainTitleSelection(); 
    savingTasks();
   }
  doneEntry.addEventListener('click', changeToDone);

  // Funkcja do usuwania poszczególnych wpisów
  const removeIndividualEntry = (e) => {
    let deleteByIndex = taskValues.entryTitleArray.indexOf(title);

    if (taskValues.entryTitleArray.indexOf(title) >= 0) {
      taskValues.deleteEntryTitleArray.push(title);
      taskValues.deleteEntryContentsArray.push(contents);
      taskValues.deleteEntryCategoryArray.push("Usunięte");
      taskValues.deleteEntryDateArray.push(entryDateValue);
      taskValues.deleteEntryCurrentTime.push(hour);
      taskValues.deleteEntryHourTime.push(givenTime);

      taskValues.entryTitleArray.splice(deleteByIndex, 1);
      taskValues.entryContentsArray.splice(deleteByIndex, 1);
      taskValues.entryCategoryArray.splice(deleteByIndex, 1);
      taskValues.entryDateArray.splice(deleteByIndex, 1);
      taskValues.entryCurrentTime.splice(deleteByIndex, 1);
      taskValues.entryHourTime.splice(deleteByIndex, 1);

      entry.remove(entry.dataset.value);
      messageActive();
      counterNumber();
      refreshCategories();
      deletedElementsCounter();
      savingTasks();
      deletingAllEntries();
      creatingAllEntries(); 
      reloadMainTitleSelection();
    }
  }
  // ----------------------------------------
  removeEntryButton.addEventListener('click', removeIndividualEntry);

  // Funkcja do edycji zadań 
  const editEntryOpenMenu = (e) => {
    taskEditing(taskValues.entryCurrentTime.indexOf(hour));
    openingClosingTheMenu();
  }

  editEntry.addEventListener('click', editEntryOpenMenu);
  // ------------------------------------------------
}
//  --------------------------------------------

// Funkcja do usuwania wszystkich zadań
const deletingAllEntries = () => {
  document.querySelectorAll('.entry').forEach(item => {
    item.remove();
  })
}
// --------------------------------------------

const emptyMessage = document.querySelector(".empty-entry-message-active");

// Funkcja aktywacji wiadomości, pokazuje czy kategoria jest pusta 
const messageActive = () => {
  const entryMessage = document.querySelectorAll('.entry');
  if (!entryMessage.length < 1) {
    emptyMessage.className = "empty-entry-message";
  } 
  else {
    emptyMessage.className = "empty-entry-message-active";
  }
}
// ---------------------------------------------------------------------

// Funkcja do tworzenia wszystkich zadań
const creatingAllEntries = () => {
  deletingAllEntries();
  taskValues.entryTitleArray.forEach((item, i) => {
    creationNewEntry(taskValues.entryContentsArray[i], taskValues.entryTitleArray[i], taskValues.entryCategoryArray[i], taskValues.entryDateArray[i], " ", taskValues.entryCurrentTime[i], taskValues.entryHourTime[i]);
  });
  messageActive();
}
document.querySelector('.all-button').addEventListener('click', creatingAllEntries);
// --------------------------------------

// Komunikat w panelu podczas tworzenia nowego zadania
const mess = document.querySelector('.mess');

const error = () => {
  mess.textContent = "";
}

let minute = setInterval(error, 4000);
// -------------------------------------

// Komunikat w panelu podczas tworzenia nowej kategori
const messCategory = document.querySelector('.error-category');

const errorCategory = () => {
  messCategory.textContent = "";
}
setInterval(errorCategory, 4000);
// -------------------------------------

// Przycisk do dodawania nowych wpisów 
const addEntryButton = document.querySelector('.add-new');

const addEntryButtonFunction = () => {
  const entryContents = document.querySelector('.text-area').value; 
  const entryTitle = document.querySelector('.entry-title').value; 
  const EntryCategory = document.querySelector('.select').value; 
  const entryDate = document.querySelector('.entry-date').value;
  const entryHourValue = document.querySelector('.entry-hour').value;
  const currentTime = new Date();
  if (entryTitle.length < 1) {
    mess.textContent = "Tytuł nie może być pusty";
  }
  else if (taskValues.entryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł już istnieje";
  }
  else if (taskValues.deleteEntryTitleArray.includes(entryTitle)) {
    mess.textContent = "Taki tytuł został wcześniej usunięty";
  }
  else {
    creationNewEntry(entryContents, entryTitle, EntryCategory, entryDate, "nothing" , currentTime, entryHourValue);
    taskValues.entryContentsArray.push(entryContents);
    taskValues.entryTitleArray.push(entryTitle);
    taskValues.entryCategoryArray.push(EntryCategory);
    taskValues.entryDateArray.push(entryDate);
    taskValues.entryCurrentTime.push(currentTime);
    taskValues.entryHourTime.push(entryHourValue);
    newEntryOpenBox();
    messageActive();
    deletingAllSubCategories(); 
    subCategoryFunction();
    counterNumber();
    deletingAllEntries(); 
    creatingAllEntries();
    refreshCategories();
    mainTitleSelectionFunction();
    reloadMainTitleSelection(); 
    document.querySelector('.text-area').value = null;
    document.querySelector('.entry-title').value = null;
    document.querySelector('.entry-date').value = null;
    document.querySelector('.entry-hour').value = null;
    savingTasks();
  }
  addEntryButton.style.background = "#1C8AF5";
}
addEntryButton.addEventListener('click', addEntryButtonFunction);
// -------------------------------------------

// Usuwanie wszystkich selectów przy dodawaniu nowego wpisu
const removeAllSelectCategory = () => {
  const selectValue = document.querySelectorAll('.select > option');
  for (let i = 3; i < selectValue.length; i++) {
    selectValue[i].remove();
  }
}

// Dodawanie nowego selecta przy tworzeniu nowego wpisu po zrobieniu nowej kategori 
const addNewSelectCategory = () => {
  removeAllSelectCategory();
  taskValues.categoryArray.forEach(item => {
    const newSelect = document.createElement('option');
    document.querySelector('.select').appendChild(newSelect);
    newSelect.className = "option";
    newSelect.value = item;
    newSelect.textContent = item;
  })
}

// Odświeżanie kategori
const refreshCategories = () => {
  deletingAllSubCategories(); // usuwanie wszystkich kategori.
  subCategoryFunction(); // tworzenie nowych kategori
}
// ----------------------------------------

// Funkcja do tworzenia nowej kategori

const createNewCategory = (nameCategoryArg, colorCategory) => {
  const cyclic = document.createElement('div');
  document.querySelector('.to-do-list-category').appendChild(cyclic);
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
  cyclicH2.textContent = nameCategoryArg
  cyclicH2.dataset.category = nameCategoryArg;
  cyclicH2.style.color = colorCategory

  const cyclicDelete = document.createElement('span');
  cyclicText.appendChild(cyclicDelete);
  cyclicDelete.className = "far fa-trash-alt cyclicDelete";

  const cyclicList = document.createElement('div');
  cyclicContainer.appendChild(cyclicList);
  cyclicList.className = "cyclic-list main-list";
  cyclicList.dataset.subcategory = nameCategoryArg;

  const emptyCategory = document.createElement('h4');
  cyclicList.appendChild(emptyCategory);
  emptyCategory.className = "Empty-sub-category";
  emptyCategory.textContent = "Pusta kategoria";

  // Funkcja do usuwania poszczególnych kategorii
  const deletingACategory = () => {
    document.querySelectorAll('.deletingCategory').forEach(item => {
      item.remove();
    })

    const deleteBox = document.createElement('div');
    cyclicList.prepend(deleteBox);
    deleteBox.className = "deletingCategory";
    deleteBox.textContent = `Czy napewno chcesz usunąć listę o nazwie "${nameCategoryArg}"? Cała zawartość tej listy zostanie usunięta.`;

    const deleteContainer = document.createElement('div');
    deleteBox.appendChild(deleteContainer);
    deleteContainer.className = "delete-container";

    const deleteCancelButton = document.createElement('button');
    deleteContainer.appendChild(deleteCancelButton);
    deleteCancelButton.className = "delete-cancel-button";
    deleteCancelButton.textContent = "Anuluj";

    const cancelDelete = () => {
      if (deleteBox) {
        deleteBox.remove();
      }
    }

    deleteCancelButton.addEventListener('click', cancelDelete);

    const deleteConfirmButton = document.createElement('button');
    deleteContainer.appendChild(deleteConfirmButton);
    deleteConfirmButton.className = "delete-confirm-button";
    deleteConfirmButton.textContent = "Usuń";

    const confirmDelete = () => {
      let indexDelete = taskValues.categoryArray.indexOf(nameCategoryArg);
      taskValues.categoryArray.splice(indexDelete, 1); 
      taskValues.categoryColorArray.splice(indexDelete, 1);

      let indexes = taskValues.entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});

      if (indexes[nameCategoryArg]) {
        indexes[nameCategoryArg].forEach(item => {
          let indexToDelete = taskValues.entryCategoryArray.indexOf(nameCategoryArg);
  
          taskValues.deleteEntryTitleArray.push(taskValues.entryTitleArray[indexToDelete]);
          taskValues.deleteEntryContentsArray.push(taskValues.entryContentsArray[indexToDelete]);
          taskValues.deleteEntryCategoryArray.push("Usunięte");
          taskValues.deleteEntryDateArray.push(taskValues.entryDateArray[indexToDelete]);
          taskValues.deleteEntryCurrentTime.push(taskValues.entryCurrentTime[indexToDelete]);
          taskValues.deleteEntryHourTime.push(taskValues.entryHourTime[indexToDelete]);
  
          taskValues.entryTitleArray.splice(indexToDelete, 1);
          taskValues.entryContentsArray.splice(indexToDelete, 1);
          taskValues.entryCategoryArray.splice(indexToDelete, 1);
          taskValues.entryDateArray.splice(indexToDelete, 1);
          taskValues.entryCurrentTime.splice(indexToDelete, 1);
          taskValues.entryHourTime.splice(indexToDelete, 1)
        })
      }
      savingTasks();
      reloadScript();
      cancelDelete();
      addNewSelectCategoryEdit();
    }
    deleteConfirmButton.addEventListener('click', confirmDelete);
  }
  cyclicDelete.addEventListener('click', deletingACategory);
  // -------------------------------------------------------------
}
//  -------------------------------------

// Tworzenie i dodawanie do kategorii
const mainCategoryFunction = () => {
  deletingAllEntries(); 
  mainTitleReload(); 
  let nameCategory = event.target.textContent;
  
  mainTitleSelectionFunction();

  let indexes = taskValues.entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});

  if (!indexes[nameCategory]) {
    messageActive();
  }
  else {
    indexes[nameCategory].forEach((item, i) => {
      creationNewEntry(taskValues.entryContentsArray[indexes[nameCategory][i]], taskValues.entryTitleArray[indexes[nameCategory][i]], taskValues.entryCategoryArray[indexes[nameCategory][i]], taskValues.entryDateArray[indexes[nameCategory][i]], " ", taskValues.entryCurrentTime[indexes[nameCategory][i]], taskValues.entryHourTime[indexes[nameCategory][i]]);
      messageActive();
    });
  }
    // ----------------------------------------------
}

const mainTitleReload = () => {
  const mainTitle = document.querySelectorAll(".to-do-main-title").forEach(item => item.addEventListener('click', mainCategoryFunction));

  document.querySelectorAll('.by-the-time-content').forEach(item => {
    item.style.background = null;
  })
}
mainTitleReload(); 

const toOoMainTitle = document.querySelectorAll('.to-do-main-title');
// -----------------------------------

// Usuwanie wszystkich subkategorii
const deletingAllSubCategories = () => {  
  document.querySelectorAll('#subCategory').forEach(item => {
    item.remove();
  })
}
// ----------------------------------

// Dodawanie napisu pustych kategori
const createEmptySubCategory = (index) => {
  const emptySubCategory = document.createElement('h4');
  document.querySelectorAll('.main-list')[index].appendChild(emptySubCategory);
  emptySubCategory.className = "Empty-sub-category";
  emptySubCategory.textContent = "Pusta kategoria";
}

// Usuwanie informacji o pustej kategorii
const deleteEmptySubCategory = () => {
  document.querySelectorAll('.Empty-sub-category').forEach(item => {
    item.remove();
  })
}
// ------------------------------------------------------

// Tworzenie subkategorii
const createSubCategoryFunction = (index, indexSubCategorie, amount) => { 
  for (let i = 0; i < amount; i++) {
    const createSubCategory = document.createElement('h3');
    document.querySelectorAll('.main-list')[index].appendChild(createSubCategory);
    createSubCategory.id = "subCategory";
    createSubCategory.className = "selection";
    createSubCategory.dataset.subCategory = taskValues.entryTitleArray[indexSubCategorie[i]];
    if(taskValues.entryTitleArray[indexSubCategorie[i]].length > 19) {
      createSubCategory.textContent = taskValues.entryTitleArray[indexSubCategorie[i]].slice(0,19) + "...";
    }
    else {
      createSubCategory.textContent = taskValues.entryTitleArray[indexSubCategorie[i]].slice(0,19);
    }
    createSubCategory.dataset.category = taskValues.entryCategoryArray[indexSubCategorie[i]];
  }
  checkSubCategory()
} 
// ----------------------------------

// Przechodzenie pomiędzy subkategoriami
const subCategoryClickFunction = () => {
  const indexSubCategoryValue = taskValues.entryTitleArray.indexOf(event.target.dataset.subCategory);
  mainTitleSelectionFunction();
  deletingAllEntries();
  creationNewEntry(taskValues.entryContentsArray[indexSubCategoryValue], taskValues.entryTitleArray[indexSubCategoryValue], taskValues.entryCategoryArray[indexSubCategoryValue], taskValues.entryDateArray[indexSubCategoryValue], "nothing", taskValues.entryCurrentTime[indexSubCategoryValue], taskValues.entryHourTime[indexSubCategoryValue]);
  messageActive();
  menuCloseFunction();

  document.querySelectorAll('.by-the-time-content').forEach(item => {
    item.style.background = null;
  })
}

const checkSubCategory = () => {
  document.querySelectorAll("#subCategory").forEach(item => item.addEventListener('click', subCategoryClickFunction));
}
// ---------------------------------------------------

// Subkategorie
let numberSubCategory = -1;
const subCategoryFunction = () => {   
  let indexes = taskValues.entryCategoryArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});
  let amount = 0;
  deleteEmptySubCategory();
  document.querySelectorAll('.main-list').forEach(item => {
    let subCategoryList = item.dataset.subcategory;
    numberSubCategory++

    if (!indexes[subCategoryList]) {
      createEmptySubCategory(numberSubCategory);
    }
    else {
      amount = indexes[subCategoryList].length;
    }

    createSubCategoryFunction(numberSubCategory, indexes[subCategoryList], amount);
    amount = 0;
  })
numberSubCategory = -1;
}
// ------------------------------------------------------------

// Licznik zadań
const counterNumber = () => {
  document.querySelector('#number-entry').textContent = "Aktualnych wpisów: " + taskValues.entryTitleArray.length;
}
// ----------------------------------------------------------

// Funkcja do usuwania wszystkich kategorii dodanych przez użytkownika
const deleteAllCategories = () => {
  document.querySelectorAll('.cyclic').forEach(item => {
    item.remove();
  })
}
// ------------------------------------------

// Funkcja do tworzenia wszystkich kategorii dodanych przez użytkownika z tablicy
const creatingAllCategory = () => {
  taskValues.categoryArray.forEach((item, i) => {
    createNewCategory(taskValues.categoryArray[i], taskValues.categoryColorArray[i]);
  })
}

// Wybór koloru przy tworzeniu kategorii
const categoryColorsFunction = () => {
  document.querySelector('.category-title').style.color = event.target.dataset.color;
}
document.querySelectorAll(".category-circle").forEach(item => item.addEventListener('click', categoryColorsFunction));

// Funkcja tworzenia nowej kategorii użytkownika
const addNewCategory = document.querySelector('.category-add');
const categoryError = document.querySelector('.error-category');

const createNewCategoryFunction = () => {
  const createNameCategoryValue = document.querySelector('.category-title').value;
  const createCategoryColor = document.querySelector('.category-title');
  if (createCategoryColor.style.color == "black") {
    messCategory.textContent = "Musisz wybrać kolor kategori";
  }
  else if (taskValues.categoryArray.includes(createNameCategoryValue)) {
    messCategory.textContent = "Taka kategoria już istnieje";
  }
  else if (createNameCategoryValue.length >= 1) {
    taskValues.categoryArray.push(createNameCategoryValue);
    taskValues.categoryColorArray.push(createCategoryColor.style.color);
    deleteAllCategories(); 
    creatingAllCategory(); 
    deletingAllSubCategories(); 
    subCategoryFunction();
    addNewSelectCategory();
    closeCreateCategory(); 
    mainTitleReload(); 
    savingTasks();
    document.querySelector('.category-title').value = null;
  }
  else {
    messCategory.textContent = "Nazwa kategori nie może być pusta";
  }
  addNewSelectCategory();
  addNewCategory.style.background = "#1C8AF5";
  addNewSelectCategoryEdit();
}
addNewCategory.addEventListener('click', createNewCategoryFunction);

// licznik usuniętych zadań
const deletedElementsCounter = () => {
  document.querySelector('.deleted-list-h4').textContent = " Usuniętych zadań " + taskValues.deleteEntryContentsArray.length;
}
// ----------------------------------------------------------

// Kategoria "Usunięte"
const deletedTextFunction = () => {
  deletingAllEntries();
  messageActive();
  const messageActiveDelete = document.querySelector('.empty-entry-message-active');
  taskValues.deleteEntryTitleArray.forEach((item, i) => {
    creationNewEntry(taskValues.deleteEntryContentsArray[i], taskValues.deleteEntryTitleArray[i], taskValues.deleteEntryCategoryArray[i], taskValues.deleteEntryDateArray[i], "Usunięte", taskValues.deleteEntryCurrentTime[i], taskValues.deleteEntryHourTime[i]);
  })
  if (taskValues.deleteEntryTitleArray.length >= 1) {
    messageActiveDelete.className = "empty-entry-message";
  } 
  else {
    messageActiveDelete.className = "empty-entry-message-active";
  }
}
document.querySelector('.deleted-text').addEventListener('click', deletedTextFunction);
document.querySelector('.deleted-list-h3-see').addEventListener('click', deletedTextFunction);
// ---------------------------------------------------------------------------

// Zaznaczenie kategori
const whatCategory = document.querySelector('.top-header-title');
const mainTitleSelectionFunction = () => {
  reloadMainTitleSelection();
  document.querySelectorAll('.selection').forEach(item => {
    item.style.background = "none";
  })
  event.target.style.background = "rgb(243, 243, 243)";
  whatCategory.textContent = "Wszystko";
  whatCategory.textContent = event.target.dataset.category;

  if (whatCategory.textContent == "") {
    whatCategory.textContent = "Wszystko";
  }
}

const reloadMainTitleSelection = () => {
  const whatCategory = document.querySelector('.top-header-title');
  const howMuchSelection = document.querySelectorAll('.selection');
  howMuchSelection.forEach(item => {
    item.style.background = "none";
  })
  howMuchSelection[0].style.background = "rgb(243, 243, 243)";

  whatCategory.textContent = "Wszystko";

  document.querySelectorAll('.by-the-time-content').forEach(item => {
    item.style.background = null;
  })

  document.querySelectorAll(".selection").forEach(item => item.addEventListener('click', mainTitleSelectionFunction));
}
reloadMainTitleSelection();
// ----------------------------------------------------------------------------

// Zamykanie okna menu z róznymi rozdzielczościami
const menuCloseFunction = () => {
  if (window.innerWidth < 725) {
    menuOpenCloseFunction();
  }
}
document.querySelectorAll(".selection").forEach(item => item.addEventListener('click', menuCloseFunction));
// --------------------------------------------------

// Pokazywanie zadania z wyszukiwarki
const showTheTask = (index) => {
    deletingAllEntries();
    if (index >= 0){
      creationNewEntry(taskValues.entryContentsArray[index], taskValues.entryTitleArray[index], taskValues.entryCategoryArray[index], taskValues.entryDateArray[index], "nothing", taskValues.entryCurrentTime[index], taskValues.entryHourTime[index]);
      whatCategory.textContent = taskValues.entryCategoryArray[index];
    }
    messageActive();
}
// ---------------------------------------------------------------------

// Wyszkiwarka zadań
const itemsContainer = document.querySelector('.sophisticated-items-container');

const searchElements = () => {
  const searchInputValue = document.querySelector('.search-input').value;
  const allItemsContainer = document.querySelectorAll('.sophisticated-items');
  const emptySearch = document.querySelectorAll('.empty-search');

  allItemsContainer.forEach((item, i) => {
    allItemsContainer[i].remove();
    document.querySelectorAll('.search-category')[i].remove();
  })

  emptySearch.forEach((item, i) => {
    emptySearch[i].remove();
  })

  if (!searchInputValue == "") {
    if (!taskValues.entryTitleArray.find( (item) => item.includes(searchInputValue)) == "") {
      let result = taskValues.entryTitleArray.find( (item) => item.startsWith(searchInputValue));
      const searchItemsContainer = document.createElement('div');
      itemsContainer.appendChild(searchItemsContainer);
      searchItemsContainer.className="sophisticated-items";
      searchItemsContainer.dataset.category = taskValues.entryCategoryArray[taskValues.entryTitleArray.indexOf(result)];
      const searchCategory = document.createElement('h4');
      itemsContainer.appendChild(searchCategory);
      searchCategory.className = "search-category";
      searchCategory.textContent = taskValues.entryCategoryArray[taskValues.entryTitleArray.indexOf(result)];

      if (taskValues.entryTitleArray.find( (item) => item.includes(searchInputValue)).length > 1) {
        showTheTask(taskValues.entryTitleArray.indexOf(result));
      }
      searchItemsContainer.textContent = result;
    }

    if (allItemsContainer.length < 1) {
      const createEmptyItem = document.createElement('h4');
      itemsContainer.appendChild(createEmptyItem);
      createEmptyItem.className = "empty-search";
      createEmptyItem.textContent = "Nie znaleziono takiego zadania";
      reloadScript(); 
    }
  }
  if (searchInputValue.length == 0) {
    reloadScript();
  }
}
document.querySelector('.search-input').addEventListener('keyup', searchElements);
// ---------------------------------------------------------------

// Kategorie przy edycji zadania
const removeAllSelectCategoryEdit = () => {
  const selectValue = document.querySelectorAll('.edit-select > option');
  for (let i = 4; i < selectValue.length; i++) {
    selectValue[i].remove();
  }
}

// Dodawanie nowego selecta przy tworzeniu nowego wpisu po zrobieniu nowej kategori 
const addNewSelectCategoryEdit = () => {
  removeAllSelectCategoryEdit();
  taskValues.categoryArray.forEach(item => {
    const newSelect = document.createElement('option');
    document.querySelector('.edit-select').appendChild(newSelect);
    newSelect.className = "option";
    newSelect.value = item;
    newSelect.textContent = item;
  })
}
// -------------------------------------------------------------------

// Edycja zadań 
const taskEditing = (index) => {
  indexTwo = index;
  const menuEdit = document.querySelector('#menuEdit');

  menuEdit.className = "edit-active";

  document.querySelector('.edit-task').textContent = taskValues.entryTitleArray[index];
  document.querySelector('.edit-title').value = taskValues.entryTitleArray[index];
  document.querySelector('.edit-select').value = taskValues.entryCategoryArray[index];
  document.querySelector('.edit-date').value = taskValues.entryDateArray[index];
  document.querySelector('.edit-hour').value = taskValues.entryHourTime[index];
  document.querySelector('.edit-contents').value = taskValues.entryContentsArray[index];
} 
// ----------------------------------------------

const menuEditClose = () => {
  menuEdit.className = "menu-edit";
}
document.querySelectorAll(".edit-cancel").forEach(item => item.addEventListener('click', menuEditClose));

const menuSave = () => {
  taskValues.entryTitleArray[indexTwo] = document.querySelector('.edit-title').value;
  taskValues.entryContentsArray[indexTwo] = document.querySelector('.edit-contents').value;
  taskValues.entryCategoryArray[indexTwo] = document.querySelector('.edit-select').value;
  taskValues.entryDateArray[indexTwo] = document.querySelector('.edit-date').value;
  taskValues.entryHourTime[indexTwo] = document.querySelector('.edit-hour').value;
  savingTasks();
  reloadScript();
  menuEditClose();
}
document.querySelector('.edit-save').addEventListener('click', menuSave);
// ------------------------------------------------------------- 

const openingClosingTheMenu = () => {
  if (document.querySelector('#overflow').className == "nav-active") {
    menuCloseFunction();
  }
}
// -------------------------------------------------------------

// Kategoria "Do czasu"
const categoryTimeSwitching = () => {
  deletingAllEntries();
  activeTimeButton();
  whatCategory.textContent = event.target.dataset.timecategory
  let indexes = taskValues.entryDateArray.reduce(function(a,e,i){try{a[e].push(i)}catch(_){a[e]=[i]};return a},{});
  let currentDate = new Date;
  let monthDate, dayDate

  if ((1 + currentDate.getMonth()) > 9) {
    monthDate = (1 + currentDate.getMonth());
  }
  else {
    monthDate = "0" + (1 + currentDate.getMonth());
  }
  if (currentDate.getDate() > 9) {
    dayDate = currentDate.getDate();
  }
  else {
    dayDate = "0" + currentDate.getDate();
  }

  let actualDate = currentDate.getFullYear() + "-" + monthDate + "-" + dayDate;
  if (event.target.dataset.timecategory == "Na dzisiaj") {
    deletingAllEntries();
      if (indexes[actualDate]) {
        indexes[actualDate].forEach(item => {
          creationNewEntry(taskValues.entryContentsArray[item], taskValues.entryTitleArray[item], taskValues.entryCategoryArray[item], taskValues.entryDateArray[item], " ", taskValues.entryCurrentTime[item], taskValues.entryHourTime[item]);
        })
      }
  }
  messageActive();
}
document.querySelectorAll('.by-the-time-content').forEach(item => item.addEventListener('click', categoryTimeSwitching));

const activeTimeButton = () => {
  document.querySelectorAll('.by-the-time-content').forEach(item => {
    item.style.background = null;
  })
  event.target.style.background = "rgb(243, 243, 243)";

  document.querySelectorAll('.selection').forEach(item => {
    item.style.background = null;
  })
}
// ------------------------------------------------------------

const savingTasks = () => {
  localStorage.removeItem("tasksValues");
  localStorage.setItem("tasksValues", JSON.stringify(taskValues));
}

const loadingDataFromMemory = () => {
  let storageValues = JSON.parse(localStorage.getItem("tasksValues"));

  taskValues.entryTitleArray = storageValues.entryTitleArray
  taskValues.entryContentsArray = storageValues.entryContentsArray
  taskValues.entryCategoryArray = storageValues.entryCategoryArray
  taskValues.entryDateArray = storageValues.entryDateArray
  taskValues.entryCurrentTime = storageValues.entryCurrentTime
  taskValues.entryHourTime = storageValues.entryHourTime

  taskValues.categoryArray = storageValues.categoryArray
  taskValues.categoryColorArray = storageValues.categoryColorArray

  taskValues.deleteEntryTitleArray = storageValues.deleteEntryTitleArray
  taskValues.deleteEntryContentsArray = storageValues.deleteEntryContentsArray
  taskValues.deleteEntryCategoryArray = storageValues.deleteEntryCategoryArray
  taskValues.deleteEntryDateArray = storageValues.deleteEntryDateArray
  taskValues.deleteEntryCurrentTime = storageValues.deleteEntryCurrentTime
  taskValues.deleteEntryHourTime = storageValues.deleteEntryHourTime
}

// odświeżanie
const reloadScript = () => {
  if (!window.localStorage.getItem("tasksValues")) {
    localStorage.setItem("tasksValues", JSON.stringify(taskValues));
}
  loadingDataFromMemory();

  messageActive(); // aktywacja komunikatu o wypełnieniu subkategori
  deleteAllCategories(); // usuwanie wszystkich kategori dodanych przez użytkownika.
  creatingAllCategory(); //tworzenie od nowa wszystkich kategori z listy
  deletingAllEntries(); // usuwanie wszystkich wpisów
  creatingAllEntries(); // Tworzenie wszystkich wpisów
  deletingAllSubCategories(); // usuwanie wszystkich podkategori
  subCategoryFunction(); // tworzenie od nowa wszystkich podkategori
  addNewSelectCategory(); // odświeżenie kategori w "Nowy wpis"
  mainTitleReload(); // refresh
  counterNumber(); // licznik wpisów
  deletedElementsCounter(); // licznik usuniętych wpisów
  reloadMainTitleSelection(); // Aktywacja przycisku (Wszystkie)
  addNewSelectCategoryEdit(); // reload kategorii w edycji
}
reloadScript();
// ------------------------------------------------------------------------------
