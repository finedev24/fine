import React, { useState } from "react";
import styles from "../styles/SelectService.module.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FiCheck } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

function SelectService() {
  const services = [
    {
      id: 1,
      name: "Exterior detailing",
      description: "Golden Hour",
      price: 10.99,
      features: [
        "Hand wash with foam and preassure cleaning",
        "Detail door and truck jambs",
        "Clean & degrease wheel and Tires",
        "Clean exterior and interior windows",
      ],
    },
    {
      id: 2,
      name: "Interior detailing",
      description: "Swagger-Up",
      price: 15.99,
      features: ["Genial", "Increible"],
    },
    {
      id: 3,
      name: "Full detailing",
      description: "Fine my Ride (exterior & interior)",
      price: 20.99,
      features: ["Genial", "Increible"],
    },
  ];

  const [selectedService, setSelectedService] = useState("");
  const handleServiceClick = (value) => {
    setSelectedService(value);
  };

  const [showMoreMap, setShowMoreMap] = useState({});

  const toggleShowMore = (serviceId) => {
    setShowMoreMap((prevMap) => ({
      ...prevMap,
      [serviceId]: !prevMap[serviceId],
    }));
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
    navigate("/addons");
    console.log(values);
  };

  return (
    <div>
      <div className={styles.ProgressBar}>
        <div className={styles.pb13}></div>
        <div className={styles.pb23}></div>
        <div className={styles.pb33}></div>
      </div>
      <h2>Select your service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            {services.map((service) => (
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
                    <div
                      onClick={() => toggleShowMore(service.id)}
                      className={styles.viewMore}
                    >
                      View more{" "}
                      {showMoreMap[service.id] ? (
                        <SlArrowUp />
                      ) : (
                        <SlArrowDown />
                      )}
                    </div>
                    {service.price}
                  </div>
                  <div className={styles.listSectionExtra}>
                    {showMoreMap[service.id] && (
                      <div className={styles.listFeature}>
                        {service.features.map((feature, index) => (
                          <div key={index} className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                              <FiCheck
                                style={{ color: "#A0EEBC", marginRight: "6px" }}
                              />
                            </div>
                            <div className={styles.featureContent}>
                              {feature}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles["action-content"]}>
            <button>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SelectService;
