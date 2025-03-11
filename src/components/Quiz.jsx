import { useContext } from "react";
import { quizContext } from "../store/quiz-context";
import quizCompleteImg from "../assets/quiz-complete.png";

import Question from "./Question";

export default function Quiz() {
  const { activeQuestionIndex, QUESTIONS } = useContext(quizContext);
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Over!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} />
    </div>
  );
}
