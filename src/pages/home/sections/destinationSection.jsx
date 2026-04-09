import React from "react";
import ArrowIcon from "../../../assets/arrow.svg?react";

class Destination extends React.Component {
  state = {
    destinations: [
      {
        name: "Caribbean",
        image: "/caribbean.webp",
      },
      { name: "Ibiza", image: "/ibiza.webp" },
      { name: "Monaco", image: "/monaco.webp" },
      { name: "Mediterranean", image: "/mediterranean.webp" },
      { name: "French Riviera", image: "/french-riviera.webp" },
      { name: "South Pacific", image: "/south-pacific.webp" },
    ],
  };

  render() {
    const { destinations } = this.state;
    return (
      <section className="py-5">
        <div className="text-center container-fluid px-md-5 mb-5">
          <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
            The Vision, Realised
          </p>
          <h2 className="fw-bold mb-4">Destinations Without Limits</h2>
        </div>
        <div className="custom-carousel d-flex mb-5">
          <div className="custom-group d-flex align-items-center justify-content-center">
            {destinations.map((d) => {
              return (
                <div
                  className="custom-card-scroll p-4 d-flex justify-content-center align-items-center outer"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${d.image}) center/cover no-repeat`,
                    height: "545px",
                  }}
                  key={d.name}
                >
                  <p className="h2">{d.name}</p>
                </div>
              );
            })}
          </div>
          <div
            aria-hidden
            className="custom-group d-flex align-items-center justify-content-center"
          >
            {destinations.map((d) => {
              return (
                <div
                  className="custom-card-scroll p-4 d-flex justify-content-center align-items-center outer"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${d.image}) center/cover no-repeat`,
                    height: "545px",
                  }}
                  key={d.name}
                >
                  <p className="h2">{d.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="secondary-btn outer px-5 py-2 d-flex align-items-center justify-content-center mx-auto">
          Find Your Next Experience
          <ArrowIcon width="31px" height="31px" />
        </button>
      </section>
    );
  }
}

export default Destination;
