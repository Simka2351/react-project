import './HomePage.scss'
import base from './img/Base.png'
import left from './img/left.jpg'
import right from './img/Right.png'
import right1 from './img/Photo.jpg'
import switch1 from './img/Switch.jpg'
import switch2 from './img/Switch2.jpg'
import switch3 from './img/Switch3.jpg'
import customer from './img/customer.svg'
import rating from './img/Rating.svg'
import letterbox from './img/letterbox.svg'
import mobile from './img/mobile-version.png'
import check from './img/check.svg'

export const HomePage = () => {
  return (
    <>
      <div className="line"></div>
      <div className="container2">
        <h1>
          Your Supercharged Design <br />
          Workflow.
        </h1>
        <p>
          We’ve been told it is possible to revolutionize the payment industry.
          We have not reinvented the wheel, we <br />
          decided to build upon it - successfully.
        </p>
        <div className="buttons2">
          <a href="" className="button3">
            <button>Get Started</button>
          </a>
          <a href="" className="button4">
            <button>Contact Us</button>
          </a>
        </div>
      </div>
      <div className="container3">
        <picture>
          <source
            media="(max-width: 901px)"
            src={mobile}
          />
          <img className="image1" src={base} alt="" />
        </picture>
      </div>
      <div className="container4">
        <div className="section2">
          <div className="text">
            <h2>Our Channels Review</h2>
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
        </div>

        <div className="container-grid">
          <div className="boxes-grid"></div>
        </div>
      </div>
      <div className="button-reveal">
        <a href="" className="button-r">
          <button>Reveal all channels</button>
        </a>
      </div>
      <div className="container5">
        <div className="section4">
          <h1>Redefining Product Features</h1>
          <p>
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </p>
        </div>
      </div>
      <div className="container6">
        <div className="industry">
          <div className="text6">
            <h3>1% OF THE INDUSTRY</h3>
            <h1>
              Demonstrate branding <br />
              consequently think outside the <br />
              box and beyond.
            </h1>
            <p>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna
              <br />
              vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
              <br />
              tellus faucibus mauris quisque mauris in.
            </p>
            <a className="button6" href="#">
              <button>Start Now</button>
            </a>
          </div>
        </div>
        <div className="right">
          <img
            src={right}
            alt=""
            className="transaction"
          />
        </div>
      </div>
      <div className="container7">
        <div className="container7-1">
          <div className="left">
            <img src={left} alt="" />
          </div>
          <div className="text7">
            <h3>1% OF THE INDUSTRY</h3>
            <h1>
              Demonstrate branding <br />
              consequently think outside the <br />
              box and beyond.
            </h1>
            <p>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna
              <br />
              vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
              <br />
              tellus faucibus mauris quisque mauris in.
            </p>
            <a className="button7" href="#">
              <button>Start Now</button>
            </a>
          </div>
        </div>
      </div>
      <div className="container8">
        <div className="text8">
          <h1>
            Demonstrate branding <br />
            consequently think outside
          </h1>
          <p>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            <br />
            vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
            <br />
            tellus faucibus mauris quisque mauris in.
          </p>
          <div className="check">
            <div className="check1">
              <img src={check} alt="" />
              <p>Enterprise-grade security</p>
            </div>
            <div className="check1">
              <img src={check} alt="" />
              <p>99.9% guaranteed uptime SLA</p>
            </div>
            <div className="check1">
              <img src={check} alt="" />
              <p>Designated customer success team</p>
            </div>
          </div>
          <a className="button8" href="#">
            <button>Start Now</button>
          </a>
        </div>
        <div className="right1">
          <img src={right1} alt="" />
        </div>
      </div>
      <div className="container9">
        <div className="section5">
          <h2>Latest Blog Posts</h2>
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate <br />
            one-to-one customer service with robust ideas.
          </p>
        </div>
      </div>
      <div className="container10">
        <div className="box1">
          <img className="switch" src={switch1} alt="" />
          <div className="text-box1">
            <h3>Article 25 Apr. 2022</h3>
            <h2>
              Organize your digital assets <br />
              with a new methodology.
            </h2>
            <p>
              Leverage agile frameworks to provide a <br />
              robust synopsis for high level overviews. <br />
              Iterative approaches to corporate.
            </p>
          </div>
          <a href="#" className="button9">
            Learn more
          </a>
        </div>
        <div className="box1">
          <img className="switch" src={switch2} alt="" />
          <div className="text-box1">
            <h3>Article 25 Apr. 2022</h3>
            <h2>
              Organize your digital assets <br />
              with a new methodology.
            </h2>
            <p>
              Leverage agile frameworks to provide a <br />
              robust synopsis for high level overviews. <br />
              Iterative approaches to corporate.
            </p>
          </div>
          <a href="#" className="button9">
            Learn more{" "}
          </a>
        </div>
        <div className="box1">
          <img className="switch" src={switch3} alt="" />
          <div className="text-box1">
            <h3>Article 25 Apr. 2022</h3>
            <h2>
              Organize your digital assets <br />
              with a new methodology.
            </h2>
            <p>
              Leverage agile frameworks to provide a <br />
              robust synopsis for high level overviews. <br />
              Iterative approaches to corporate.
            </p>
          </div>
          <a href="" className="button9">
            Learn more
          </a>
        </div>
      </div>
      <div className="container9">
        <div className="section5">
          <h2>What Our Customers Say</h2>
          <p>
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. <br />
            Bring to the table win-win strategies to ensure domination.
          </p>
        </div>
      </div>
      <div className="customers">
        <div className="box3">
          <img
            className="customer-1"
            src={customer}
            alt=""
          />
          <p>
            Repurpose analytics with the possibility <br />
            to come
          </p>
        </div>
        <div className="line-customer"></div>
        <div className="box3">
          <img
            className="customer-1"
            src={rating}
            alt=""
          />
          <p>
            Repurpose analytics with the possibility <br />
            to come
          </p>
        </div>
        <div className="line-customer"></div>
        <div className="box3">
          <img
            className="customer-1"
            src={letterbox}
            alt=""
          />
          <p>
            Repurpose analytics with the possibility <br />
            to come
          </p>
        </div>
      </div>
      <div className="container11">
        <div className="text11">
          <p>1% OF THE INDUSTRY</p>
          <h1>
            Welcome to your new digital reality <br />
            that will rock your world.
          </h1>
        </div>
        <div className="input">
          <input className="input-1" type="text" value="Your e-mail..." />
          <a href="#" className="button11">
            <button>Submit</button>
          </a>
        </div>
      </div>
    </>
  );
};
