import { Challenge4 } from "./components/Challenge 4/Challenge4.tsx";
import { RecoverPassword } from "./components/Challenge 5/RecoverPassword.tsx";
import { Register } from "./components/Challenge 5/Register.tsx";
import { useState } from "react";

function App() {

const [Flag, setFlag] = useState("")






  return (
    <>
      <Challenge4 flagsetter={setFlag} flag={Flag} /> <br></br>
      <RecoverPassword flagsetter={setFlag} flag={Flag} /><br></br>
      <Register flagsetter={setFlag} flag={Flag} />

    </>
  )
}



export default App
