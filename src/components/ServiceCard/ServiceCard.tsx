import React, { useState } from "react";
import "./ServiceCard.css";

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
      <div className="card_front">
        <img src={serviceImg} alt="Service" />
        <div className="card_content">
          <h3>{serviceName}</h3>
          <button onClick={handleFlip}>Know More &gt;</button>
        </div>
      </div>

      {/* Back Side */}
      <div className="card_back">
        <p>
          {serviceName} offers the best services to enhance your beauty and
          confidence. Book now to experience excellence!
        </p>
        <button onClick={handleFlip}>Back</button>
      </div>
    </div>
  );
};

export default ServiceCard;
