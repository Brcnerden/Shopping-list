import * as C from "./ConfettiButtonStyled";
import JSConfetti from "js-confetti";

export const ConfettiButton = () => {
  const jsConfetti = new JSConfetti();

  return <C.Button onClick={() => jsConfetti.addConfetti()}>Buy</C.Button>;
};
