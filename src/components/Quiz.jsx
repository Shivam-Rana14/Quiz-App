import { useContext } from "react";
import { quizContext } from "../store/quiz-context";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

export default function Quiz() {
  const {
    activeQuestionIndex,
    handleSelectAnswer,
    QUESTIONS,
    handleSkipAnswer,
  } = useContext(quizContext);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Over!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuizTimer
          key={activeQuestionIndex}
          timeout={15000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
