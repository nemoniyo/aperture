import React from "react";
import "./App.css";
import Logo from "./assets/IMAGE.png";
import Logo1 from "./assets/Logo-Group-3.png";
import Logo2 from "./assets/IMAGE (9).png";
import Logo3 from "./assets/IMAGE (10).png";
import Logo4 from "./assets/IMAGE (11).png";
import Logo5 from "./assets/IMAGE (12).png";

import Param1 from "./assets/Frame.png";
import Param2 from "./assets/Frame (1).png";
import Param3 from "./assets/Frame (2).png";
import Param4 from "./assets/Frame (3).png";

import twiter from "./assets/Frame (4).png";
import instagram from "./assets/Frame (5).png";
import facebook from "./assets/Frame (6).png";
import blackcircle from "./assets/Frame (7).png"

export default function App() {
  return (<>
  {/* Header */}
  <header className="header">
    <nav className="navbar">
      <div>
      <img src={Logo} alt="LogoSite" />
      </div>
      <div className="navList">
        <span>Business areas</span>
        <span>Featured images</span>
        <span>Gear cage</span>
        <span>Contact</span>
      <button className="navButton">Get template</button>
      </div>
    </nav>
    {/* Section 1 */}
    <section className="section1">
      <div className="textContent1">
        <span>PHOTOGRAPHER & FILMMAKER</span>
        <h1>Aperture Studios</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in <br />
          eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum <br />
          nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id <br />
          rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </span>
      <img src={Param1} alt="" className="param1"/>
      </div>
    </section>
  </header>

  {/* Main */}
  <main>
    {/* Section 2 */}
    <section className="section2">
      <div className="textContent2">
        <h1>What we do.</h1>
        <span>The areas that we're specialized in.</span>
      </div>
      <div className="cards">
      <div className="card card1">
        <div className="textcard">
        <span>PRODUCT PHOTOGRAPHY <br /><br /></span>
        <span>
          Cras commodo consequat orci, in convallis risus egestas non. Nulla <br />
          efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus 
          quam.
        </span>
        <button>
          <img src={blackcircle} alt="" />
          Read more
        </button>
        </div>
      </div>
      <div className="card card2">
        <div className="textcard">
        <span>PRODUCT PHOTOGRAPHY <br /><br /></span>
        <span>
          Cras commodo consequat orci, in convallis risus egestas non. Nulla <br />
          efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus 
          quam.
        </span>
        <button>
          <img src={blackcircle} alt="" />
          Read more
        </button>
        </div>
      </div>
      <div className="card card3">
        <div className="textcard">
        <span>PRODUCT PHOTOGRAPHY <br /><br /></span>
        <span>
          Cras commodo consequat orci, in convallis risus egestas non. Nulla <br />
          efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus 
          quam.
        </span>
        <button>
          <img src={blackcircle} alt="" />
          Read more
        </button>
        </div>
      </div>
      <div className="card card4">
        <div className="textcard">
        <span>PRODUCT PHOTOGRAPHY <br /><br /></span>
        <span>
          Cras commodo consequat orci, in convallis risus egestas non. Nulla <br />
          efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus 
          quam.
        </span>
        <button>
          <img src={blackcircle} alt="" />
          Read more
        </button>
        </div>
      </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="section3">
      <div className="textContent3">
        <span style={{color: "white"}}>Sunset at Mount Fuji <br /></span>
        <span>
          Duis tristique sed lorem a vestibulum. Cras <br />
          commodo consequat orci, in convallis <br />
          risus egestas non. <br />
        </span>
      <img src={Param2} alt="" className="param2" />
      </div>
    </section>

    {/* Section 4 */}
    <section className="section4">
      <aside className="aside1">
        <div className="textContext4">
          <span>The Gear cage <br /> <br /></span>
          <h1>The tools that we use. <br /> <br /></h1>
          <span>
            The say that "no place is boring if you've had a good night's sleep and <br />
            have a pocket full of unexposed film". While we don't shoot (a lot) of film <br />
            these days — these are the tools that we actually use everyday to <br />
            capture the amazing things around us. <br /> <br />
          </span>
          <button>
            <img src={blackcircle} alt="" />
            Check it out
          </button>
        </div>
      </aside>
      <aside className="aside2">
        <img src={Param3} alt="" className="param3" />
      </aside>
    </section>

    {/* Section 5 */}
    <section className="section5">
      <div className="textContent5">
        <span style={{color: "white"}}>Monstera Leafs <br /></span>
        <span>
          Vestibulum sit amet urna turpis. Mauris <br />
          euismod elit et nisi ultrices, ut faucibus <br />
          orci tincidunt. <br />
        </span>
      <img src={Param4} alt="" className="param4" />
      </div>
    </section>

    {/* Section 6 */}
    <section className="section6">
      <div className="textContent6">
        <h1>Past clients</h1>
        <span>Trusted by your favourite companies</span>
      </div>
      <div className="logoPastClients">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
      </div>
    </section>

    {/* Section 7 */}
    <section className="section7">
      <div className="textContent7">
        <span style={{color: "white"}}>Star fall in the Himalayas <br /></span>
        <span>
          Nulla rhoncus feugiat eros quis <br />
          consectetur. Morbi neque ex, <br />
          condimentum dapibus congue et, <br />
          vulputate ut ligula. <br />
        </span>
      <img src={Param4} alt="" className="param4" />
      </div>
    </section>

    {/* Section 8 */}
    <section className="section8">
      <div className="textContent8">
        <h1>
          Need help with photography <br />
          or videography?
        </h1>
        <span>We're here for you! <br /></span>
        <button>
          <img src={blackcircle} alt="" className="buttonSec8"/>
          Get in touch
        </button>
      </div>
    </section>
  </main>
  
  {/* Footer */}
  <footer className="footer">
    <div className="asides">
    <aside className="aside3">
      <div>
      <img src={Logo} alt="" />
      </div>
      <span>Photographers & videographers capturing the world around us.</span>
    </aside>
    <aside className="aside4">
      <div className="al">
        <span>BUSINESS AREAS</span>
        <span>Product Photography</span>
        <span>Architecture Photography</span>
        <span>Drone Photography</span>
        <span>Wildlife Photography</span>
      </div>
      <div className="la">
        <span>Pages</span>
        <span>Gear cage</span>
        <span>Featured images</span>
        <span>Contact</span>
        <span>Style guide</span>
        <span>Instructions</span>
        <span>Changelog</span>
      </div>
    </aside>
    </div>
    <div className="solid">
      <div className="li">
        <h1>Subscribe to our newsletter</h1>
        <span>Read about all the things we do.</span>
      </div>
      <div className="il">
        <button></button>
      </div>
    </div>
    <div className="foots">
      <span>© Aperture Photography, Inc. All rights reserved.</span>
      <div className="logos">
        <img src={twiter} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
    </div>
  </footer>
  </>)
}