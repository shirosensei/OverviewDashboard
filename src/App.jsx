import { useState } from "react";
import "./assets/css/App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Sidebar />
    
    </>
  );
}

// position: absolute;
// width: 14.06px;
// height: 23.1px;
// left: calc(50% - 14.06px/2 + 0.03px);
// top: calc(50% - 23.1px/2 - 0.16px);

// background: #FFFFFF;

export default App;
