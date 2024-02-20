import { useState } from "react";
import Question from "./components/Question";
import questions from "./data/data";

function App() {
  console.log(questions)
  const [appQuestions,setAppQuestions] = useState()
  


  return (
    <>
      <main className="border bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-center p-4 text-4xl">Questions</h1>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </main>
    </>
  );
}

export default App;
