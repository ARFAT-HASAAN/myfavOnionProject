import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="BannerContainer">
      <div className="bannerContent">
        <h2 className="mb-5 fs-1">Best food waiting for your Belley</h2>
        <div class="input-group mb-3 ">
          <input
            type="text"
            className="form-control Search-field"
            placeholder="Search food"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary search-btn"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
