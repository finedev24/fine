import React from "react";
import { useRegFormContext } from "../providers/RegFormProvider";

const Order = () => {
  const [state] = useRegFormContext();

  return (
    <div>
      <h3>Order</h3>
      <hr />
      <h4>Dirección</h4>
      {state.address && (
        <>
          <p>Address: {state.address.address}</p>
        </>
      )}
      <hr />
      <h4>Vehicle</h4>
      {state.vehicle && (
        <>
          <p>Type: {state.vehicle.vehicle}</p>
          <p>Type 2: {state.vehicle.vehicletype}</p>
        </>
      )}
      <hr />
      <h4>Service</h4>
      {state.common && (
        <>
          <p>Type:</p>
          <p>Type 2:</p>
        </>
      )}
    </div>
  );
};

export default Order;
