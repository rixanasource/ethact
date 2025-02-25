import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "./1.png",
  "./2.png",
  "./3.png",
  "./4.png",
  "./5.png",
  "./6.png",
  "./7.png",
  "./8.png",
];

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <style>{`
        /* Hide Swiper Arrows */
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }

        /* Black Pagination Dots */
        .swiper-pagination-bullet {
          background: black !important;
          width: 10px;
          height: 10px;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: black !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
