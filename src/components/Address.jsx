import React from "react";
import styles from "../styles/Address.module.css";

function Address() {
  return (
    <div>
      <h2>Address</h2>
      <p>
        <b>Remember: We come right to your doorstep!</b>
        <br />
        Where will you schedule your detailing service?
      </p>
      <form>
        <input type="text" placeholder="Enter adress"></input>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Address;
