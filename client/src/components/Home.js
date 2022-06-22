import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import logoImg from "../images/logo.png";

function Home() {
  const [castles, setCastles] = useState([]);

  // ------------ FETCH AREA  ------------  //
  useEffect(() => {
    fetch("http://localhost:3000/castles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCastles)
      .catch((err) => console.log("💀 GET INDEX CASTLES", err));
  }, []);

  console.log("🏰 Castles Array:", castles);
  // ------------ FETCH AREA  ------------  //

  // const renderCastles = tempArray.map((castle, idk) => {
  //   return (
  //     <div className="render-castles">
  //       <h2>{castle.title}</h2>
  //       <h3>{castle.location}</h3>
  //       <h4>${castle.price}</h4>
  //       <img src={castle.image} alt="${castle.title}" className="castle-imgs" />
  //       <p>{castle.description}</p>
  //       <button>Purchase</button>
  //       <button>🤍</button>
  //     </div>
  //   );
  // });
  return (
    <div>
      <NavBar />
      <div className="home-logo-text">
        The Castle Shop © <img src={logoImg} alt="logo" className="logo" />
      </div>
      {/* <div className="castle-holder">{renderCastles}</div> */}
    </div>
  );
}

export default Home;
