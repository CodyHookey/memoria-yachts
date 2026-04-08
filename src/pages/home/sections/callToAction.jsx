import ArrowIcon from "../../../assets/arrow.svg?react";

const CallToAction = () => {
  return (
    <section id="call-to-action" className="container-fluid px-5 py-5">
      <div id="cta-bg" className="outer text-center text-white py-5">
        <h2 className="fw-bold mb-4">Begin Your Journey</h2>
        <p className="h4 px-5 mb-5">
          Enquire now to create a charter experience tailored entirely to you.
        </p>
        <button className="frosted-glass inner text-white px-5 py-2 d-flex justify-content-center align-items-center mx-auto">
          Request a Charter
          <ArrowIcon width="31px" height="31px" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
