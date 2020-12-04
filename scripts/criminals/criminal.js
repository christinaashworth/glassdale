export const Criminal = (criminal) => {
  return `
    <section class="criminal">
      <h2 class="criminal__name">${criminal.name}</h2>
        Age: ${criminal.age}
        Convicted crime: ${criminal.conviction}
        Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
        Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
    </section>
    `
}