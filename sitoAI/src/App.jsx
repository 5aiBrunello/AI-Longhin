import Form from "./InputUtente"
import Risposta from "./ResponseContainer"
import "./App.css"
import { useState } from "react"

function App() {
  // const [dataForm, setDataForm] = useState({})
  const [aiResponse, setAIResponse] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isValidData, setIsValidData] = useState(true)

  async function onSubmit(e) {
    setIsFormSubmitted(false)

    e.preventDefault()

    const allData = Object.fromEntries(new FormData(e.target))

    await fetch(
      "http://localhost:8000/GetResponse?age=" +
        allData.age +
        "&cause=" +
        allData.cause +
        "&data_value=" +
        allData.data_value +
        "&lower_CI=" +
        allData.lower_CI +
        "&period=" +
        allData.period +
        "&population=" +
        allData.population +
        "&units=" +
        allData.units +
        "&upper_CI=" +
        allData.upper_CI
    )
      .then((data) => {
        if (data.ok) {
          data
            .json()
            .then((response) => {
              let { prediction } = response
              switch (prediction) {
                case "Serious non-fatal":
                  prediction = "in codizione seria, ma non fatale"
                  break
                case "Serious":
                  prediction = "in codizione seria"
                  break
                case "Fatal":
                  prediction = "Morta"
                  break
              }
              setAIResponse(prediction)
              setIsValidData(true)
            })
            .catch(() =>
              setAIResponse("Non è possibile rispondere a queste richieste.")
            )
        } else {
          setAIResponse(
            "Mi spiace, ma per effettuare una previsione più completa è necessario specificare tutti i valori all'interno degli appositi campi."
          )
          setIsValidData(false)
        }
      })
      .catch(() => {
        setAIResponse("Errore.")
        setIsValidData(false)
      })

    setIsFormSubmitted(true)
  }

  return (
    <main className="content">
      <Form onSubmit={onSubmit} />
      {isFormSubmitted && (
        <Risposta
          isValidData={isValidData}
          aiResponse={aiResponse}
          isFormSubmitted={isFormSubmitted}
        />
      )}
    </main>
  )
}
export default App
