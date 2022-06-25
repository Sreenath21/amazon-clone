import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://rb.gy/pgquov" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://rb.gy/ryks6d" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://rb.gy/btoa62" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
