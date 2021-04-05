import { useState } from "react";
import { Finish } from "./Finish";

export const QuestFour = () => {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const submitHandler = () => {
    if (password.toLowerCase() === process.env.REACT_APP_FOUR.toLowerCase()) {
      setConfirmed(true);
      setPassword("");
    } else {
      setPassword("");
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  return (
    <>
      {!confirmed ? (
        <>
          <h3 className="quest__title">Четверте завдання</h3>
          <p className="quest__text">
            Молодець, якби Геральт тебе побачив, забув би про Йенніфер! Тепер
            тобі потрібно відправитись в далеку путь. В кімнаті для романтичної
            вечері між спогадами знаходиться наступна підказка. Удачі!
          </p>
          <div className="quest__input--container">
            <input
              type="text"
              className="quest__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.code === "Enter" && submitHandler()}
              placeholder="Password"
            />

            {showError && <span className="quest__error">Спробуй ще раз</span>}
          </div>
          <button className="quest__button" onClick={submitHandler}>
            Submit
          </button>
        </>
      ) : (
        <Finish />
      )}
    </>
  );
};
