import { createContext, useState } from "react";
import QUESTIONS from "../questions.js";

export const quizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  QUESTIONS: "",
  shuffledAnswers: [],
  QUESTIONS: {},
  handleSelectAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    console.log(userAnswers);
  }

  const quizCtx = {
    activeQuestionIndex: activeQuestionIndex,
    userAnswers: userAnswers,
    shuffledAnswers: shuffledAnswers,
    QUESTIONS: QUESTIONS,
    handleSelectAnswer: handleSelectAnswer,
  };
  return (
    <quizContext.Provider value={quizCtx}>{children}</quizContext.Provider>
  );
}
