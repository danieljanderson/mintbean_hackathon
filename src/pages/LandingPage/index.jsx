import React from 'react';
import { useHistory } from 'react-router-dom'
import './styles.css';
import Logo from '../../assets/img/21Logo.png';
import MintJackLogo from '../../assets/img/mintJackLogoLg2.png';
import BlackJackValues from '../../assets/img/Blackjack-values.png';
import FallingChipsCard from "../../assets/img/fallingChipsCards2.png";
import Placeholder from '../../assets/img/placeholder.png';
import NonsoDP from "../../assets/img/chinonsoCard.png";
import DanielDP from "../../assets/img/danielCard.jpg";
import TamiDP from "../../assets/img/TamiCard.png";
import PortfolioIcon from "../../assets/img/portfolioIcon.svg";

const LandingPage = () => {
const history = useHistory()
  const handlePlayGame = () => {
    history.push("/home");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
        <div className="container-fluid">
          <a className="navbar-brand logoTitle" href="/">
            <img src={Logo} alt="" width="40" height="35" className="d-inline-block align-text-top" />
            MintJack
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rules">Rules</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#demo">Demo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#developers">Developers</a>
              </li>
            </ul>
            <button className="nav-link playButton" type="button" onClick={handlePlayGame}>PlayGame</button>
          </div>
      </nav>

      <div className="container1" id="home">
        <div className="container-fluid welcome">
          <div className="row">
            <div className="col-lg-3">
              <h1>Welcome to... </h1>
            </div>
            <div className="col-lg-6">
              <img src={MintJackLogo} alt="" />
              <p className="tagline">...a game of logic, luck and skill.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container2" id="rules">
        <div>
          <h3>How to Play</h3>
        </div>

        <div className="container-fluid howToPlay">
          <div className="row">
            <div className="col-lg-6">
              <h4>OBJECT OF THE GAME</h4>
              <p>Each player attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.</p>
              <h4>CARD VALUES & SCORING</h4>
              <p>It is up to each individual player if an ace is worth 1 or 11. Face cards are 10 and any other card is its pip value.</p>
              <h4>BETTING</h4>
              <p>Before the deal begins, each player places a bet, in chips, in front of them. Minimum bet is $1 maximum is $1000.</p>
            </div>
            <div className="col-lg-6">
              <img src={BlackJackValues} className="valueImg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-12 theDeal">
          <h4>THE DEAL</h4>
          <p>Each player starts with two cards, the dealer gives one card face up to each player in rotation clockwise, and then one card face up to themselves. Another round of cards is then dealt face up to each player, but the dealer takes the second card face down.</p>
        </div>
      </div>

      <div className="container3">
        <div>
          <h3>Type of Plays</h3>
        </div>

        <div className="container-fluid howToPlay">
          <div className="row">
            <div className="col-lg-6">
              <img src={FallingChipsCard} alt="" className="fallingChipsCard"/>
            </div>
            <div className="col-lg-6 px-3">
              <h4>HIT & STAND</h4>
              <p>To "hit" is to ask for another card.  Players can hit as many times as they want but will automatically be out of the game if they go over 21. To "stand" is to hold your total and end your turn</p>
              
              <h4>DOUBLING DOWN</h4>
              <p>"Doubling Down" is like a hit, but only when the bet is doubled. When a player doubles down they can only "hit" once and will only receive one card.  Note: players can also double down on a split</p>
              <h4>MINTJACK & 21</h4>
              <p>MintJack pays out 1.5 the amount of the players bet with a two card combo of an Ace and 10.  21 is achieved by adding mulitple cards up to 21 and pays out double</p>
              <h4>DEALER</h4>
              <p>The dealer has to continue to hit until the cards total 17 or higher</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container4" id="demo">
        <div>
          <h3>Game Demo</h3>
        </div>
        <div className="container-fluid howToPlay">
          <div className="row">
            <div className="col-lg-6">
              <h4>MintJack in Action</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga laboriosam aspernatur voluptate dolor neque quis porro sint. Ut debitis, velit cum nihil quidem omnis sed perferendis ad. Voluptas, culpa aspernatur.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga suscipit dolorum ut magnam ea delectus deleniti iusto esse, vel, ullam debitis aliquam molestias reiciendis eum commodi quo cupiditate. Distinctio, labore.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quam tempore, maxime distinctio tempora magnam! Quis exercitationem cum officiis adipisci debitis natus omnis inventore odit iste enim! Cumque, modi ipsa!</p>
            </div>
            <div className="col-lg-6 px-3">
              <img src={Placeholder} alt="" className="placeholder"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container5" id="developers">
        <div>
          <h3 className="meet">Meet the Developers</h3>
        </div>

        <div className="container-fluid developersWrapper">
          <div className="padding row d-flex justify-content-center">
            <div className="col-sm-3 deck">
              <div className="card" style= {{ width: "16rem"}}>
                <img
                  className="developers card-img-top"
                  src={NonsoDP}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Chinonso Igwe</h5>
                  <p className="card-text">
                    A Software Engineer with an eye for design. He specializes in modular systems, interface design, frontend web development with tools such as ReactJS, Redux, Next.js, Ant Design, TailwindCSS, and with backend technologies such as NodeJS, and GraphQL.
                  </p>
                  <div className="social-links">
                    <a href="https://github.com/chiboycalix" target="_blank" rel="noreferrer">
                      <img
                        src="https://rrc-app.herokuapp.com/githubIcon.svg"
                        alt="github"
                        className="social-emblem"
                      /></a>
                    <a
                      href="https://www.linkedin.com/in/igwe-chinonso/"
                      target="_blank" rel="noreferrer"
                    >
                      <img
                        src="https://rrc-app.herokuapp.com/linkedInIcon.svg"
                        alt="linkedin"
                        className="social-emblem"
                      /> </a
                    ><a href="https://chiboycalix.github.io/chinonso.dev/" target="_blank" rel="noreferrer">
                      <img
                        src={PortfolioIcon}
                        alt="portfolio"
                        className="social-emblem"
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-sm-3 deck">
              <div className="card" style= {{ width: "16rem"}}>
                <img
                  className="developers card-img-top"
                  src={TamiDP}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Tami Hughes</h5>
                  <p className="card-text">
                    After earning her degree from the University of Arizona, she quickly moved up the ranks to a director role in Hospitality.  With a passion for growth and learning, she found a love for programming late in life and took the leap by starting a new career as a Software Engineer.
                  </p>
                  <div className="social-links">
                    <a href="https://github.com/Tamsauce" target="_blank" rel="noreferrer">
                      <img
                        src="https://rrc-app.herokuapp.com/githubIcon.svg"
                        alt="github"
                        className="social-emblem"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tami-hughes-58074a72/"
                      target="_blank" rel="noreferrer"
                    >
                      <img
                        src="https://rrc-app.herokuapp.com/linkedInIcon.svg"
                        alt="linkedin"
                        className="social-emblem"
                      />
                    </a>
                    <a href="https://www.tamsauce.com" target="_blank" rel="noreferrer">
                      <img
                        src={PortfolioIcon}
                        alt="portfolio"
                        className="social-emblem"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3 deck">
              <div className="card"  style= {{ width: "16rem"}}>
                <img
                  className="developers card-img-top"
                  src={DanielDP}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Daniel Anderson</h5>
                  <p className="card-text">
                    Having obtained a degree in Mass Media Production from the University of Akron he found a role in retail.  Knowing this wasn’t his passion, he investigated a potential career in computer science which led to learning Python and earning a bootcamp certification.
                  </p>

                  <div className="social-links">
                    <a href="https://github.com/danieljanderson" target="_blank" rel="noreferrer">
                      <img
                        src="https://rrc-app.herokuapp.com/githubIcon.svg"
                        alt="github"
                        className="social-emblem"
                      /></a>
                    <a
                      href="https://www.linkedin.com/in/danieljamesanderson/"
                      target="_blank" rel="noreferrer"
                    >
                      <img
                        src="https://rrc-app.herokuapp.com/linkedInIcon.svg"
                        alt="linkedin"
                        className="social-emblem"
                      /></a>
                    <a href="https://danieljanderson.github.io/" target="_blank" rel="noreferrer">
                      <img
                        src={PortfolioIcon}
                        alt="portfolio"
                        className="social-emblem"
                      />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="navbar navbar-inverse">
          <div className="container-fluid d-flex justify-content-evenly">

            <p className="copyright">Copyright &copy; Team 21 MintJack 2021</p>
            <button className="blog"><a href="/">BLOG - Mission:Impossible</a></button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LandingPage;
