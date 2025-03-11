import { createContext, useCallback, useState } from "react";
import QUESTIONS from "../questions.js";

export const quizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  QUESTIONS: "",
  QUESTIONS: {},
  answerState: "",
  handleSelectAnswer: () => {},
  handleSkipAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [answerState, setAnserState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnserState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnserState("correct");
        } else {
          setAnserState("wrong");
        }
        setTimeout(() => {
          setAnserState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
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
    answerState: answerState,
  };
  return (
    <quizContext.Provider value={quizCtx}>{children}</quizContext.Provider>
  );
}
