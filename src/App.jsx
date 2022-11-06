import { AiFillGoogleCircle } from "react-icons/ai";
import { useRef } from "react";

function App() {
  const googleSignInButton = useRef(null);

  const onResponse = async (res) => {
    console.log("res ", res);
  };

  const fire = () => {
    window.google.accounts.id.initialize({
      client_id:
        "368662961806-c8f2hsectd7urdaiq24dr4n86scbda19.apps.googleusercontent.com",
      callback: onResponse,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      type: "icon",
      shape: "circle",
    });
  };

  return (
    <div className="container">
      <h1>hello world</h1>
      <div>
        <button onClick={fire}>
          <div ref={googleSignInButton}>
            <img src="/google-icon.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
