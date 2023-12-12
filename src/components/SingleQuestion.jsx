import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function SingleQuestion({ question, answer }) {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
      <article className="article-question">
        <h2>{question}</h2>
        {isShowing ? <FaChevronUp /> : <FaChevronDown />}
      </article>

      {isShowing && <p>{answer}</p>}
    </div>
  );
}

export default SingleQuestion;
