import React, { useState  } from "react";
import './App.css';
import axios from "axios";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState("");
  const [nummer, setNummer] = useState("");
  const toastError = () => toast.error("Your Ausweisnummer is already in use! Please select another one!");
  const toastSuccess = () => toast.success("You successfully enabled the E-Mail Notification! Happy waiting!");

  const handleSubmit = (evt) => {
    evt.preventDefault();
      const newContact = {
        email: email,
        number: nummer
      }

    axios.post('https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/persocheckerrealm-vyubq/service/AddContact/incoming_webhook/AddContact', newContact)
        .then(response => {
          if(response.status === 200){
            toastSuccess();
          }
          }).catch(err => {
            toastError();
          });
          setEmail("");
          setNummer("");
  }
  return (
    <div className="App">
      <ToastContainer/>
      <CookieConsent
  location="bottom"
  buttonText="Nothing happens on this button."
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Absolutely no Cookie is used on this Website, so this text is completly useless.
</CookieConsent>
      <header className="App-header">
        
        <p>
          Welcome to the awesome Peronalausweis status checker!
        </p>
        <p>
          This tool is only working, if your Personalausweis was issued by one of the Bügerbüros in Munich.
        </p>
        <p>

          Enter your Mailadress and your Personalausweisnummer here, and you will get notified, as soon, as the status of your Personalausweis changes.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            E-Mail:
            <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} /> 
          </label>
          <label>
            Personalausweisnummer:
            <input type="text" name="name" value={nummer} onChange={e=>setNummer(e.target.value)} /> 
            </label>  
                
          <input type="submit" value="Submit" />
        </form>
   
      </header>
   
    </div>
  );
}

export default App;
