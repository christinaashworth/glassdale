import {saveNote} from "./noteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const author = document.querySelector("#author").value
    const text = document.querySelector("#note-text").value
    const suspect = document.querySelector("#suspect").value
      // Make a new object representation of a note
      const newNote = {
          author: author,
          text: text,
          suspect: suspect,
          timestamp: Date.now()
      }

      // Change API state and application state
      saveNote(newNote)
  }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="author">
        <textarea id="note-text" placeholder="enter note here"></textarea>
        <input type="text" id="suspect" placeholder="suspect name">
        <button type="button" id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

