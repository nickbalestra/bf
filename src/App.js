import "./App.css";

import React from "react";
import Photos from "./Photos";

const App = () => (
  <div>
    <img
      src="https://placekitten.com/1200/400"
      alt="Hailey & Nick"
      style={{ width: "100%", filter: "grayscale(.2)" }}
    />

    <div className="app">
      <div className="content">
        <p>
          <h1>Ciao all!</h1>
          We got hitched in Muralto, Switzerland, on March 2nd 🤵👰🇨🇭
          <br />
          <br />
          Organizing an international wedding has been. . .challenging,
          especially since we still live on different continents! Once we
          complete the immigration process, we plan to celebrate in the U.S.
          with all of our loved ones. That’s why we’ve built this website: to
          share the story with you and to to keep you posted about the upcoming
          party 🎉🇺🇸
        </p>
        <hr />
        <Photos />
        <hr />
        <p>
          Since we have been blessed with all we need to be happy, we have
          decided not to create a wedding registry. We feel that being
          surrounded by the people we love the most is our greatest gift--that’s
          why we can’t wait to start planning the party! However, for those of
          you who would like to send us a little something, we would love it if
          you considered making a charitable donation in lieu of a gift. Here
          are two causes close to our hearts, one in Switzerland and one in the
          US:
        </p>
        <ul>
          <li>
            In Switzerland:
            <strong> Volontarie Vincenziane del Bellinzonese</strong>
            <br />
            CH-6500 Bellinzona. conto corr. postale : 65-4750-4 (CHF).
            <br />
            If you want to donate from abroad, let as know so we can help
            coordinate.
          </li>
          <br />
          <li>
            In US:
            <strong> Communities in Schools of Spokane, Rescue for All</strong>
            <br />
            If you want to donate from abroad, let as know so we can help
            coordinate.
          </li>
        </ul>
        <p>
          👉 Until we settle down together, you can send us card here: portland.
          <br />
          👉 Stay tuned for the party.
          <br />
          👉 What’s up with the feet on our wedding announcement card?
        </p>
      </div>
    </div>
  </div>
);

export default App;
