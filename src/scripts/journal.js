import API from "./data.js"
import renderDOM from "./entriesDOM.js"
import entryComponent from "./entryComponent.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


/* 

This code watches for when the "Record Journal Entry" button is pressed. Then, it looks at the values that were entered into the fields above and puts them in "newJournalEntry" as an object. Next, the new journal entry is passed to the sendNewJournalEntry function in data.js file. It returns JSON-ified entry, gets all the journal entries, and adds them to the DOM.

*/

document.querySelector("button").addEventListener("click", () => {
    const dateInput = document.querySelector("#dateInput").value;
    const conceptInput = document.querySelector("#conceptInput").value;
    const entryInput = document.querySelector("#entryInput").value;
    const moodInput = document.querySelector("#moodInput").value;
    const newJournalEntry = { //Puts the above values into "newJournalEntry" as an object
        "date": dateInput,
        "concept": conceptInput,
        "entry": entryInput,
        "mood": moodInput
    }
    API.sendNewJournalEntry(newJournalEntry) //runs function that post new entry
    .then(API.getJournalEntries).then(response => renderDOM.renderJournalEntries(response)) //Then gets all the journal entries, then puts 'em on the DOM
})

//Provides the initial display of data to the DOM
API.getJournalEntries().then(response => renderDOM.renderJournalEntries(response))
