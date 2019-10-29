import API from "./data.js"
import renderDOM from "./entriesDOM.js"
import entryComponent from "./entryComponent.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
.then(response => renderDOM.renderJournalEntries(response))
