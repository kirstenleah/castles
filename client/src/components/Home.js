import NavBar from "./NavBar";
import Castle from "./Castle";
import logoImg from "../images/logo.png";

function Home({ castles, purchaseCastle }) {
  const renderCastles = castles.map((castle, idx) => {
    return <Castle castle={castle} key={idx} purchaseCastle={purchaseCastle} />;
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
