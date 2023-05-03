import Form from "./InputUtente"
import Risposta from "./ResponseContainer"
import "./App.css"
import { useState } from "react"

function App() {
  const [dataForm, setDataForm] = useState("ciao")
  const [aiResponse, setAIResponse] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({})

  async function onSubmit(e) {
    setIsFormSubmitted(false)
    e.preventDefault()
    const response = await fetch("https://randomuser.me/api")
    const data = await response.json()
    const { results } = data
    const {
      name: { first },
    } = results[0]
    console.log(first)
    const allData = Object.fromEntries(new FormData(e.target))
    setFormData(allData)
    // const formData = new FormData(e.target)
    // const newDadaForm = Object.fromEntries(formData)
    setDataForm(formData)
    setIsFormSubmitted(true)
    setAIResponse(first)
    console.log("cliccato")
    console.log(allData)
    e.currentTarget.reset() // pulisco form
  }

  return (
    <main className="content">
      <Form onSubmit={onSubmit} />
      {isFormSubmitted && (
        <Risposta
          aiResponse={aiResponse}
          formData={dataForm}
          isFormSubmitted={isFormSubmitted}
        />
      )}
    </main>
  )
}
export default App
