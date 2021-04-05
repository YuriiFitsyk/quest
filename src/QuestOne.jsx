import { useState } from "react";
import { QuestTwo } from "./QuestTwo";

export const QuestOne = () => {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const submitHandler = () => {
    if (password.toLowerCase() === process.env.REACT_APP_ONE.toLowerCase()) {
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
          <h3 className="quest__title">Перше завдання</h3>
          <p className="quest__text">
            І так, перше завдання буде розминкою. Щоб його виконати, зніми чехол
            з телефона і введи в поле для вводу пароль, написаний на листку.
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
        <QuestTwo />
      )}
    </>
  );
};
