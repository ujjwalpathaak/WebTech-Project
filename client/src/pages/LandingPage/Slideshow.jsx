import "./Slideshow.css";
import { useState } from "react";
import placement from "../../assets/juit5.jpg";
import Slider from "react-slick";
import astronaut from "../../assets/juit1.jpg";
import celebrating from "../../assets/juit2.jpg";
import education from "../../assets/juit3.jpg";
import taken from "../../assets/juit4.jpg";

const images = [placement, astronaut, celebrating, education, taken];

function Slideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slideshow">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
