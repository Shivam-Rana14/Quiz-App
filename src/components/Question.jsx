import { useContext } from "react";
import { quizContext } from "../store/quiz-context";
import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
export default function Question() {
  const { QUESTIONS, activeQuestionIndex, handleSkipAnswer } =
    useContext(quizContext);
  return (
    <div id="question">
      <QuizTimer
        key={activeQuestionIndex}
        timeout={15000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers key={activeQuestionIndex + 1000} />
    </div>
  );
}
