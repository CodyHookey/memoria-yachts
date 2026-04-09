import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="container-fluid px-5 d-none d-md-block"
    >
      <div id="hero-image" className="outer p-5">
        <div className="h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-7 py-5 text-white">
              <h1 className="fw-bold pt-5">Where the Ocean Becomes Yours</h1>
              <h3 className="fw-normal">
                Experience bespoke yacht charters crafted with timeless elegance
                and modern refinement.
              </h3>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="frosted-glass text-white inner p-3 d-inline-block">
            <h4 className="mb-3">Look for your perfect experience</h4>
            <div className="d-flex mb-3">
              <div className="frosted-glass inner py-2 ps-2 pe-4 text-white rounded me-3">
                <select
                  name="yacht"
                  id=""
                  className="text-white"
                  style={{ background: "none", border: "none" }}
                >
                  <option value="">Yacht Type</option>
                  <option value="motor">Motor</option>
                  <option value="sailing">Sailing</option>
                  <option value="expedition">Expedition</option>
                </select>
              </div>
              <div className="frosted-glass inner py-2 ps-2 pe-4 text-white rounded me-3">
                <select
                  name="cabins"
                  id=""
                  className="text-white"
                  style={{ background: "none", border: "none" }}
                >
                  <option value="">Cabins</option>
                  <option value="1-15">1 to 15</option>
                  <option value="15-25">15 to 25</option>
                  <option value=">25">More than 25</option>
                </select>
              </div>
              <div className="frosted-glass inner py-2 ps-2 pe-4 text-white rounded me-3">
                <select
                  name="length"
                  id=""
                  className="text-white"
                  style={{ background: "none", border: "none" }}
                >
                  <option value="">Length</option>
                  <option value="30-50m">30 to 50 meters</option>
                  <option value="50-80m">50 to 80 meters</option>
                  <option value=">80m">More than 80 meters</option>
                </select>
              </div>
              <button className="hero-btn py-2 px-4 rounded d-flex justify-content-center align-items-center">
                Submit
                <FontAwesomeIcon icon={faMagnifyingGlass} className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
