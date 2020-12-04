import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */

      const crimes = useConvictions()
      console.log(crimes)
      console.log(event.detail)
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )
      
    
      const criminals = useCriminals()
      const matchingCriminals = criminals.filter( (criminal) => {
        return criminal.conviction === crime.name
      })
      render(matchingCriminals)
      }
})

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