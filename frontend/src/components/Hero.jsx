import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <h1>
          AI Powered Smart Placement Portal
        </h1>

        <p>
          Connect Students, Recruiters and Colleges
          through a smart campus placement ecosystem.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="student"
        />
      </div>

    </section>
  );
}

export default Hero;