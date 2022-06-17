import { useState } from "react";
import Cartas from "../components/cartas";
import { Baralho } from "../baralho.mjs";
import "./styles.css";

function App() {
  const [cardStatus, setCardStatus] = useState([...Baralho]);
  let pontos = 10 - (cardStatus.length + 2);
  return (
    <div className="App">
      <h1>Jogo da memoria: </h1>
      <p>Pontos: {pontos}</p>
      <div className="Div">
        {cardStatus.map((e) => (
          <Cartas id={e.id} CardStatus={setCardStatus} Card={cardStatus} />
        ))}
      </div>
    </div>
  );
}

export default App;
