import { useState } from "react";
import mobile from "./images/background-pattern-mobile.svg";
import desktop from "./images/background-pattern-desktop.svg";
import SingleQuestion from "./components/SingleQuestion";
import { questions } from "./components/questions";
import './index.css'

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width:68) " srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion
            key={index}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
