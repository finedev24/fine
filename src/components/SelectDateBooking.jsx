import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";

import { FiClock } from "react-icons/fi";
import style from "../styles/SelectDateBooking.module.css";

function SelectDateBooking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const [, dispatch] = useRegFormContext();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "SET_ADDONS_DATA", data: { addon: selectedAddons } });
    }
    navigate("/date");
    console.log(values);
  };

  return (
    <div>
      <h2>Schedule your service</h2>
      <p>
        Please select a day and time that works for you, keeping in mind the
        estimated duration of service.{" "}
      </p>
      <div className={style["duration-box"]}>
        <div className={style["duration-box-icon"]}>
          <FiClock />
        </div>
        <div className={style["duration-box-content"]}>
          <span>Estimated duration of service</span>
          <span>
            <b>2 to 3 hours</b>
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style["select-datetime-item"]}>
        <div className={style.labelLine}>
            <label>Date</label>
            <div className={style.labelLineHr}>
              <hr />
            </div>
          </div>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className={style["select-datetime-item"]}>
          <div className={style.labelLine}>
            <label>Time</label>
            <div className={style.labelLineHr}>
              <hr />
            </div>
          </div>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>

        <div className={style.action}>
          <div className={style["action-content"]}>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SelectDateBooking;
