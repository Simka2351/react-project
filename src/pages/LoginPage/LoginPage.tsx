import './LoginPage.scss'

export const LoginPage = () => {
    return (
        <>
    <div className="container2">
      <div className="rectangle">
        <img src="Login-img/Rectangle.jpg" alt="" />
      </div>
      <div className="sign-up">
        <div className="sign-in-google">
          <h2>Welcome back!</h2>
          <div className="sign-in-1">
            <img src="Login-img/google.jpg" alt="" />
            <a href="#">Sign in with Google</a>
          </div>
          <p>Sign In with your Email</p>
          <div className="line-sign"></div>
        </div>
        <div className="input-sign">
          <form action="">
            <label htmlFor="fname">Email Adress</label><br />
            <input
              type="text"
              id="e-mail"
              name="email"
              value="Insert your email"
            /><br />
            <label htmlFor="lname">Password</label><br />
            <input
              type="text"
              id="Password"
              name="pass"
              value="Insert your password"
            /><br /><br />
          </form>
        </div>
        <div className="keep-log">
          <form action="">
            <input type="radio" id="Keep" name="1" value="Keep" />
            <label htmlFor="Keep"> Keep me logged in</label><br />
          </form>
          <a href="#">Forgot password?</a>
        </div>
        <div className="button-sign">
          <a href="#">
            <button>Log In</button>
          </a>
          <div className="text-sign">
            <p>Don't have an account?</p>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}