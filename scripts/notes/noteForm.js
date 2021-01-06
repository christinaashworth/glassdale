import { saveNote } from "./noteProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const author = document.querySelector("#author").value
    const text = document.querySelector("#note-text").value
    const criminalId = parseInt(document.querySelector("#noteForm--criminal").value)
      // Make a new object representation of a note
      const newNote = {
          author: author,
          text: text,
          criminalId: criminalId,
          timestamp: Date.now()
      }

      // Change API state and application state
      saveNote(newNote)
  }
})

const render = (criminalsCollection) => {
  contentTarget.innerHTML = `
    <input type="text" id="author" placeholder="author">
    <textarea id="note-text" placeholder="enter note here"></textarea>
    <select id="noteForm--criminal" class="criminalSelect">
      <option value="0">Please select a suspect...</option>
        ${
          criminalsCollection.map(
              criminal => `<option value="${criminal.id}">${criminal.name}</option>`
            )
        }
    </select>
    <button type="button" id="saveNote">Save Note</button>
  `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
          const criminals = useCriminals()
          render(criminals)
        })
    
}

