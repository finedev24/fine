import React, { useState } from "react";
import styles from "../styles/SelectService.module.css";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

function SelectService() {
  const [selectedService, setSelectedService] = useState("");
  const handleServiceClick = (value) => {
    setSelectedService(value);
  };

  const navigate = useNavigate();

  const [, dispatch] = useRegFormContext();
  const { register, handleSubmit, formState: { isValid }} = useForm();
  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "SET_SERVICE_DATA", data: values });
    }
    navigate('/')
  };


  return (
    <div>
      <h2>Select your service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div
          className={`${styles.list} ${
            selectedService === "servicio" ? styles.selected : ""
          }`}
          onClick={() => handleServiceClick("servicio")}
        >
          <div className={styles.listSection}>
            <div className={styles.listSectionTitle}>
              <label>Exterior detailing</label>
              <p>Golden Hour</p>
            </div>

            <input
              type="radio"
              value="servicio"
              name="vehicle"
              checked={selectedService === "servicio"}
              onChange={() => {}}
              {...register("service")}
            />
          </div>
          <div className={styles.listSection}>
            <button>View more</button>
            <span>$120</span>
          </div>
        </div>

        <div
          className={`${styles.list} ${
            selectedService === "servicio1" ? styles.selected : ""
          }`}
          onClick={() => handleServiceClick("servicio1")}
        >
          <div className={styles.listSection}>
            <div className={styles.listSectionTitle}>
              <label>Exterior detailing</label>
              <p>Golden Hour</p>
            </div>

            <input
              type="radio"
              value="servicio1"
              name="vehicle"
              checked={selectedService === "servicio1"}
              onChange={() => {}}
              {...register("service")}
            />
          </div>
          <div className={styles.listSection}>
            <button>View more</button>
            <span>$120</span>
          </div>
        </div>

        <div
          className={`${styles.list} ${
            selectedService === "servicio2" ? styles.selected : ""
          }`}
          onClick={() => handleServiceClick("servicio2")}
        >
          <div className={styles.listSection}>
            <div className={styles.listSectionTitle}>
              <label>Exterior detailing</label>
              <p>Golden Hour</p>
            </div>

            <input
              type="radio"
              value="servicio2"
              name="vehicle"
              checked={selectedService === "servicio2"}
              onChange={() => {}}
              {...register("service")}
            />
          </div>
          <div className={styles.listSection}>
            <button>View more</button>
            <span>$120</span>
          </div>
        </div>

        <div
          className={`${styles.list} ${
            selectedService === "servicio3" ? styles.selected : ""
          }`}
          onClick={() => handleServiceClick("servicio3")}
        >
          <div className={styles.listSection}>
            <div className={styles.listSectionTitle}>
              <label>Exterior detailing</label>
              <p>Golden Hour</p>
            </div>

            <input
              type="radio"
              value="servicio3"
              name="vehicle"
              checked={selectedService === "servicio3"}
              onChange={() => {}}
              {...register("service")}
            />
          </div>
          <div className={styles.listSection}>
            <button>View more</button>
            <span>$120</span>
          </div>
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default SelectService;
