import { useState } from "react";
import { Finish } from "./Finish";

export const QuestThree = () => {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const submitHandler = () => {
    if (password === "qwertyasd") {
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
          <h3 className="quest__title">Третє завдання</h3>
          <p className="quest__text">
            Молодець! Тепер тобі потрібно пройтись в іншу кімнату. В кімнаті для
            романтичної вечері в одній з поличок знаходиться наступна підказка.
            Удачі!
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
