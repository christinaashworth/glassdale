let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
      parsedConvictions => {
        convictions = parsedConvictions
      }
    )
}
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */