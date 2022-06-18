import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapContainerLeaf } from "./components/pickup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <MapContainerLeaf />
    </div>
  );
}

export default App;
