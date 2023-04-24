import './Footer.scss'
import logo from './Lookscout.svg'

export const Footer = () => {
    return (
        <>
        <div className="container12">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>
            Generate outside the box <br />
            thinking with the possibility to <br />
            targtet the low.
          </p>
          <img src="Landing-Page-Img/Social.svg" alt="" />
        </div>
        <div className="footer-link1">
          <div className="footer-links">
            <p>Products</p>
            <a href="#" className="links-1">Features</a>
            <a href="#" className="links-1">Solutions</a>
            <a href="#" className="links-1">Integrations</a>
            <a href="#" className="links-1">Enterprise</a>
            <a href="#" className="links-1">Solutions</a>
          </div>
          <div className="footer-links">
            <p>Resources</p>
            <a href="#" className="links-1">Partners</a>
            <a href="#" className="links-1">Community</a>
            <a href="#" className="links-1">Developers</a>
            <a href="#" className="links-1">App</a>
            <a href="#" className="links-1">Blog</a>
          </div>
        </div>
        <div className="footer-link2">
          <div className="footer-links">
            <p>Why Choose Us?</p>
            <a href="#" className="links-1">Channels</a>
            <a href="#" className="links-1">Scale</a>
            <a href="#" className="links-1">Watch the Demo</a>
            <a href="#" className="links-1">Our Competition</a>
          </div>
          <div className="footer-links">
            <p>Company</p>
            <a href="#" className="links-1">About Us</a>
            <a href="#" className="links-1">News</a>
            <a href="#" className="links-1">Leadership</a>
            <a href="#" className="links-1">Media Kit</a>
          </div>
        </div>
      </div>
      <div className="end">
        <img src="Landing-Page-Img/footer.svg" alt="" />
        <p>© 2023 Lookscout. All Rights Reserved.</p>
      </div>
        </>
    )
}