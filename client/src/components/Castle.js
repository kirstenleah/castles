import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Castle({ castle, user, buyCastle }) {
  const history = useHistory();
  function buyCastle() {
    // console.log("You are buying", castle.title);
    let data = { castle_id: castle.id, user_id: user.id };
    // ----------- FETCH AREA -------------- //
    fetch("/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("Successfully added purchase:", data);

        history.push("/account");
      })
      .catch((error) => {
        console.error("Error adding new purchase:", error);
      });

    // ------------ FETCH AREA ------------ //
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
