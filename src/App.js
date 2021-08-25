import React, { useState  } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [nummer, setNummer] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      
      const newContact = {
        email: email,
        number: nummer
      }

    axios.post('https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/persocheckerrealm-vyubq/service/AddContact/incoming_webhook/AddContact', newContact)
        .then(response => console.log(response));

  }
  return (
    <div className="App">
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