import avatar from "./assets/images/avatar.svg"
import ai from "./assets/images/AI.svg"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { useEffect, useState } from "react"

function DialogWindow({
  whoisTalking,
  text,
  setQuestionOn = () => {},
  setResponseOn = () => {},
}) {
  const [typedText, typeSettings] = useTypewriter({
    words: [text],
    typeSpeed: 70,
    loop: 1,
    onLoopDone: () => {
      setQuestionOn(true)
      setResponseOn(true)
    },
  })

  return (
    <section className="dialog">
      {/* Renderizzo immagine in base a who is talking */}
      {whoisTalking === "User" ? (
        <img src={avatar} alt="" className="icon" />
      ) : (
        <img src={ai} alt="" className="icon" id="ai" />
      )}

      <div className="display-message">
        <span>{typedText}</span>

        <span>
          {!typeSettings.isDone && (
            <Cursor cursorStyle="_" cursorBlinking={true} />
          )}
        </span>
      </div>
    </section>
  )
}
export default DialogWindow
