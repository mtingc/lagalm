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
    <h2
      key="nosotros"
      className="text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl"
    >
      Nosotros
    </h2>,
    <p key="estamos" className="mt-6 text-xl leading-8 text-slate-100">
      Estamos comprometidos a lograr la satisfacción de nuestros clientes,
      entregando productos de acuerdo a sus requisitos de ingeniería, los
      legales y reglamentarios aplicables, en la fecha requerida y con la
      calidad establecida.
    </p>,
    <p key="buscamos" className="mt-6 text-base leading-7 text-slate-100">
      Buscamos superar las expectativas de nuestros clientes a través de la
      mejora continua de nuestro sistema de gestión automotriz.
    </p>,
  ];
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 my-20">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="overflow-hidden mt-20">
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
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stop-color="#0891b2" />
            <stop offset="1" stop-color="#06b6d4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Us;
