import Form from "./InputUtente"
import Risposta from "./ResponseContainer"
import "./App.css"
import { useState } from "react"

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  return (
    <main className="content">
      <Form />
      <Risposta
        isFormSubmitted={isFormSubmitted}
        setformSubmitted={setIsFormSubmitted}
      />
    </main>
  )
}
export default App
