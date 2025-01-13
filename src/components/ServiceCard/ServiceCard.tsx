import React, { useState } from "react";
import "./ServiceCard.css";
import { Button } from "react-bootstrap";

interface ServiceCardProp {
  serviceImg: string;
  serviceName: string;
}

const ServiceCard: React.FC<ServiceCardProp> = ({ serviceImg, serviceName }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`sercie_Card ${flipped ? "flipped" : ""}`}>
      {/* Front Side */}
      <div className="card_front" onClick={handleFlip}>
        <img src={serviceImg} alt="Service" />
        <div className="card_content">
          <h3 onClick={handleFlip}>{serviceName}</h3>
          {/* <Button variant="dark" > &gt;</Button> */}
        </div>
      </div>

      {/* Back Side */}
      <div className="card_back">
        <p>
          {serviceName} offers the best services to enhance your beauty and
          confidence. Book now to experience excellence!
        </p>
        <Button variant="dark" onClick={handleFlip}>Back</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
