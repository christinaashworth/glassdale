
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {

  if (changeEvent.target.id === "officerSelect") {
      const selectedOfficer = changeEvent.target.value
      const customEvent = new CustomEvent("officerSelected", {
          detail: {
              officer: selectedOfficer
          }
      })

      // Dispatch to event hub
      eventHub.dispatchEvent(customEvent)
  }
})


export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers()
      .then(() => {
        const officers = useOfficers()
        render(officers)
      })
    
}

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(
                  officer => {
                    const officerListItem = officer.name
                    return `<option value="${officer.id}">${officerListItem}</option>`
                  })
              }
        </select>
    `
}