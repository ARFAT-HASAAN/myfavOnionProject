import React from "react";
import "./Inventory.css";

const Inventory = () => {
  return (
    <div className="formContainer">
      <div className="formSection">
        <p className="pb-4  border-bottom border-dark border-1 fw-bold">
          Edit delevery Details
        </p>

        <form action="">
          <input placeholder="Delivery to door" type="text" /> <br />
          <input placeholder="Street " type="text" /> <br />
          <input placeholder="Flat" type="text" /> <br />
          <input placeholder="Business Name" type="text" /> <br />
          <input placeholder="Add Delevery to instructor" type="text" /> <br />
          <input type="submit" value="save & continew" />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
