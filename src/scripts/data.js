/* 

The API variable has two objects that are functions (methods to that variable). 

"getJournalEntries" gets the entire list in the database (API).

"sendNewJournalEntry" adds the new journal entry to the database (API) and JSON-ifies it.

*/

const API =
  {
        getJournalEntries () {
            return fetch("http://localhost:3000/entries")
                .then(response => response.json())
        }, 

      sendNewJournalEntry (newJournalEntry) {
        return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
            body: JSON.stringify(newJournalEntry)
      })
    }
  }

export default API;
