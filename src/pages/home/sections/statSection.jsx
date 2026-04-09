import ArrowIcon from "../../../assets/arrow.svg?react";

const Stats = () => {
  return (
    <section className="container-fluid px-md-5 py-5 custom-bg text-center">
      <div className="text-center">
        <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
          Why Choose Us
        </p>
        <h2 className="fw-bold mb-4">Defined by Experience</h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <p className="h2">250+</p>
            <p>
              Yachts Chartered Worldwide, delivering exceptional experiences
              across the world’s most sought-after waters.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <p className="h2">120+</p>
            <p>
              Destinations Carefully Selected, from iconic coastlines to
              secluded and untouched anchorages.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <p className="h2">15+ Years</p>
            <p>
              Industry Experience, built on trust, discretion, and a deep
              understanding of luxury travel.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="p-4">
            <p className="h2">50+</p>
            <p>
              Expert Charter Brokers, providing tailored guidance and seamless
              service at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
