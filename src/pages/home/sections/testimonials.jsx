import React from "react";

class Testimonials extends React.Component {
  state = {
    testimonials: [
      {
        id: "1",
        message:
          "The entire experience was seamless from start to finish. Every detail was handled with absolute precision, allowing us to simply relax and enjoy the journey.",
        name: "James R., London",
      },
      {
        id: "2",
        message:
          "An exceptional level of service and a truly remarkable yacht. It felt less like a holiday and more like a perfectly curated experience.",
        name: "Sofia M., Monaco",
      },
      {
        id: "3",
        message:
          "Discreet, professional, and effortlessly luxurious. The crew anticipated everything before we even had to ask.",
        name: "Daniel K., Dubai",
      },
    ],
  };

  render() {
    const { testimonials } = this.state;
    return (
      <section
        id="testimonials"
        className="py-5 container-fluid px-5 text-center custom-bg"
      >
        <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
          Testimonials
        </p>
        <h2 className="fw-bold mb-4">Guest Experiences</h2>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-touch="true"
        >
          <div className="carousel-inner py-5 text-center">
            {testimonials.map((t, i) => {
              return (
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  key={t.id}
                >
                  <p className="h4 px-5 mb-3">"{t.message}"</p>
                  <p>~ {t.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
