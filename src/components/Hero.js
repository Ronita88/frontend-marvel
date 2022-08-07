import phone from "../assets/img/phone.png";

import "../css/hero.css";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="hero-text">
        <h2>LET'S DIVE IN NOW !</h2>
        <h3>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas
        </h3>
      </div>
      <img src={phone} />
    </div>
  );
};

export default Hero;
