import "./DialogWindow.css"
import { useEffect, useState } from "react"
import Chat from "./DialogWindow"

function ResponseContainer({ formData, aiResponse, isFormSubmitted }) {
  const [isQuestionDone, setIsQuestionDone] = useState(false)
  const [userText, setUserText] = useState("")
  const [AIText, setAIText] = useState("")

  useEffect(() => {
    setUserText("Come si chiama?")
    setAIText(aiResponse)
  }, [])

  return (
    <section className="response">
      {formData && isFormSubmitted && (
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
