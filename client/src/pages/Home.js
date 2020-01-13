import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="website_wrapper">
      <div className="section-1" id="mainSlider">
        <div className="mainSlider__inner_wrapper">
          <h1>Konrad Gnat</h1>
          <h2>Web Developer</h2>
          <h2>JavaScript, React, LAMP, Symfony, Node</h2>
        </div>
      </div>
      <section id="projects">
        <div className="container-fluid">
          <div className="row titles">
            <div className="col-xs-12">
              <h2 id="projects-title">Projects</h2>
            </div>
          </div>
        </div>
        <div className="portfolio-wrapper">
          <ul>
            <li className="portfolio-item" onclick="">
              <div className="imgWrap">
                <div className="imgDescription">
                  <h2>TankBattalion.xyz</h2>
                  <p>A 2D game built from scratch with vanilla JavaScript and the canvas element. It includes
                    a single player and live multi player modes. Play it at the link below!<br/>
                  Node, Express, Jade, Hosted on Digital Ocean</p> <br/>
              <p>
                <a target="_blank" href="https://tankbattalion.xyz" className="button" style={{color: 'orange'}}>[Temporarily Unavailable]</a> | <a
                target="_blank" href="https://github.com/kon-rad/tank-battalion" className="button">See the Code</a>
              </p>
        </div>
    </div>
  <img
    data-webp="dist/images/webp/tank.webp" src="dist/images/tank.png" alt=""
       className="img-responsive" />
  </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>readsplanet.com A NodeJS, React, MongoDB App</h2>
        <p>Features user sign in, create, edit, delete posts and comments. Follow users and edit profile. Passport library for
          authentication and EJS templating engine. Data on books is received from Google Books
          API.<br/>
        Node, Express, React, Flow, Enzyme, MongoDB</p> <br/>
    <p><a target="_blank" href="https://readsplanet.com" className="button">Visit Page</a> | <a
      target="_blank" href="https://github.com/kon-rad/readbooks" className="button">Github</a></p>
  </div>
</div>
  <img
    data-webp="dist/images/webp/read-books.webp" src="dist/images/read-books.png" alt=""
       className="img-responsive" />
  </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>CoherentBreathing.xyz</h2>
        <p>Practice coherent breathing technique</p>
        <ul>
          <li>Node</li>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>PassportJS</li>
          <li>Deployed to Digital Ocean</li>
        </ul>
      <br/>
      <p>
        <a target="_blank" href="https://coherentbreathing.xyz" className="button">Visit Page</a> | <a
        target="_blank" href="https://github.com/kon-rad/coherentBreathingApp" className="button">See the Code</a>
      </p>
    </div>
  </div>
  <img
    data-webp="dist/images/webp/coherentBreathing.webp" src="dist/images/coherentBreathing.png" alt=""
       className="img-responsive" />
  </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>AddMP3.fun</h2>
        <p>Download MP3 file of YouTube videos, specify playback rate from 0.5 to 2.0. Built from scratch, no CRA, webpack configured from scratch</p>
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Deployed to Digital Ocean</li>
        </ul>
      <br/>
      <p><a target="_blank" href="#" className="button"><span style={{color: 'orange'}}>[Temporarily Unavailable]</span></a> | <a
        target="_blank" href="https://github.com/kon-rad/addMP3.fun" className="button">See the Code</a></p>
    </div>
  </div>
  <img
    data-webp="dist/images/webp/addmp3.webp" src="dist/images/addmp3.png" alt=""
       className="img-responsive" />
  </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>GifNotes</h2>
        <p>A winning submission completed at GIF Hack 2017 in Palo Alto. Creates a gif from a
          specified segment of video from a YouTube URL.<br/>
        Node, Express, jQuery, JavaScript, HTML5, CSS3</p> <br/>
    <a target="_blank" href="https://github.com/kon-rad/GIFHack2017"
       className="button">Github</a>
    <a target="_blank" href="https://secret-tundra-36331.herokuapp.com/"
       className="button">Live Site</a>
  </div>
</div>
  <img
       src="dist/images/gifnotes.png" alt=""
       className="project-img img-responsive" />
  </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>CryptoPrices.space</h2>
        <p>This is a simple app that shows latest crypto currency prices.
          This could have been built with just a front end, but it was an interesting exercise in developing with Django<br/>
        Django, React, Coinbase API</p> <br/>
    <a target="_blank" href="http://cryptoprices.space"
       className="button">Live Site</a> |
    <a target="_blank" href="https://github.com/kon-rad/cryptoPrices.Space"
       className="button">Github</a>
  </div>
</div>
<img
  data-webp="dist/images/webp/cryptoprices.webp" src="dist/images/cryptoprices.png" alt=""
className="project-img img-responsive" />
    </li>
  <li className="portfolio-item" onclick="">
    <div className="imgWrap">
      <div className="imgDescription">
        <h2>MatchUpGame.xyz</h2>
        <p>React app. Hosted on Digital ocean with nodejs back end.<br/>
        React, Node</p> <br/>
    <a target="_blank" href="http://matchupgame.xyz"
       className="button">Live Site</a> |
    <a target="_blank" href="https://github.com/kon-rad/matchupgame"
       className="button">Github</a>
  </div>
  </div>
  <img
    data-webp="dist/images/webp/matchupgame.webp" src="dist/images/matchupgame.png" alt=""
       className="project-img img-responsive" />
  </li>
  </ul>
</div>
<div className="additional-projects-conatiner">
    <h3>Client Projects</h3>
  <p>Corporate Kneads:
    <a className="link--blue" href="https://corporatekneads.com/">live site</a>
  </p>
  <p>Nashville Drum Tracks:
    <a className="link--blue" href="http://nashvilledrumtracks.com">live site</a>
    </p>
</div>
<div className="additional-projects-conatiner">
    <h3>More Projects</h3>
  <p> Alexa Skill - 'Martha Gellhorn Quotes'
    <a className="link--blue"
       href="https://www.amazon.com/dp/B07B2Q8ZH7/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1519877246&sr=1-1&keywords=martha+gellhorn">link to
      skill on Amazon</a>
    |
    <a className="link--blue" href="https://github.com/kon-rad/MarthaGellhornQuotes-AlexaSkill">github</a>
  </p>
  <p>Scripturally Sound: Code for the Kingdom 2017 Hackathon, Nashville
  <a className="link--blue" href="https://github.com/kon-rad/c4tk">github</a>
</p>
<p>Spaceship Shootout: Mad Hacks 2017 Hackathon Project, Madison
  <a className="link--blue" href="https://github.com/kon-rad/spaceships-madhacks-2017">github</a>
</p>
<p>Live Sports 360 VR App: Developer Week 2017 Hackathon, San Francisco - Winner Best Video Streaming App
  <a className="link--blue" href="https://github.com/kon-rad/developerWeekHackathon2017">github</a>
</p>
<p>FireMixtapeMd: Uncommon Hacks 2017 Hackathon, Chicago
  <a className="link--blue" href="https://github.com/kon-rad/uncommonHackathon">github</a>
</p>
</div>
</section>
  <section>
  <div className="container-fluid">
    <div className="row cont" id="about">
    <div className="col-xs-12 titles">
    <h2> About </h2>
</div>
</div>
</div>
<div className="container-fluid">
    <div className="row cont section-2">

    <div className="col-xs-12 col-md-8 col-md-offset-2 displayBox">
    <div className="row">
    <div className="col-xs-12 col-sm-6">
    <div className="about__image_wrapper">
    <img className="about__image" src="dist/images/pier39.JPG" alt="" />
</div>
</div>
  <div className="col-xs-12 col-sm-6 textBox textContent">
                            <span className="textContent">
                                My mission is to engineer solutions to make the world a better place for everyone.
                                I made my way to programming through environmental studies, chemistry and then literature. I have been driven by a curiosity
                                and a passion for learning. Among my greatest intellectual hero's are John Muir, Leonardo Da Vinci, John Steinbeck
                                and Kahlil Gibran. On any given day I can be found developing applications using JavaScript,
                                React, PHP and Node.
                            </span>
  <br/><br/>
  <div>
    <span className="uppercase">Languages</span><br />
    <ul style={{listStyle: 'none'}}>
      <li><i>expertise:</i> JavaScript, PHP, SQL</li>
      <li><i>familiar:</i> C, Java, Python</li>
    </ul>
  </div>
  <br />
    <span className="uppercase">Frameworks</span>
    <br />
    Node, Symfony, React, jQuery, Express
    <br />
      <br />
        <span className="uppercase">Technologies</span><br />
        CSS3/HTML5, Git, Vim, MySQL, MongoDB, Linux
      </div>
    </div>
  </div>
  </div>
</div>
</section>

  <section>
    <div className="container-fluid">
      <div className="cont section-3">

        <div className="row" id="contact">
          <div className="col-xs-12 titles">
            <h2>Contact</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <form className=" displayBox form-horizontal"
                  action="https://formspree.io/kgnat77@gmail.com"
                  method="POST">
              <fieldset>
                <div className="form-group">
                  <label for="message_name" className="col-xs-4 col-md-4 control-label">Name</label>
                  <div className="input-group">
                    <input name="message_name" placeholder="Name" className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="message_email" className="col-xs-4 col-md-4 control-label">Email</label>
                  <div className="input-group">
                    <input name="message_email" placeholder="E-Mail Address" className="form-control"
                           type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="message_content" className="col-xs-4 col-md-4 control-label">Message</label>
                  <div className="input-group">
                                        <textarea name="message_content" cols="10" rows="6" placeholder="Message"
                                                  className="form-control" type="text"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label"></label>
                  <div className="col-md-4">
                    <input type="submit" value="send" className="submit-button" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Home;
