import React, { useState } from "react";
import styles from "../styles/Addons.module.css";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

function Addons() {
  const addons = [
    {
      id: 1,
      name: "Engine detail",
      price: 60,
    },
    {
      id: 2,
      name: "Paint water spot removal",
      price: 50,
    },
    {
      id: 3,
      name: "Headlight restoration",
      price: 50,
    },
    {
      id: 4,
      name: "Shampoo Mats",
      price: 50,
    },
    {
      id: 5,
      name: "Interior leather conditioning",
      price: 50,
    },
    {
      id: 6,
      name: "Pet hair removal",
      price: 50,
    },
    {
      id: 7,
      name: "Odor removal",
      price: 100,
    },
    {
      id: 8,
      name: "Baby car seat sanitization",
      price: 50,
    },
    {
      id: 9,
      name: "Clay bar treatment and polish (Paint correction)",
      price: 250,
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
                        type="checkbox"
                        value={service.id}
                        name="service"
                        {...register("service")}
                      />
                    </label>
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
