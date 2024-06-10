import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.postimg.cc/DZ8KR3HC/Mexico.jpg",
      title: "Mexico Tour Spot",
      des: (
        <p>
          <i>
            " An ancient Mayan pyramid surrounded by lush greenery in Mexico,
            showcasing <br /> the rich cultural heritage and historical
            significance of the region."
          </i>
        </p>
      ),
    },
    {
      img: "https://i.postimg.cc/G2P6ZSt8/brazil.jpg",
      title: "Brazil Tour Spot",
      des: (
        <i>
          "The iconic Christ the Redeemer statue overlooking the city of Rio de
          Janeiro, Brazil, <br /> offering panoramic views and symbolizing peace
          and hospitality."
        </i>
      ),
    },
    {
      img: "https://i.postimg.cc/W1DC24tP/peru.jpg",
      title: "Peru Tour Spot",
      des: (
        <i>
          "The ancient Incan citadel of Machu Picchu in Peru, set high in the
          Andes Mountains, <br /> known for its archaeological significance and
          stunning views."
        </i>
      ),
    },
    {
      img: "https://i.postimg.cc/JhLq97kx/usa.jpg",
      title: "USA Tour Spot",
      des: (
        <i>
          "The iconic Grand Canyon in Arizona, USA, with its vast, colorful, and{" "}
          <br />
          intricate landscape carved by the Colorado River."
        </i>
      ),
    },
    {
      img: "https://i.postimg.cc/hPHC9y4W/argentina.jpg",
      title: "Argentina Tour Spot",
      des: (
        <i>
          "A breathtaking view of the Iguazu Falls, one of the largest and most
          spectacular waterfall
          <br /> systems in the world, located on the border of Argentina and
          Brazil."
        </i>
      ),
    },
    {
      img: "https://i.postimg.cc/gcDfs511/canada.jpg",
      title: "Canada Tour Spot",
      des: (
        <i>
          "The stunning turquoise waters of Lake Louise in Banff National Park,
          Canada, surrounded <br /> by towering snow-capped mountains and lush
          forests."
        </i>
      ),
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);
  return (
    <>
      <Helmet>
        <title>Tourism Management / Home</title>
      </Helmet>
      <div
        className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
};

export default Banner;
