import "./DialogWindow.css"
import { useState } from "react"
import Chat from "./DialogWindow"

function ResponseContainer() {
  const [isQuestionDone, setIsQuestionDone] = useState(false)
  return (
    <section className="response">
      <Chat
        whoisTalking={"User"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam. Voluptas vitae sint accusantium perferendis? Consequatur at necessitatibus ad nulla id eum ex dolore, cupiditate voluptatibus doloribus! Officiis, modi dignissimos Accusamus, minus ipsum repellendus quod asperiores quis maxime libero velit obcaecati distinctio commodi officia porro delectus voluptates quibusdam quos. A illo in vero modi ipsam ad! Nobis ad voluptatem rem!"
        }
        setQuestionOn={setIsQuestionDone}
      />
      {isQuestionDone && (
        <Chat
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam. Voluptas vitae sint accusantium perferendis? Consequatur at necessitatibus ad nulla id eum ex dolore, cupiditate voluptatibus doloribus! Officiis, modi dignissimos.Accusamus, minus ipsum repellendus quod asperiores quis maxime libero velit obcaecati distinctio commodi officia porro delectus voluptates quibusdam quos. A illo in vero modi ipsam ad! Nobis ad voluptatem rem!"
          }
        />
      )}
    </section>
  )
}
export default ResponseContainer
