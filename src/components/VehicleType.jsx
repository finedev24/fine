import React, { useState } from "react";
import styles from "../styles/VehicleType.module.css";

import imgSedan from "../assets/sedan.png";
import imgSuv from "../assets/suv.png";
import imgTruck from "../assets/truck.png";
import imgMotorcycle from "../assets/motorcycle.png";

function VehicleType() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  const handleVehicleClick = (value) => {
    setSelectedVehicle(value);
  };

  const handleVehicleTypeClick = (value) => {
    setSelectedVehicleType(value);
  };

  return (
    <div>
      <h2>Vehicle</h2>
      <p>Select your type of vehicle</p>
      <form>
        <div
          className={`${styles.list} ${
            selectedVehicle === "sedan" ? styles.selected : ""
          }`}
          onClick={() => handleVehicleClick("sedan")}
        >
          <label>Sedans</label>
          <img src={imgSedan} />
          <input
            type="radio"
            value="sedan"
            name="vehicle"
            checked={selectedVehicle === "sedan"}
            onChange={() => {}}
          />
        </div>

        <div
          className={`${styles.list} ${
            selectedVehicle === "suv" ? styles.selected : ""
          }`}
          onClick={() => handleVehicleClick("suv")}
        >
          <label>SUV's</label>
          <img src={imgSuv} />
          <input
            type="radio"
            value="suv"
            name="vehicle"
            checked={selectedVehicle === "suv"}
            onChange={() => {}}
          />
        </div>

        <div
          className={`${styles.list} ${
            selectedVehicle === "truck" ? styles.selected : ""
          }`}
          onClick={() => handleVehicleClick("truck")}
        >
          <label>
            Trucks &<br />
            3Rows SUVs
          </label>
          <img src={imgTruck} />
          <input
            type="radio"
            value="truck"
            name="vehicle"
            checked={selectedVehicle === "truck"}
            onChange={() => {}}
          />
        </div>

        <div
          className={`${styles.list} ${
            selectedVehicle === "motorcycle" ? styles.selected : ""
          }`}
          onClick={() => handleVehicleClick("motorcycle")}
        >
          <label>Motorcycle</label>
          <img src={imgMotorcycle} />
          <input
            type="radio"
            value="motorcycle"
            name="vehicle"
            checked={selectedVehicle === "motorcycle"}
            onChange={() => {}}
          />
        </div>

        <p>What is the nature of your vehicle?</p>
        <div className={styles.listw}>
          <div
            className={`${styles.listwelement} ${
              selectedVehicleType === "electric" ? styles.selected : ""
            }`}
            onClick={() => handleVehicleTypeClick("electric")}
          >
            <label>Electric</label>
            <input
              type="radio"
              value="electric"
              name="vehicletype"
              checked={selectedVehicleType === "electric"}
              onChange={() => {}}
            />
          </div>

          <div
            className={`${styles.listwelement} ${
              selectedVehicleType === "hybrid" ? styles.selected : ""
            }`}
            onClick={() => handleVehicleTypeClick("hybrid")}
          >
            <label>Hybrid</label>
            <input
              type="radio"
              value="hybrid"
              name="vehicletype"
              checked={selectedVehicleType === "hybrid"}
              onChange={() => {}}
            />
          </div>

          <div
            className={`${styles.listwelement} ${
              selectedVehicleType === "gas" ? styles.selected : ""
            }`}
            onClick={() => handleVehicleTypeClick("gas")}
          >
            <label>Gas</label>
            <input
              type="radio"
              value="gas"
              name="vehicletype"
              checked={selectedVehicleType === "gas"}
              onChange={() => {}}
            />
          </div>
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default VehicleType;
