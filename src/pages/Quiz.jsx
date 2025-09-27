import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import Test from "../components/Test";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://json-api.uz/api/project/quizzApp/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  return (
    <section className="quiz-container container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </section>
  );
}

export default Quiz;
