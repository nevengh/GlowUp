import React, { useState } from "react";
import "./ServiceCard.css";
import { Button } from "react-bootstrap";

interface SubService {
  title: string;
  description: string;
}

interface ServiceCardProps {
  serviceImg: string;
  serviceName: string;
  subServices: SubService[]; // Array of sub-services
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceImg,
  serviceName,
  subServices,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <div className={`sercie_Card ${flipped ? "flipped" : ""}`}>
      {/* Front Side */}
      <div className="card_front" onClick={handleFlip}>
        <img src={serviceImg} alt={serviceName} className="service_image" />
        <div className="card_content">
          <h3>{serviceName}</h3>
        </div>
        <button>See More</button>
      </div>

      {/* Back Side */}
      <div className="card_back">
        <div className="subservices_container">
          {subServices.map((subService, index) => (
            <div className="SubService" key={index}>
              <h3>{subService.title}</h3>
              <p>{subService.description}</p>
            </div>
          ))}
        </div>
        <Button variant="dark" onClick={handleFlip}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
