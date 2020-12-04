import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { Criminal } from "./criminal.js"

const eventHub = document.querySelector(".container")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('what custom event did you dispatch in ConvictionSelect?', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */
      const matchingCriminals = appStateCriminals.filter()

      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
  }
})

const render = criminalCollection => {
  for (const criminal of usedCriminals) {
    //         const criminalHTML = Criminal(criminal)
    //         contentElement.innerHTML += criminalHTML
  contentTarget.innerHTML = criminalHTML
}

// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals()
      .then(() => {
          const appStateCriminals = useCriminals()
          render(appStateCriminals)
      })
}

// export const criminalList = () => {
//   getCriminals().then(
//     () => {
//       const contentElement = document.querySelector(".criminalsContainer")
//       const usedCriminals = useCriminals()

//       for (const criminal of usedCriminals) {
//         const criminalHTML = Criminal(criminal)
//         contentElement.innerHTML += criminalHTML
//       }
//     }
//   )
// }