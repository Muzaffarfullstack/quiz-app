import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light";
};
function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(toggleMode());

  const toggleTheme = () => {
    const newTheme = theme == "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container container">
        <div>
          {title && (
            <Link to="/" className="header-logo">
              <figure>
                <img
                  src={`../assets/icon-${title.toLowerCase()}.svg`}
                  alt={`${title} icon`}
                />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div>
          <div onClick={toggleTheme} className="dark-btn">
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
