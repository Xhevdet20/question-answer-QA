

import React, { useState } from "react";

interface Prop {
  question: string;
  answer: string;
  index: number;
}

const Card: React.FC<Prop> = ({ question, answer, index }) => {

  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div key={`${answer}-${index}`} className="card" onClick={() => setToggle((prev) => !prev)}>
      {toggle ? <h2>{answer}</h2> : <h2>{question}</h2>}
    </div>
  );
};

export default Card;
