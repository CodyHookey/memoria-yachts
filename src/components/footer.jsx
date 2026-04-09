const Footer = () => {
  return (
    <footer className="container-fluid px-md-5 py-5 primary-bg">
      <a
        className="navbar-brand fw-bold d-flex mb-4 align-items-center highlight-color justify-content-center justify-content-lg-start"
        href="#"
      >
        <img src="/memoria-logo.png" className="me-2" alt="" height={"65px"} />
        Memoría Yachts
      </a>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-start">
          <div className="text-center text-lg-start mb-3 mb-lg-0">
            <p className="fw-bold text-white section-tag d-inline-block pb-2 mb-3">
              Charter & Sales
            </p>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Yachts for Charter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Charter Destinations
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Yachts for Sale
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Sell your Yacht
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Recent Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="text-center text-lg-start mb-3 mb-lg-0">
            <p className="fw-bold text-white section-tag d-inline-block pb-2 mb-3">
              Owner Services
            </p>
            <ul className="list-unstyled text-white">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Charter Management
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Yacht Management
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Yacht Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Build & Refit
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Crew Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-end">
          <div className="text-center text-lg-start mb-3 mb-lg-0">
            <p className="text-white">Lets Keep In Touch</p>
            <button className="footer-btn inner px-5 py-2 d-flex align-items-center justify-content-center mx-auto">
              Request Newsletter
            </button>
          </div>
        </div>
      </div>
      <hr className="text-white opacity-100" />
      <div className="d-md-flex justify-content-between text-center text-md-start">
        <div className="d-md-flex">
          <p className="text-white me-md-3">Legal & Privacy</p>
          <p className="text-white me-md-3">Cookies</p>
          <p className="text-white me-md-3">Sitemap</p>
          <p className="text-white me-md-3">Cookies Settings</p>
        </div>
        <p className="text-white">&copy; Memoría Yachts All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
