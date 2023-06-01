"use client";
import Card from "@/components/Card";

interface Question {
  question : string;
  answer: string;
}

const list : Question[] = [
  {question : "What is the first month of the year?", answer : "January"},
  {question : "What is the biggest planet in our solar system?", answer : "Jupiter"},
  {question : "What is the last day of the week?", answer : "Sunday"},
  {question : "Which is the heavier, a pound of feathers or a pound of steel?", answer : "They're equal"},
]

export default function Home() {

  return (
    <div className="container">
      {list.map((element, i) => (
       <Card question={element.question} answer={element.answer} index={i} />
      ))}
    </div>
  )
}
