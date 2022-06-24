import React from "react";

function Purchase({ purchase }) {
  return (
    <div className="holder">
      <h3>{purchase.castle.title}</h3>
      <h5>{purchase.castle.location}</h5>
      <img
        src={purchase.castle.image}
        alt="castle"
        className="users-castle-img"
      />
    </div>
  );
}

export default Purchase;
