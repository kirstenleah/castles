import React from "react";
import NavBar from "./NavBar";

function Account({ purchases }) {
  // console.log(purchases);
  const renderPurchases = purchases.map((purchase, idx) => {
    return (
      <div key={idx}>
        <h3>{purchase.castle.title}</h3>
        <h5>{purchase.castle.location}</h5>
        <img
          src={purchase.castle.image}
          alt="castle"
          className="users-castle-img"
        />
      </div>
    );
  });

  return (
    <div>
      <NavBar />

      <div className="account-container">
        <div className="purchased">
          <h2>Purchased Castles:</h2>
          {renderPurchases}
        </div>
        {/* <div className="liked">
          <h2>Saved Castles:</h2>
        </div> */}
      </div>
    </div>
  );
}

export default Account;
