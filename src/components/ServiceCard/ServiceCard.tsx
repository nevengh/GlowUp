import React, { useState } from "react";
import "./ServiceCard.css";
import { Button } from "react-bootstrap";

interface ServiceCardProps {
  serviceImg: string;
  serviceName: string;
  serviceBackKeys: string[]; // Keys for translations
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceImg,
  serviceName,
  serviceBackKeys,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <div className={`sercie_Card ${flipped ? "flipped" : ""}`}>
      {/* Front Side */}
      <div className="card_front" onClick={handleFlip}>
        <img src={serviceImg} alt={serviceName} />
        <div className="card_content">
          <h3>{serviceName}</h3>
        </div>
        <button>See More</button>
      </div>

      {/* Back Side */}
      <div className="card_back">
        {serviceBackKeys.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <Button variant="dark" onClick={handleFlip}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
