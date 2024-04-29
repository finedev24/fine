import React, { useState } from "react";
import styles from "../styles/Addons.module.css";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

function Addons() {
  const addons = [
    {
      id: 1,
      name: "Exterior detailing",
      description: "Golden Hour",
      price: 10.99,
    },
    {
      id: 2,
      name: "Interior detailing",
      description: "Swagger-Up",
      price: 15.99,
    },
    {
      id: 3,
      name: "Full detailing",
      description: "Fine my Ride (exterior & interior)",
      price: 20.99,
    },
  ];

  const [selectedService, setSelectedService] = useState("");
  const handleServiceClick = (value) => {
    setSelectedService(value);
  };

  const navigate = useNavigate();

  const [, dispatch] = useRegFormContext();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "SET_SERVICE_DATA", data: values });
    }
    navigate("/");
    console.log(values);
  };

  return (
    <div>
      <div className={styles.ProgressBar}>
        <div className={styles.pb13}></div>
        <div className={styles.pb23}></div>
        <div className={styles.pb33}></div>
      </div>
      <h2>Addons</h2>
      <p>Select any must-have-add-ons:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            {addons.map((service) => (
              <div
                key={service.id}
                className={`${styles.list} ${
                  selectedService === service.id ? styles.selected : ""
                }`}
                onClick={() => {
                  setSelectedService(service.id);
                  document.getElementById(service.id).click();
                }}
              >
                <div className={styles.listSection}>
                  <div className={styles.listSectionTitle}>
                    <label htmlFor={service.id} style={{ cursor: "pointer" }}>
                      {service.name}
                      <p>{service.description}</p>
                      <input
                        id={service.id}
                        type="radio"
                        value={service.id}
                        name="service"
                        {...register("service")}
                      />
                    </label>
                  </div>
                  <div className={styles.listSectionContent}>
                    <button>View more</button>
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Addons;
