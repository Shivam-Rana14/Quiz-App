import { createContext, useCallback, useState } from "react";
import QUESTIONS from "../questions.js";

export const quizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  QUESTIONS: "",
  QUESTIONS: {},
  handleSelectAnswer: () => {},
  handleSkipAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  console.log(userAnswers);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const quizCtx = {
    activeQuestionIndex: activeQuestionIndex,
    userAnswers: userAnswers,
    QUESTIONS: QUESTIONS,
    handleSelectAnswer: handleSelectAnswer,
    handleSkipAnswer: handleSkipAnswer,
  };
  return (
    <quizContext.Provider value={quizCtx}>{children}</quizContext.Provider>
  );
}
