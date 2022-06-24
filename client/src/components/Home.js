import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Castle from "./Castle";
import logoImg from "../images/logo.png";

function Home({ user }) {
  const [castles, setCastles] = useState([]);

  // ------------ FETCH AREA ------------ //
  useEffect(() => {
    fetch("/castles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCastles)
      .catch((err) => console.log("💀 GET INDEX CASTLES", err));
  }, []);
  // console.log("🏰 Castles Array:", castles);

  const renderCastles = castles.map((castle, idx) => {
    if (castle.is_sold !== true) {
      return <Castle castle={castle} key={idx} user={user} />;
    }
  });

  return (
    <div>
      <NavBar user={user} />
      <div className="home-logo-text">
        The Castle Shop © <img src={logoImg} alt="logo" className="logo" />
      </div>
      <div className="castle-holder">{renderCastles}</div>
    </div>
  );
}

export default Home;
