import { useState } from "react";
import { QuestThree } from "./QuestThree";

export const QuestTwo = () => {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const submitHandler = () => {
    if (password.toLowerCase() === process.env.REACT_APP_TWO.toLowerCase()) {
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
          <h3 className="quest__title">Друге завдання</h3>
          <p className="quest__text">
            Так тримати! Цього разу тобі потрібно знайти не тільки листочок. Те,
            що ти шукаєш знаходиться в магічному комоді. Удачі!
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
        <QuestThree />
      )}
    </>
  );
};
