import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const banner = [
  {
    id: 1,
    img: "/event8.jpg",
  },
  {
    id: 2,
    img: "/banner2.jpg",
  },
  {
    id: 3,
    img: "/event4.jpg",
  },
  {
    id: 4,
    img: "/event5.jpg",
  },
  {
    id: 5,
    img: "/event3.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  cssEase: "linear",
  autoplaySpeed: 2900,
  pauseOnHover: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

const Hero = () => {
  const slide = useRef<Slider | null>(null);

  return (
    <article>
      <Slider {...settings} ref={slide}>
        {banner.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt="Event Banners are not found"
              className="w-screen h-[40rem] object-cover brightness-75"
            />
          </div>
        ))}
      </Slider>
    </article>
  );
};

export default Hero;
