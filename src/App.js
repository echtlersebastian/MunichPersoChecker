import React from "react";
import './App.css';
import CookieConsent from "react-cookie-consent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto';
import Subscribe from "./Subscribe";

function App() {


    return (
      <div className="App">
      <ToastContainer/>
      <CookieConsent
  location="bottom"
  buttonText="Alright, i got it!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Absolutely no Cookie is used on this Website, so this text is completly useless.
</CookieConsent>
      <header className="App-header">
        
        <p>
        🎉🚀😍Welcome to the awesome Perso-Checker😍🚀🎉!
    </p><Subscribe></Subscribe>
          <h6>
          🚀If you want to know what this tool does, check out the <a href="https://github.com/echtlersebastian/MunichPersoChecker">Repo</a> at Github!🚀
            <br/>
            <br/>
            This tool is only working, if your Personalausweis was issued by one of the Bügerbüros in Munich.
              <br/>
          Enter your Mailadress and your Personalausweisnummer here, and you will get notified, as soon, as the status of your Personalausweis changes.
            </h6>
      
      
   
   
      </header>
    </div>
  );
}

export default App;
