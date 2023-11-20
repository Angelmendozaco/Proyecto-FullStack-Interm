import { useState } from "react";

import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const [step, setStep] = useState("singin");
  return (
      <div className="container">
        {step == "singin" && <SingIn />}
        {step == "singup" && <SingUp />}
        {step == "forgot" && <ForgotPassword />}
      </div>
  );
};

export default App;
