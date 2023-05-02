import Form from "./InputUtente";
import Risposta from "./ResponseContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [dataForm, setDataForm] = useState("ciao");
  const [aiResponse, setAIResponse] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  async function onSubmit(e) {
    setIsFormSubmitted(false);
    e.preventDefault();
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const { results } = data;
    const { gender } = results[0];
    console.log(gender);
    const formData = new FormData(e.target);
    setDataForm(formData);
    setIsFormSubmitted(true);
    setAIResponse(gender);
    console.log(formData);
    console.log("cliccato");
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
  );
}
export default App;
