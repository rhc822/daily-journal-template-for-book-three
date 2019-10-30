import API from "./data.js"
import renderDOM from "./entriesDOM.js"
import entryComponent from "./entryComponent.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

const dateInput = document.querySelector("#dateInput").value;
const conceptInput = document.querySelector("#conceptInput").value;
const entryInput = document.querySelector("#entryInput").value;
const moodInput = document.querySelector("#moodInput").value;

document.querySelector("button").addEventListener("click", () => { //Watches the button
    const createJournalEntry = function(date, concept, entry, mood) {
        return {
            "date": "`${createJournalEntry.date}"
        }
    debugger
})

// API.getJournalEntries()
// .then(response => renderDOM.renderJournalEntries(response))
