const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-md-5">
        <a
          className="navbar-brand fw-bold d-flex align-items-center primary-color"
          href="#"
        >
          <img src="/memoria-logo.png" className="me-2" alt="" height="65px" />
          <span className="d-none d-md-block">Memoría Yachts</span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold primary-color">
              <img
                src="/memoria-logo.png"
                className="me-2"
                alt=""
                height="65px"
              />
              Memoria Yachts
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto fw-bold align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link primary-color me-lg-5" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link primary-color me-lg-5" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link primary-color me-lg-5" href="#">
                  Explore Yachts
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link primary-color me-lg-5" href="#">
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
      </div>
    </nav>
  );
};

export default Navbar;
