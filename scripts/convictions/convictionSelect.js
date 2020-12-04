
import { getConvictions, useConvictions } from "./convictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

  // Only do this if the `crimeSelect` element was changed
  if (event.target.id === "crimeSelect") {
      // Create custom event. Provide an appropriate name.
      const crimeChosen = new CustomEvent("crimeChosen", {
          detail: {
              crimeThatWasChosen: event.target.value
          }
      })

      // Dispatch to event hub
      eventHub.dispatchEvent(crimeChosen)
  }
})


export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
      .then(() => {
        const convictions = useConvictions()
        render(convictions)
      })
    
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(
                  conviction => {
                    const convictionListItem = conviction.name
                    return `<option value="${conviction.id}">${convictionListItem}</option>`
                  })
              }
        </select>
    `
}