import Anchor from "../../../assets/anchor.svg?react";

const About = () => {
  return (
    <section id="about" className="py-5 container-fluid px-5 text-center">
      <div className="d-flex justify-content-center mb-3">
        <div className="p-2 rounded-circle primary-border">
          <Anchor width="45px" height="45px" className="highlight-color" />
        </div>
      </div>

      <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
        The Experience
      </p>
      <h2 className="fw-bold mb-4">A Refined Approach to Yachting</h2>
      <h4 className="px-5">
        We offer a curated fleet of exceptional yachts, delivering bespoke
        experiences defined by timeless elegance, discreet service, and
        uncompromising attention to detail.
      </h4>
    </section>
  );
};

export default About;
