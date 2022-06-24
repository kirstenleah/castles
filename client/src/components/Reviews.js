import React from "react";

function Reviews({ purchase }) {
  return (
    <div className="holder">
      <h3>{purchase.castle.title}</h3>
      <h4>Owner: {purchase.user.username}</h4>
      <h5>{purchase.castle.location}</h5>

      <img
        src={purchase.castle.image}
        alt="castle"
        className="users-castle-img"
      />
    </div>
  );
}

export default Reviews;
