import { deleteNote } from "./noteProvider.js"

const eventHub = document.querySelector(".container")

export const NoteHTMLConverter = (noteObject) => {
  return `
      <section class="note">
          <div class="note__suspect">Suspect: ${ noteObject.criminalName }</div>
          <div class="note__text">${ noteObject.text }</div>
          <div class="note__author">Author: ${ noteObject.author }</div>
          <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
          <button id="deleteNote--${noteObject.id}">Delete</button>
      </section>
  `
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--")

      /*
          Invoke the function that performs the delete operation.

          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
     deleteNote(noteId)
  }
})