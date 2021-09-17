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
  buttonText="Alright, I got it!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Absolutely no Cookie is used on this Website, so this text is completly useless.
</CookieConsent>
      <header className="App-header">
        
        <h1>
          🎉🚀😍Welcome to the awesome Perso-Checker😍🚀🎉!
        </h1>
        <Subscribe></Subscribe>
        <p><small>
          Note: This tool is only working, if your Personalausweis was issued by one of the Bügerbüros in Munich.
          <br/>
          Made in Munich with ❤️ | Check out the <a href="https://github.com/echtlersebastian/MunichPersoChecker">project</a> on Github!
        </small></p>
      </header>
    </div>
  );
}

export default App;
