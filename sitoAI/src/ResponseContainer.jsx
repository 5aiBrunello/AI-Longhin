import "./DialogWindow.css"
import { useEffect, useState } from "react"
import Chat from "./DialogWindow"

function ResponseContainer({ isValidData, aiResponse, isFormSubmitted }) {
  const [isQuestionDone, setIsQuestionDone] = useState(false)
  const [userText, setUserText] = useState("")
  const [AIText, setAIText] = useState("")

  useEffect(() => {
    setUserText(
      "Quali saranno le condizioni della persona con i valori qua sopra riportati?"
    )
    const definitiveAiResponse = isValidData
      ? "Con molta probabilità la persona con le caratteristiche descritte e con la causa riportata sarà  " +
        aiResponse +
        "."
      : aiResponse
    setAIText(definitiveAiResponse)
  }, [])

  return (
    <section className="response">
      {isFormSubmitted && (
        <Chat
          whoisTalking={"User"}
          text={userText}
          setQuestionOn={setIsQuestionDone}
        />
      )}
      {isQuestionDone && (
        <Chat text={AIText} setResponseOn={setIsQuestionDone} />
      )}
    </section>
  )
}
export default ResponseContainer
