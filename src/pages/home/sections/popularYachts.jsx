import React from "react";
import ArrowIcon from "../../../assets/arrow.svg?react";

class PopularYachts extends React.Component {
  state = {
    yachts: [
      {
        id: "1",
        name: "Azzam",
        image_url: "/yacht-one.jpg",
        make: "Lürssen - 2013",
        length: "180m",
        guests: "36",
        cabins: "18",
        crew: "80",
        price_per_week: "1,675,000",
      },
      {
        id: "2",
        name: "Eclipse",
        image_url: "/yacht-two.jpg",
        make: "Blohm+Voss - 2010",
        length: "162m",
        guests: "36",
        cabins: "24",
        crew: "70",
        price_per_week: "1,300,000",
      },
      {
        id: "3",
        name: "Dilbar",
        image_url: "/yacht-three.jpg",
        make: "Lürssen - 2016",
        length: "156m",
        guests: "24",
        cabins: "12",
        crew: "30",
        price_per_week: "1,115,000",
      },
    ],
  };

  render() {
    const { yachts } = this.state;
    return (
      <section
        id="popular-yachts"
        className="py-5 custom-bg container-fluid px-md-5 text-center"
      >
        <p className="small-text section-tag d-inline-block pb-1 px-3 mb-4">
          Make Your Statement
        </p>
        <h2 className="fw-bold mb-5">Popular Yachts</h2>

        <div className="row g-3 justify-content-center mb-5">
          {yachts.map((yacht) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={yacht.id}>
                <img
                  src={yacht.image_url}
                  alt=""
                  height={"386px"}
                  className="outer img-fluid mb-3"
                  loading="lazy"
                />
                <h3 className="mb-0">{yacht.name}</h3>
                <p className="small-text secondary-color">{yacht.make}</p>
                <div className="row mb-4">
                  <div className="col-3 yacht-info">
                    <span className="fw-bold">{yacht.length}</span>
                    <br />
                    Length
                  </div>
                  <div className="col-3 yacht-info">
                    <span className="fw-bold">{yacht.guests}</span>
                    <br />
                    Guests
                  </div>
                  <div className="col-3 yacht-info">
                    <span className="fw-bold">{yacht.cabins}</span>
                    <br />
                    Cabins
                  </div>
                  <div className="col-3">
                    <span className="fw-bold">{yacht.crew}</span>
                    <br />
                    Crew
                  </div>
                </div>
                <div className="bg-white py-2 outer">
                  <p className="mb-0">
                    From{" "}
                    <span className="fw-bold">${yacht.price_per_week}</span>{" "}
                    P/Week
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="primary-btn outer px-5 py-2 d-flex align-items-center justify-content-center mx-auto">
          More Yachts <ArrowIcon width="31px" height="31px" />
        </button>
      </section>
    );
  }
}

export default PopularYachts;
