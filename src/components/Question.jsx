import React, { useState } from "react";
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

function Question({ question, answer }) {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
      <article onClick={() => setIsShowing(!isShowing)}>
        <div className="question">
        <h2>{question}</h2>
        <button>
          {isShowing ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </button>
        </div>
      </article>
      {isShowing && <p>{answer}</p>}
    </div>
  );
}

export default Question;
