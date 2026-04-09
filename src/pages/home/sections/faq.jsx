const FAQ = () => {
  return (
    <section className="container-fluid px-5 py-5">
      <div className="text-center">
        <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
          FAQ
        </p>
        <h2 className="fw-bold mb-5">Frequently Asked Questions</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  1. What is included in a luxury yacht charter?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Most charters include the yacht, professional crew, onboard
                  amenities, and water toys. Additional costs such as fuel,
                  food, beverages, docking fees, and gratuities are typically
                  charged separately depending on your itinerary and
                  preferences.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  2. How far in advance should I book a yacht charter?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  For peak seasons and high-demand destinations, it’s
                  recommended to book 6–12 months in advance. Last-minute
                  bookings may be available, but options can be limited.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  3. Can the itinerary be customised?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Yes, every charter is fully tailored to your preferences. You
                  can choose your destinations, activities, dining style, and
                  pace of travel to create a completely personalised experience.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  4. What crew and services are provided onboard?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Luxury yachts come with a professional crew, which may include
                  a captain, chef, stewardesses, and additional specialists such
                  as spa therapists or dive instructors, depending on the yacht.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
