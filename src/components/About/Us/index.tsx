"use client";

import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import AnimatedList from "@/components/Animated/List";

const Us = () => {
  const image = {
    url: "/images/about/us.jpg",
    alt: "Us, lagalm",
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const animateImage = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    delay: 500,
  });

  const items = [
    <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
      Nosotros
    </h2>,
    <p className="mt-6 text-xl leading-8 text-gray-600">
      Estamos comprometidos a lograr la satisfacción de nuestros clientes,
      entregando productos de acuerdo a sus requisitos de ingeniería, los
      legales y reglamentarios aplicables, en la fecha requerida y con la
      calidad establecida.
    </p>,
    <p className="mt-6 text-base leading-7 text-gray-600">
      Buscamos superar las expectativas de nuestros clientes a través de la
      mejora continua de nuestro sistema de gestión automotriz.
    </p>,
  ];
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <AnimatedList items={items} />
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <animated.div
              ref={ref}
              style={animateImage}
              className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
            >
              <Image
                height={1080}
                width={1920}
                src={image.url}
                alt={image.alt}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
