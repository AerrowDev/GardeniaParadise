"use client";
import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";

export default function SwiperHero() {

const heroImage = [
  { id: 1, image: "/assets/img/hero1.webp", altText: "nature-1" },
  { id: 2, image: "/assets/img/hero2.webp", altText: "nature-2" },
  { id: 3, image: "/assets/img/hero3.webp", altText: "nature-3" },
  { id: 4, image: "/assets/img/hero4.webp", altText: "nature-4" },
];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="hero-wrapper"
      >
        {heroImage.map((hero) => (
          <SwiperSlide key={hero.id}>
            <div className="zoom-container">
              <Image
                src={hero.image}
                className="w-full max-h-[873px] object-cover"
                height={873}
                width={1440}
                alt={hero.altText}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
