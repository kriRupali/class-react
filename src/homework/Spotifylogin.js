import data from "./data/Data.js";
import "./Spotifylogin.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const Spotifylogin = () => {
  return (
    <section className="Spotify-body">
      <section className="searchwith">
        <article>
          <h2>Login to spotify</h2>
          <div className="xyz">
            <div>
              <FcGoogle />
              <div>Continue with Google</div>
            </div>
            <div>
              <BsFacebook color="blue" />
              <div>Continue with Facebook</div>
            </div>
            <div>
              <FaApple />
              <div>Continue with Apple</div>
            </div>
            <div>Continue with Phone Number</div>
          </div>
        </article>
      </section>
      <section className="spotify-login">
        <article>
          <form className="spoti">
            <div>
              <h3>Email or username</h3>
              <input type="email" placeholder="Email or Usewrname" />
            </div>
            <div>
              <h3>Password</h3>
              <input type="text" placeholder="Password" />
            </div>
            <button>Login</button>
          </form>
        </article>
      </section>
    </section>
  );
};
export default Spotifylogin;
