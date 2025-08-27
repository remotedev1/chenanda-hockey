"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const slides = [
  { name: "Cycling", img: "/about/img1.jpg" },
  { name: "Golf", img: "/about/img2.jpg" },
  { name: "Swimming", img: "/about/img3.jpg" },
  { name: "Tennis", img: "/about/img4.jpg" },
  { name: "Track", img: "/about/img5.jpg" },
];

export default function FullscreenCarousel() {
  return (
    <div className="">
      <div className="relative w-full  overflow-hidden">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows
          // showDots
          pauseOnHover
          // renderDotsOutside
          containerClass="w-full "
          itemClass="w-full "
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative w-full h-[26vh] md:h-[37.5vh] lg:h-[95vh]"
            >
              <Image
                src={slide.img}
                alt={slide.name}
                fill
                priority
                className="object-contain lg:object-cover "
              />
              {/* Overlay + Text */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold">
                  {/* {slide.name} */}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <section className="bg-gray-50 py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            A Tale of Resilience and Achievement
          </p>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800">
            <p>
              In the misty hills of Kodagu (Coorg), a land renowned for its
              robust coffee, the air carrying the intoxicating scent of
              cardamom, the sharp tang of pepper and vibrant orange groves along
              with more robust people, lies a story of resilience and
              achievement. This is the tale of a clan whose roots run as deep as
              the verdant valleys of their homeland.
            </p>

            <p>
              Among the twelve proud divisions (kombu) of Kodagu, spread across
              thirty-five diverse lands (naad), stands Kadiyathnaad. Here, Male
              Thambran reigns from atop the dense, mist-shrouded mountain that
              pierce the heavens and watches over his children, our clan has
              flourished for some 350 years, their history intertwined with the
              very soil of the Bolli division (Bolli kombu) in Kokeri village.
            </p>

            <p>
              The clan&apos;s saga begins with Godhari Utthaiah, the founding
              father whose legacy would grow to touch countless lives. As his
              descendants multiplied, they branched out like the strong arms of
              a banyan tree, each new generation adding to the clan&apos;s rich
              tapestry.
            </p>

            <p>
              The main branch of the family took root in Kirundad village and
              further rooted on the soil of Mukkati in Kokeri village. But the
              clan members were not content to remain in one place. With the
              spirit of adventure that Kodagu is famous for, other branches of
              the family ventured forth, establishing new homes and livelihoods,
              acquiring lands in Kodambur, Banavara, Aluru Siddapura, Haleri,
              and Hassan.
            </p>

            <p>
              Over the generations, our clan has not merely survived; it has
              thrived, leaving an indelible mark on the region and beyond. The
              clan&apos;s sons and daughters have distinguished themselves in
              diverse fields, from the arts to sciences, from literature to
              cultural, from sports to war field, their achievements echoing the
              indomitable spirit of their ancestors.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Sporting Achievements
              </h3>
              <p>
                In the sporting arena, the clan has produced champions who have
                brought glory to their family and nation. The thunderous punches
                of <span className="font-medium">Sabu Machaiah</span> earned him
                the prestigious{" "}
                <span className="font-medium">Arjuna Award</span>, a testament
                to his boxing prowess. Following in these footsteps,
                <span className="font-medium"> Vishu Kuttappa</span>&apos;s
                tactical genius in coaching was recognized with the prestigious{" "}
                <span className="font-medium">Dronacharya Award</span>. The
                clan&apos;s sporting legacy continued with{" "}
                <span className="font-medium">Naveen Nanjappa</span>, whose
                agility and skill in kabaddi secured a shining gold medal at the
                national level.
              </p>
            </div>

            <p>
              Today, our clan stands over 450 strong, a testament to their
              resilience and vitality. From the coffee plantations of Kodagu to
              the bustling cities of India and beyond, clan members continue to
              make their mark, their successes a living tribute to their rich
              heritage.
            </p>

            <p>
              The story of this remarkable clan is more than a family chronicle;
              it&apos;s a celebration of the Kodagu spirit. It speaks of people
              who honor their past while fearlessly embracing the future, who
              remain rooted in tradition even as they reach for the stars. In
              the saga of this clan, we see reflected the very essence of Kodagu
              itself — proud, resilient, and ever-evolving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
