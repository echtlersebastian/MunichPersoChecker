# 🚀🎉 Perso-Checker 🎉🚀
This is a Service that checks if your Personalausweis is ready to get picked up at the 🤡Bürgerbüro🤡 in Munich. You can Subscribe at the Website and than get hopefully notified, when the state of your Personalausweis changes.🤩


# 🤦‍♂️ Why does the World need something like this 🤷‍♀️?
The Guy at the counter in 🤡Bürgerbüro🤡 was telling me, that i will not get any notification about the status of my personalausweis. He said: "just check the website
mentioned on the printed Abholschein and type in your Ausweisnummer. It is working like the Package Tracking at DHL". But it does not work like DHL. Because i get 
notified about my packages at DHL. And i am that kind of guy, that forgets about an Personalausweis and will never Pick it up from the 🤡Bürgerbüro🤡. Thats why i wrote 
this Service. Now everybody is able to recieve an Email, as soon, as the Personalausweis is ready to be picked up. 🎉


# What it does:
 - Enter your E-Mail and your Ausweisnummer
 - it will get stored in a Database. Once a day a GitHub Action will trigger and do the following:
 - Checks every record with a Selenium Test by opening the Website muenchen.de/pass and entering the Ausweisnummer.
 - Checks if the status is "kann noch nicht abgeholt werden". 
 - If yes, nothing will happen, beause we need to wait longer. 
 - If no, the Status has changed and and email will be send out to the specific mailadress.
 - After the Mail is sent, the E-Mail and the Ausweisnummer will be *deleted* in the Database!
 - The Check runs every 60 Minutes. (i think, that higher frequent executions will just break the Internet at 🤡Bürgerbüro🤡)
 
# TechStack:
 - React Frontend
 - Mongo DB
 - Mongo Realm handling the HTTP Requests
 - C# NUnit Tests
 - GitHub Actions for the daily trigger
 - Selenium for checking the Portal
 - Heroku for Hosting
 
# How to use:
 If you need a new Personalausweis in Munich, you will get a Abholschein from the Bügerbüro. Just enter the Personalausweisnummer and your E-Mail and you are done! 🚀
 
 Have fun waiting for your new Personalausweis!
 
 p.s. I'm super proud of exactly 69% Javascript in this Repo. 😎
