import React from "react";
import { Baralho } from "../../baralho.mjs";

function Cartas({ id, CardStatus, Card }) {
  const localCard = [...Card];
  const heCard = Baralho.find((e) => e.id === id);
  const CardFlip = localCard.filter((e) => e.turned);

  const handleClick = () => {
    heCard.turned = !heCard.turned;
    CardStatus(localCard);
    if (CardFlip.length > 1) {
      alert("mais de 2 cartas selecionadas");
    }
  };

  if (CardFlip.length === 2) {
    if (CardFlip[0].name === CardFlip[1].name) {
      setTimeout(() => {
        RemoveCard(CardFlip[0], CardFlip[1]);
      }, 1000);
    } else {
      setTimeout(() => {
        CardFlip[0].turned = false;
        CardFlip[1].turned = false;
        CardStatus(localCard);
      }, 1000);
    }
  }

  const RemoveCard = (card1, card2) => {
    const filterCard = localCard.filter(
      (e) => e.id !== card1.id && e.id !== card2.id
    );
    CardStatus(filterCard);
  };

  return (
    <>
      <img
        onClick={() => handleClick()}
        src={
          heCard.turned
            ? heCard.imgUrl
            : "https://i.pinimg.com/originals/26/2c/4a/262c4a30fa1cd4174d262c866c57c894.png"
        }
        alt=""
      />
    </>
  );
}

export default Cartas;
