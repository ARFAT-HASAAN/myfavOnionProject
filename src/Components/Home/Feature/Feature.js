import React from "react";
import "./Feature.css";

import featureimg1 from "../../../images/Image/adult-blur-blurred-background-687824.png";
import featureimg2 from "../../../images/Image/chef-cook-food-33614.png";
import featureimg3 from "../../../images/Image/architecture-building-city-2047397.png";
import icon from "../../../images/ICON/Group 204.png";
import icon2 from "../../../images/ICON/Group 245.png";
import icon3 from "../../../images/ICON/Group 1133.png";

const Feature = () => {
  return (
    <div className="container">
      <div className="intro-Section">
        <h1 className="mb-4">why you coose us</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          quibusdam exercitationem temporibus fugit expedita doloremque
          veritatis labore.
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card ">
            <img src={featureimg1} class="card-img-top" alt="..." />
            <div class="card-body w-75 mx-auto">
              <h5 class="card-title">
                {" "}
                <span>
                  {" "}
                  <img src={icon2} alt="icon" />
                </span>{" "}
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={featureimg2} class="card-img-top" alt="..." />
            <div class="card-body w-75 mx-auto">
              <h5 class="card-title">
                {" "}
                <span>
                  <img src={icon} alt="gari" />
                </span>{" "}
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded">
            <img src={featureimg3} class="card-img-top" alt="..." />
            <div class="card-body w-75 mx-auto">
              <h5 class="card-title">
                {" "}
                <span>
                  <img src={icon3} alt="iconthree" />
                </span>{" "}
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
