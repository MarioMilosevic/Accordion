import { useState } from "react";
import Question from "./components/Question";
import Heading from "./components/Heading";
import questions from "./data/data";

function App() {
  const [appQuestions, setAppQuestions] = useState(questions);

  return (
    <>
      <main className="border bg-white px-8 py-8 rounded-lg shadow-lg">
        <Heading />
        {appQuestions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </main>
    </>
  );
}

export default App;
