import React from "react";
import NavBar from "./NavBar";

function Account() {
  return (
    <div>
      <NavBar />

      <div className="account-container">
        <div className="purchased">
          <h2>Purchased Castles:</h2>
        </div>
        <div className="liked">
          <h2>Saved Castles:</h2>
        </div>
      </div>
    </div>
  );
}

export default Account;
