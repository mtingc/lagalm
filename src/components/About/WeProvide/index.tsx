"use client";

import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import AnimatedList from "@/components/Animated/List";
import Services from "./Services";

const WeProvide = () => {
  const image = {
    url: "/images/about/weProvide.jpg",
    alt: "We Provide, lagalm",
  };

  const items = [
    <h2 key="brindamos" className="text-base font-semibold leading-7 text-cyan-600">
      Brindamos soluciones integrales a nuestros clientes
    </h2>,
    <p key="desde" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Desde el diseño inicial de un producto hasta su entrega final al cliente
    </p>,
    <p key="años" className="mt-6 text-md leading-8 text-gray-600">
      A lo largo de los años, hemos adquirido experiencia colaborando
      estrechamente con nuestros clientes en el desarrollo de productos
      valiosos. Entendemos que convertir ideas en productos útiles y funcionales
      es fundamental en el proceso de desarrollo.
    </p>,
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const animateImage = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <div className="mt-32 sm:mt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <AnimatedList items={items} />
        </div>
      </div>
      <animated.div
        ref={ref}
        style={animateImage}
        className="relative overflow-hidden pt-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={image.url}
            alt={image.alt}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width="1920"
            height="1080"
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
          </div>
        </div>
      </animated.div>
      <Services />
    </div>
  );
};

export default WeProvide;
