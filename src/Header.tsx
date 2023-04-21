import './Header.scss'
import logo from './Lookscout.svg'

export const Header = () => {
    return (
        <>
        <div className="page-header">
      <div className="container1">
        <div className="company-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar">
          <a href="" className="bar">Home</a>
          <a href="" className="bar">Our Products</a>
          <a href="" className="bar">Resources</a>
          <a href="./contact-us/contact.html" className="bar">Contacts</a>
        </div>
      </div>
      <div className="buttons">
        <a href="./sign-up.html" className="button1" target="_blank"> Sign Up</a>
        <a href="./login-page/log-in.html" className="button2" target="_blank">
          <button>Log In</button>
        </a>
      </div>
    </div>
        </>
    )
}