import React from "react";

function Castle({ castle, purchaseCastle }) {
  function buyCastle() {
    purchaseCastle(castle);
  }

  return (
    <div className="render-castles">
      <h2>{castle.title}</h2>
      <h3>{castle.location}</h3>
      <h4>${castle.price}</h4>
      <img src={castle.image} alt="castle" className="castle-imgs" />
      <p>{castle.description}</p>
      <button onClick={buyCastle}>Purchase</button>
    </div>
  );
}

export default Castle;
