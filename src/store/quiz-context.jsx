import { createContext, useState } from "react";

export const quizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  QUESTIONS: "",
  handleSelectAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    console.log(userAnswers);
  }

  const quizCtx = {
    activeQuestionIndex: activeQuestionIndex,
    userAnswers: userAnswers,
    handleSelectAnswer: handleSelectAnswer,
  };
  return (
    <quizContext.Provider value={quizCtx}>{children}</quizContext.Provider>
  );
}
