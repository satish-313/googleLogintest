import { AiFillGoogleCircle } from "react-icons/ai";
import { useRef } from "react";
import useScript from "./hook/useScript";
const GOOGLE_CLIENT_ID =
  "1069458616804-m0fgranu3op1qm663chelj3te1gb91m4.apps.googleusercontent.com";

function App({ onGoogleSignIn = () => {}, text = "signin_with" }) {
  const console = (res) => {
    console.log(res);
  };
  const googleSignInButton = useRef(null);
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.account.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      theme: "outline",
      size: "large",
      text,
      width: "250",
    });
  });

  return <div className="test" ref={googleSignInButton}></div>;
}

export default App;
