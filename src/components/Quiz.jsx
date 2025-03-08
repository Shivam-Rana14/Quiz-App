import { useContext } from "react";
import { quizContext } from "../store/quiz-context";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const { activeQuestionIndex, handleSelectAnswer } = useContext(quizContext);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
        <h5>PRACTISE MAKES ONE PERFECT</h5>
      </div>
    </div>
  );
}
