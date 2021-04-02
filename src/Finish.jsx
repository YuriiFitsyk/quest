import { useState } from "react";
import { QuestThree } from "./QuestThree";

export const Finish = () => {
  return (
    <>
      <h3 className="quest__title">Останнє завдання</h3>
      <p className="quest__text">
        Прекрасно справляєшся! Тепер найважче завдання. Вигляни у вікно з своєї
        кімнати.
      </p>
      <div className="quest__input--container"></div>
    </>
  );
};
