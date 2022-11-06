import { AiFillGoogleCircle } from "react-icons/ai";

function App() {
  const onResponse = async(res) => {
    console.log(res)
  }

  const fire = () => {
    window.google.accounts.id.initialize({
      client_id: "368662961806-c8f2hsectd7urdaiq24dr4n86scbda19.apps.googleusercontent.com",
      callback: onResponse,
      auto_select: false
    })
    window.google.accounts.id.prompt()
  }

  return (
    <div className="container">
      <h1>hello world</h1>
      <div>
        <button onClick={fire}>
          <AiFillGoogleCircle />
        </button>
      </div>
    </div>
  );
}

export default App;
