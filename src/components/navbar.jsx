const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-5">
        <a
          className="navbar-brand fw-bold d-flex align-items-center primary-color"
          href="#"
        >
          <img
            src="/memoria-logo.png"
            className="me-2"
            alt=""
            height={"65px"}
          />
          Memoría Yachts
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
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <a className="nav-link me-5 primary-color" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link primary-color" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link primary-color" href="#">
                Explore Yachts
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link primary-color" href="#">
                Explore Lifestyle
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link primary-color" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
