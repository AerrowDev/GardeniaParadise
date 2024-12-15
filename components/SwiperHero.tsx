"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade  } from "swiper/modules";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export default function SwiperHero() {
  const heroImage = [
    { id: 1, image: "/assets/img/hero1.webp", altText: "nature-1", title: 'Clear and Sanitized Pool' },
    { id: 2, image: "/assets/img/hero2.webp", altText: "nature-2", title: 'Complete Amenities'  },
    { id: 3, image: "/assets/img/hero3.webp", altText: "nature-3", title: 'Family Friendly'  },
    { id: 4, image: "/assets/img/hero4.webp", altText: "nature-4", title: 'High Quality Menu'  },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
      
       
        loop={true}
        modules={[EffectFade  ]}
        className="hero-wrapper"
      >
        {heroImage.map((hero) => (
          <SwiperSlide key={hero.id}>
            <div className="zoom-container relative">
              <Image
                src={hero.image}
                className="hero-image w-full max-h-[873px] object-cover bg-fixed bg-center"
                height={873}
                width={1440}
                alt={hero.altText}
              />
              <div className="bg-[#000000] opacity-40 absolute top-0 left-0 w-full h-full" />
              <div className="hidden md:block absolute left-[8%] bottom-1/4 text-white">
                <h1 className="text-[78px]/[78px] tracking-[0px] mb-5">Gardenia Paradise</h1>
                <div className="flex gap-x-1.5 text-[20px]/[13px] tracking-[1px]">
          <span className="text-[13px]">See our </span>
                <Typewriter
                  options={{
                    strings: [`${hero.title}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
