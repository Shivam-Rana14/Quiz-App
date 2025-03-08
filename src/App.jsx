import Header from "./components/Header";
import Quiz from "./components/Quiz";

import QuizContextProvider from "./store/quiz-context";
function App() {
  return (
    <>
      <Header />
      <main>
        <QuizContextProvider>
          <Quiz />
        </QuizContextProvider>
      </main>
    </>
  );
}

export default App;
