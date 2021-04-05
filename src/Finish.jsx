import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export const Finish = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <h3 className="quest__title">Останнє завдання</h3>
      <p className="quest__text">
        Прекрасно справляєшся! Тепер найважче завдання. Вигляни у вікно з своєї
        кімнати.
      </p>
      <div className="quest__input--container"></div>
    </>
  );
};
