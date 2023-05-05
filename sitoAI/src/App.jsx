import Form from "./InputUtente";
import Risposta from "./ResponseContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [dataForm, setDataForm] = useState("ciao");
  const [aiResponse, setAIResponse] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  async function onSubmit(e) {
    setIsFormSubmitted(false);
    e.preventDefault();
    const allData = Object.fromEntries(new FormData(e.target));
    setFormData(allData);
    console.log(allData);
    // http://localhost:8000/GetResponse?age=0-74 years&cause=Work&data_value=667&lower_CI=688&period=2009&population=Children&units=Per billion km&upper_CI=11
    const response = await fetch(
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
        allData.upper_CI,
      {
        mode: "no-cors",
      }
    );
    console.log(response);
    const data = await response
      .json()
      .then((response) => {
        const { prediction } = response;

        setAIResponse(prediction);
      })
      .catch(() =>
        setAIResponse("Non è possibile rispondere a queste richieste")
      );
    setIsFormSubmitted(true);
    console.log("cliccato");
    console.log(allData);
    // e.currentTarget.reset(); // pulisco form
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
