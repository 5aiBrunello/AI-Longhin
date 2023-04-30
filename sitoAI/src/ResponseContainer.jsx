import avatar from "./assets/images/avatar.svg"
import ai from "./assets/images/AI.svg"

import "./DialogWindow.css"

function ResponseContainer() {
  return (
    <section className="response">
      <DialogWindow
        whoisTalking={"User"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia repellat provident deserunt accusantium eos adipisci neque obcaecati laudantium, magnam dignissimos at reprehenderit distinctio cum nemo cumque nobis repellendus ipsum? Possimus."
        }
      />

      <DialogWindow
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia repellat provident deserunt accusantium eos adipisci neque obcaecati laudantium, magnam dignissimos at reprehenderit distinctio cum nemo cumque nobis repellendus ipsum? Possimus."
        }
      />
    </section>
  )
}
export default ResponseContainer

function DialogWindow({ whoisTalking, text }) {
  return (
    <section className="dialog">
      {/* Renderizzo immagine in base a who is talking */}
      {whoisTalking === "User" ? (
        <img src={avatar} alt="" className="icon" />
      ) : (
        <img src={ai} alt="" className="icon" id="ai" />
      )}

      <div className="display-message">
        <p>{text}</p>
      </div>
    </section>
  )
}
