import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "250px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item" onClick={() => setCategory("business")}>
                <div className="nav-link">Business</div>
              </li>
              <li className="nav-item" onClick={() => setCategory("health")}>
                <div className="nav-link">Health</div>
              </li>
              <li className="nav-item" onClick={() => setCategory("sports")}>
                <div className="nav-link">Sports</div>
              </li>
              <li
                className="nav-item"
                onClick={() => setCategory("entertainment")}
              >
                <div className="nav-link">Entertainment</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
