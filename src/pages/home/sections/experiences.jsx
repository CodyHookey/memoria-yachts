import ArrowIcon from "../../../assets/arrow.svg?react";

const Experiences = () => {
  return (
    <section id="experiences" className="py-5 container-fluid px-5">
      <div className="text-center mb-5">
        <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
          Life on Board
        </p>
        <h2 className="fw-bold mb-4">Life, Elevated at Sea</h2>
        <h4 className="px-5">
          More than a journey, yachting is a way of living. Every detail, from
          tailored itineraries to onboard service, is designed to deliver
          effortless luxury and complete freedom at sea.
        </h4>
      </div>
      <div className="cards-expand d-flex gap-3 mb-5">
        <div
          className="custom-card outer p-4 text-white d-flex flex-column justify-content-between"
          id="card-one"
        >
          <h3>Secluded Anchorages</h3>
          <p className="text-white">
            Access hidden coves and untouched
            <br /> coastlines far from the usual routes.
          </p>
        </div>
        <div
          className="custom-card outer p-4 text-white d-flex flex-column justify-content-between"
          id="card-two"
        >
          <h3>Sunrise on Deck</h3>
          <p className="text-white">
            Quiet mornings with uninterrupted
            <br /> ocean views, fresh coffee, and stillness.
          </p>
        </div>
        <div
          className="custom-card outer p-4 text-white d-flex flex-column justify-content-between"
          id="card-three"
        >
          <h3>Water Activities</h3>
          <p className="text-white">
            Jet skis, diving, snorkelling, and effortless
            <br /> access to the sea.
          </p>
        </div>
        <div
          className="custom-card outer p-4 text-white d-flex flex-column justify-content-between"
          id="card-four"
        >
          <h3>Private Fine Dining</h3>
          <p className="text-white">
            Bespoke menus prepared by an onboard
            <br /> chef, served under the open sky.
          </p>
        </div>
      </div>
      <button className="secondary-btn outer px-5 py-2 d-flex align-items-center justify-content-center mx-auto">
        Find Your Next Experience
        <ArrowIcon width="31px" height="31px" />
      </button>
    </section>
  );
};

export default Experiences;
