import React from "react";
import NavBar from "./NavBar";
import logoImg from "../images/logo.png";

function Home() {
  const tempArray = [
    {
      image:
        "https://www.celticcastles.com/remote.axd/media.celticcastles.com/Apps/uploads/1eb050e6-83c1-46b0-92da-b73c10b7ea99.jpg?width=750&height=525&quality=30&mode=crop&upscale=true",
      title: "Highlands Castle",
      price: 90000000000,
      location: "Bolton, New York, USA",
      description:
        "Highlands Castle is located in Bolton Landing in upstate New York, offering views of Lake George and the Adirondack Mountains. Accommodation includes a seating area and, in some cases, a dining area, terrace and kitchen. Guests can enjoy swimming, boating, kayaking, hiking, golf, tennis, horse-riding and diving. The area is popular for skiing and snowboarding in the winter.",
    },
    {
      image:
        "https://www.toptravelsights.com/wp-content/uploads/2020/09/Newschwanstein-from-Marienbrucke.jpg",
      title: "Neuschwanstein Castle",
      price: 180000000000,
      location: "Schwangau, Germany",
      description:
        "A 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of Richard Wagner. Ludwig chose to pay for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. Construction began in 1869, but was never fully completed.",
    },
    {
      image:
        "https://www.travelsewhere.net/wp-content/uploads/2016/06/DSC_1056-8.jpg",
      title: "Corvin Castle",
      price: 1320000000,
      location: " Hunedoara, Romania",
      description:
        "As one of the most important properties of John Hunyadi, the castle was transformed during his reign. It became a sumptuous home, not only a strategically enforced point. With the passing of the years, the masters of the castle had modified its look, adding towers, halls and guest rooms.",
    },
  ];

  const renderCastles = tempArray.map((castle, idk) => {
    return (
      <div className="render-castles">
        <h2>{castle.title}</h2>
        <h3>{castle.location}</h3>
        <h4>${castle.price}</h4>
        <img src={castle.image} alt="${castle.title}" className="castle-imgs" />
        <p>{castle.description}</p>
        <button>Purchase</button>
        <button>🤍</button>
      </div>
    );
  });
  return (
    <div>
      <NavBar />
      <div className="home-logo-text">
        The Castle Shop © <img src={logoImg} alt="logo" className="logo" />
      </div>
      <div className="castle-holder">{renderCastles}</div>
    </div>
  );
}

export default Home;
