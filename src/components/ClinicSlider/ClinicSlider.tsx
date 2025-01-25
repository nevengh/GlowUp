
import Carousel from "react-bootstrap/Carousel";
import "./ClinicSlider.css";
import slide1 from '../../assets/DSC05631-Enhanced-NR-1.jpg'
import slide2 from '../../assets/DSC05664-Enhanced-NR-11.jpg'
import slide3 from '../../assets/DSC05672-Enhanced-NR-1.jpg'
import slide4 from '../../assets/DSC05676-Enhanced-NR-1.jpg'
import slide5 from '../../assets/DSC05690-Enhanced-NR-1.jpg'
import slide6 from '../../assets/DSC05717-Enhanced-NR-1.jpg'
const ClinicSlider = () => {
    const image=[slide1,slide2,slide3,slide4,slide5,slide6]
  return (
    <div>
        <Carousel>
          {
            image.map(img=>{
                return(
                    <Carousel.Item>
                        <img src={img} alt="" />
                    </Carousel.Item>
                )
            })
          }
        </Carousel>
    </div>
  );
};

export default ClinicSlider;
