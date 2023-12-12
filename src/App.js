import bgMobile from "./images/background-pattern-mobile.svg";
import bgDesktop from "./images/background-pattern-desktop.svg";
import Question from "./components/Question";
import { questions } from "./components/questions";
import star from "./images/icon-star.svg"

function App() {
  return (
   <section>
    <picture>
      <source media="(min-width:640px" srcSet={bgDesktop} />
      <img src={bgMobile} alt="" />
    </picture>
    <div className="container">
      <h1><img src={star} alt="" /> FAQS</h1>
      <div className="questions-container">
      {questions.map((question,index) =>(
       <Question key={index} {...question} />
       ))}
      </div>
      
    </div>
   </section>
  );
}

export default App;
