import "./DialogWindow.css"
import { useEffect, useState } from "react"
import Chat from "./DialogWindow"

function ResponseContainer({ isFormSubmitted, setformSubmitted }) {
  const [isQuestionDone, setIsQuestionDone] = useState(false)
  const [userText, setUserText] = useState("")
  const [AIText, setAIText] = useState("")

  console.log(isFormSubmitted)

  async function fetchAPI() {
    const response = await fetch("https://randomuser.me/api")
    const data = await response.json()
    const { results } = data
    const { gender } = results[0]
    console.log(gender)
    setUserText(gender)
    setAIText(gender)
  }

  useEffect(() => {
    const button = document.querySelector(".btn")
    let timeoutID = 0
    button.onclick = () => {
      timeoutID = setTimeout(() => {
        setformSubmitted(true)
        setIsQuestionDone(false)
        setformSubmitted(true)

        fetchAPI()
      }, 0.1)
      setformSubmitted(false)
    }
    return () => clearTimeout(timeoutID)
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
