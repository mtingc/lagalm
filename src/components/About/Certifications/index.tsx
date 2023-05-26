"use client";

import Image from "next/image";
import AnimatedList from "@/components/Animated/List";
import Certification from "./Certification";

const Certifications = () => {
  const image = {
    url: "https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg",
    alt: "Our commitment, lagalm",
  };

  const items = [
    <h2
      id="sale-heading"
      className="text-2xl font-bold tracking-tight text-cyan-600 sm:text-3xl lg:text-4xl"
    >
      Nuestro compromiso con la excelencia en la fabricación
    </h2>,
    <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
      En nuestra empresa, nos enorgullece contar con un sólido sistema de
      gestión de calidad que respalda nuestra dedicación a la excelencia en la
      fabricación de piezas plásticas.
    </p>,
    <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
      Nuestro compromiso con la calidad se refleja en nuestras certificaciones
      reconocidas a nivel internacional, que demuestran nuestro cumplimiento de
      los estándares más exigentes de la industria.
    </p>,
  ];

  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-36 lg:px-4">
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <Image
              height={1080}
              width={1920}
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
        </div>

        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <AnimatedList items={items} />
          </div>
        </section>

        <Certification/>
      </div>
    </div>
  );
};

export default Certifications;
