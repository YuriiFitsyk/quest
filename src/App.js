import { useState } from "react";

import "./App.scss";
import { QuestOne } from "./QuestOne";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <div className="quest">
        {!started ? (
          <>
            <h1 className="quest__title">Щоб почати квест, нажми на кнопку.</h1>

            <p className="quest__desc">Дороги назад не буде!</p>

            <button className="quest__button" onClick={() => setStarted(true)}>
              Click me!
            </button>
          </>
        ) : (
          <QuestOne />
        )}
      </div>
    </div>
  );
}

export default App;
