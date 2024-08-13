import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full md:w-3/4 sm:w-[200px] xs:w-[200px] mx-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {/* card section */}
            {data.map((d, index) => (
              <div
                key={d.name}
                className={`transition-transform duration-500 ease-in-out ${
                  index === activeSlide
                    ? "scale-100 opacity-100 rounded-xl"
                    : "scale-90 opacity-50 rounded-xl"
                }`}
              >
                <div className="bg-white text-black rounded-3xl shadow-lg overflow-hidden" >
                  <div className="w-full h-[60%]">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-between">
                    <div className="mb-2">
                      <p className="text-lg md:text-xl font-semibold">{d.name}</p>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm md:text-black">{d.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="text-sm md:text-black">On Request</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-black text-white rounded-lg self-start border border-black hover:bg-white hover:text-black hover:border-black transition-colors duration-300 text-xs md:text-base">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "M3M Altitude",
    img: "/corouselimg/M3M Altitude.webp",
    location: "Sector 65, Gurgaon",
  },
  {
    name: "M3M Mansion",
    img: "/corouselimg/M3M Mansion.webp",
    location: "Sector 113, Gurgaon",
  },
  {
    name: "Smartworld One DXP",
    img: "/corouselimg/Smartworld One DXP.webp",
    location: "Sector 113, Gurgaon",
  },
  {
    name: "Whiteland Urban Resort",
    img: "/corouselimg/Whiteland Urban Resort.webp",
    location: "Sector 103, Gurgaon",
  },
];

export default App;
