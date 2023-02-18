import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Keyboard, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../../components/Header/Header";

const Home = () => {
  const { data: allProduct, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.hiring.masterkey.tech/api/v1/product/get"
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(allProduct?.products);

  return (
    <div>
      <Header></Header>
      <Swiper
        style={{
          "--swiper-navigation-size": "22px",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 640,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, FreeMode, Keyboard]}
        className="w-full h-[180px] border rounded-md swiper"
      >
        <div>
          {allProduct?.products?.map((product) => (
            <SwiperSlide
              key={product?._id}
              className="text-center hover:underline"
            >
              <Link to={`/category/${product.categoryName}`}>
                <img
                  src={product?.image}
                  className="w-32 h-32 object-cover mx-auto"
                  alt="slide-img"
                />
                <p>{product?.categoryName}</p>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
