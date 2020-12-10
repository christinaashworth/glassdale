import { useWitnesses} from "./witnessDataProvider.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener('witnessButtonClicked', () => { 
  const witnesses = useWitnesses()
  render(witnesses) })

const render = (witnessArray) => {
  const witnessHTML = witnessArray.map(
      (witness) => {
        return `
        <section class="witnesses">
        <div class="witness__name">Name: ${witness.name}</div>
        <div class="witness__statement">Statement: ${witness.statements}</div>
        </section> `
      }
  ).join("")

  contentTarget.innerHTML = witnessHTML
}
