import React from "react";

const Login = () => {
  return (
    <>
    <div className="Main_contnr">
      <div className="Header">
        <p>
          Help?
          <span className="link1">
            <a href="https://www.smoothhiring.com">info@smoothhiring.com</a>
          </span>
        </p>
      </div>
      <div className="name">
        <img
          src="https://smoothhiring.com/wp-content/uploads/2021/03/Smooth-hiring-logo-001-02.png"
          alt="Logo"
        />
      </div>
      <div className="alert">
          <p>You just need to sign in or sign up to continue.</p>
      </div>
      <div className="container">
        <div className="login">
          <h2 className="Login">Login</h2>
        </div>
        <div className="midcontainer">
          <form className="form">
            <div className="user">
              <div className="eml_pswrd">
                <div className="email">
                  <label for="email">Email </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="password">
                  <label for="password">Password </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>
              <div className="check">
                <input type="checkbox" id="rememberme" name="rememberme" />

                <label for="rememberme">
                  <span className="rmbrme">Remember me</span>
                </label>
              </div>
              <div className="lgnbtn">
                <button className="loginbtn">Login</button>
              </div>
            </div>
            <div className="res">
              <a href="#">Forgot Password?</a>
            </div>
            <p className="or">
              <span>OR</span>
            </p>
            <div className="options">
              <h3>Sign in with</h3>
            </div>
          </form>
          <div className="acc_cntnr">
            <div className="account">
              <h1>Hello and Welcome :)</h1>
              <h2>
                New To <span>Smooth</span>Hiring?
              </h2>
              <div className="para">Dont miss the Opportunity</div>
              <div className="para">
                <p>it takes just few Steps, Lets Go.!</p>
                <span>
                  <button className="singupbtn">Sign up</button>
                </span>
                now..
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="sclicn">
            <i class="fab fa-google"></i>
            <p className="google">Google</p>
          </div>
          <div className="sclicn">
            <i class="fab fa-facebook"></i>
            <p className="fb">Facebook</p>
          </div>
          <div className="sclicn">
            <i class="fab fa-linkedin"></i>
            <p className="lnkdn">linkedIn</p>
          </div>
        </div>
        <div className="privacy">
          <p>
            View our
            <span>
              <a href="#">Privacy Policy</a>
            </span>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>© 2010-2021 ClearFit Inc</p>
      </div>
    </div>  
    </>
  );
};
export default Login;
