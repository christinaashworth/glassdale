export const Criminal = (criminal) => {
  return `
    <section class="criminal__info">
      <h2 class="criminal__name">${criminal.name}</h2>
        Age: ${criminal.age}
        Convicted crime: ${criminal.conviction}
        Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
        Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
        <button id="associates--${criminal.id}">Associate Alibis</button>
    </section>
    `
}

const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener("click", clickEvent => {
  const [splitID, sendOff] = clickEvent.target.id.split("--")
  if ("associates" === splitID) {
      const customEvent = new CustomEvent("alibiClicked", {
          detail: {
              criminalThatWasChosen: sendOff
          }

      })
      eventHub.dispatchEvent(customEvent)
  }
})