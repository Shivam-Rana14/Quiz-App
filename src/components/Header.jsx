import quizImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={quizImg} alt="ReactQuiz" />
      <h1>React Quiz</h1>
    </header>
  );
}
