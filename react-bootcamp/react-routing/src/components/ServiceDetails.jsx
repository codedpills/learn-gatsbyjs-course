import React from "react";

const ServiceDetails = (props) => {
  return (
    <div>
      <h1>Service Detail</h1>
      <p>
        Detail for service {props.match.params.name}
      </p>
    </div>
  );
};

export default ServiceDetails;
