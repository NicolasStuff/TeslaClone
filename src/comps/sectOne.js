import React, { Component } from "react";

import arrowDown from "../img/arrowDown.png";
import { motion } from "framer-motion";

function sectOne() {
  return (
    <div className="mainClass">
      <h1 className="textHeader">Model 3</h1>
      <p className="textSecondary">Réserver une essai sans contact</p>

      <div className="bottomDiv">
        <div className="FlexButton">
          {/* <button className='ButtonConfig'>Configuration Personnalisé</button> */}
          <a class="button" className="ButtonConfig">
            CONFIGURATION PERSONALISÉE
          </a>

          <a class="button" className="ButtonCarAvailable">
            VÉHICULES DISPONIBLES
          </a>
        </div>
        <p className="moreInfo">
          En savoir plus sur Tesla pour les entreprises
        </p>
        <img src={arrowDown} className="arrowDown"></img>
      </div>
    </div>
  );
}

export default sectOne;
