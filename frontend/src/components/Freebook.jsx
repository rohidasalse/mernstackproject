import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto my-10 md:px-20 px-4  gap-2">
        <div>
          <h2 className="text-xl font-semibold">this is freebook container:</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            esse laborum fugit ducimus molestiae fugiat vero quibusdam, at
            suscipit ullam commodi ipsum totam asperiores soluta consectetur
            animi quas dolorum omnis!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((items) => (
              <Card item={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
