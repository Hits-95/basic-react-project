import { useState } from "react";
import BgColorChanger from "./components/BgColorChanger";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  const [color, setColor] = useState("red");

  return (
    // backgroound color changes code 
    <div>
      {/* <BgColorChanger /> */}

    <PasswordGenerator />

    </div>

  );
}

export default App;
