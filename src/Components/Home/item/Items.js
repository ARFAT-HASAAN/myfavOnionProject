import React from "react";

const Items = (props) => {
  //   console.log(props.items);
  const { title, pera, picture, price } = props.items;
  return (
    <div class="col">
      <div class="card">
        <img src={picture} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{pera}</p>
          <h5> ${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Items;
