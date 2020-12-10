import { useCriminals } from "./criminalDataProvider.js"
import { AlibiHTMLConverter } from "./alibi.js"

const contentTarget = document.querySelector(".associate__info")
const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener('alibiClicked', event => {
  if (event.detail.criminalThatWasChosen !== "0"){
      const criminals = useCriminals()
      const chosenCriminals = criminals.find( (criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen) )

      const associates = chosenCriminals.known_associates
      contentTarget.innerHTML = associates.map(associate => { return AlibiHTMLConverter(associate) }).join("")
}
}
)



