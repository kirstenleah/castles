import NavBar from "./NavBar";
import logoImg from "../images/logo.png";

function Home({ castles }) {
  const renderCastles = castles.map((castle, idx) => {
    return (
      <div className="render-castles" key={idx}>
        <h2>{castle.title}</h2>
        <h3>{castle.location}</h3>
        <h4>${castle.price}</h4>
        <img src={castle.image} alt="castle" className="castle-imgs" />
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
