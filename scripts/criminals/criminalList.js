import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"
import { useOfficers } from "../officers/OfficerDataProvider.js"

const contentTarget = document.querySelector(".criminal")
const eventHub = document.querySelector(".container")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */

      const crimes = useConvictions()
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )
      
    
      const criminals = useCriminals()
      const matchingCriminals = criminals.filter( (criminal) => {
        return criminal.conviction === crime.name
      })
      render(matchingCriminals)
      }
})

eventHub.addEventListener("officerSelected", event => {
  // How can you access the officer name that was selected by the user?
  if (event.detail.selectedOfficer !== "0"){

  // How can you get the criminals that were arrested by that officer?
  const officers = useOfficers()
  const officer = officers.find( (officer) => officer.id === parseInt(event.detail.officer) )
  
  const criminals = useCriminals()
  const matchingCriminals = criminals.filter( (criminal) => {
          return criminal.arrestingOfficer === officer.name
      })
      render(matchingCriminals)
    }
  }
)

export const criminalList = () => {
  getCriminals().then( () => {
    let perps = useCriminals()
    render(perps)
  })
  }


const render = (criminals) => {
  let criminalCards = []
      for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
      }

      contentTarget.innerHTML = criminalCards.join("")
}