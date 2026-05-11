var wordToSearch;
var buttonSearch;
var buttonToggle;
var textEditor;
var textDisplayer;
var isEditing = false;
var searchedText = "";

function editToggler(evt) {
    isEditing = !isEditing;
    if (isEditing == true) {
        textEditor.style.display = "block";
        textDisplayer.style.display = "none";
    }
    if (isEditing == false) {
        textEditor.style.display = "none";
        textDisplayer.style.display = "block";
    }
}

function textInputOnChance(evt) {
    let dictText = this.value;
    window.localStorage.setItem(searchedText, dictText);
    textDisplayer.innerHTML = dictText;
}

function search(evt) {
    searchedText = wordToSearch.value;
    textFound = window.localStorage.getItem(searchedText);
    if (textFound === null) {
        textDisplayer.innerHTML = "valoare negasita";
        textEditor.value = "";
    }
    if (textFound !== null) {
        textDisplayer.innerHTML = textFound;
        textEditor.value = textFound;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    wordToSearch = document.getElementById("word-to-search");
    buttonSearch = document.getElementById("btn-search");
    buttonToggle = document.getElementById("btn-togle");
    textEditor = document.getElementById("text-editor");
    textDisplayer = document.getElementById("text-displayer");
    textEditor.style.display = "none";
    textEditor.addEventListener('input', textInputOnChance);
    buttonToggle.addEventListener("click", editToggler);
    buttonSearch.addEventListener("click", search);
});
