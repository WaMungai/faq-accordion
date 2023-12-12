import { useState } from "react";
import bgMobile from "./images/background-pattern-mobile.svg";
import bgDesktop from "./images/background-pattern-desktop.svg";
import SingleQuestion from "./components/SingleQuestion";
import { questions } from "./components/questions";
import './index.css'

function App() {
  const [isShowing,setIsShowing] = useState(false);

  return (
   <section>
    <picture>
      <source media="(min-width:640px" srcSet={bgDesktop} />
      <img src={bgMobile} alt="" />
    </picture>
    <div>
      {questions.map((question,index) =>(
        <article key={index}>
          <h2>{question.question}</h2>
          <p>{question.answer}</p>
        </article>
      ))}
    </div>
   </section>
  );
}

export default App;
