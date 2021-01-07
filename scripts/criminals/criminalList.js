import { getCriminals, useCriminals } from './criminalDataProvider.js'
import { Criminal } from "./criminal.js"
import { useConvictions } from "../convictions/convictionProvider.js"
import { useOfficers } from "../officers/OfficerDataProvider.js"
import { getFacilities, useFacilities } from '../../facility/facilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../../facility/criminalFacilityProvider.js'

const contentTarget = document.querySelector(".criminal")
const eventHub = document.querySelector(".container")

let criminals = []
let facilities = []
let criminalFacilities = []

export const criminalList = () => {
  getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(
      () => {
      criminals = useCriminals()
      criminalFacilities = useCriminalFacilities()
      facilities = useFacilities()
      render(criminals, criminalFacilities, facilities)
  })
  }


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */

      const crimes = useConvictions()
      const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )
    
      const criminalsToFilter = criminals.slice()
      const matchingCriminals = criminalsToFilter.filter((criminal) => {
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
  
  const criminalsToFilter = criminals.slice()
  const matchingCriminals = criminalsToFilter.filter( (criminal) => {
          return criminal.arrestingOfficer === officer.name
      })
      render(matchingCriminals)
    }
  }
)

const render = (criminalList) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalList.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, matchingFacilities)
      }
  ).join("")
}