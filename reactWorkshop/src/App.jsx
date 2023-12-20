import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from "./components/Name.jsx";
import CustomHTMLDanger from "./components/CustomHTMLDanger.jsx";
import Register from "./components/Register.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [firebaseMessage, setFirebaseMessage] = useState({type: "", message: ""});
  const num = 3;
  const styles = {color: "red"};
  console.log("Test");

  return (
    <>
      <Register communicate={setFirebaseMessage} />
      <h4 style={{color: firebaseMessage.type === "error" ? "red" : "green" }}>
          {firebaseMessage.message}
      </h4>
      <Name name={2} />
      <CustomHTMLDanger />
      <div>
        <h2 style={styles}>Hello World {num}</h2>
        <p>{3+4}</p>
        <p>{[1,2,3,4]}</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={styles}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
