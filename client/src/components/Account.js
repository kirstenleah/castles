import React, { useState, useEffect } from "react";
import AcNavBar from "./AcNavBar";
import Purchase from "./Purchase";

function Account({ user }) {
  const [purchases, setPurchases] = useState([]);
  // ------------ FETCH AREA ------------ //
  useEffect(() => {
    fetch("/purchases", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setPurchases)
      .catch((err) => console.log("💀 GET INDEX PURCHASES", err));
  }, []);
  console.log("💰 Purchases Array:", purchases);
  // ------------ FETCH AREA ------------ //

  const renderPurchases = purchases.map((purchase, idx) => {
    if (purchase.user.id === user.id) {
      return <Purchase purchase={purchase} key={idx} />;
    }
  });

  return (
    <div>
      <AcNavBar user={user} />

      <div className="account-container">
        <div className="purchased">
          <h2>{user.username}'s Castles:</h2>
          {renderPurchases}
        </div>
      </div>
    </div>
  );
}

export default Account;
