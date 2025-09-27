import { useFetch } from "../../../quiz-app/src/hooks/useFetch";
import { Link } from "react-router-dom";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://json-api.uz/api/project/quizzApp/quizzes");
  return (
    <div>
      {isPending && <h4>Loading...</h4>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                className="menu-item header-logo"
                key={item.title}
                to={`quiz/${item.title}`}
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
