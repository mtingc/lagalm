"use client";

import Image from "next/image"
import Link from "next/link"

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div>
      <div className="relative isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Expertos en manufactura de productos plásticos y metálicos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-lg leading-7 text-gray-600"
            >
              Somos una empresa mexicana dedicada al diseño, desarrollo y
              manufactura de partes plásticas y metálicas de alta calidad. Con
              un enfoque principal en el sector automotriz, ofrecemos soluciones
              integrales para todo el proceso de producción, desde la
              planificación y diseño hasta la creación de moldes, inyección de
              piezas plásticas y la incorporación de procesos adicionales como
              recubrimientos y adiciones metálicas.
            </motion.p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Leer más <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <svg
              viewBox="0 0 366 729"
              role="img"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width="316" height="684" rx="36" />
                </clipPath>
              </defs>
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios
          </motion.h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.2 }}
                className="text-xl leading-8 text-gray-800"
              >
                Nuestro compromiso con la excelencia y la satisfacción del
                cliente nos impulsa a mantenernos a la vanguardia de la
                industria manufacturera.
              </motion.p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-600">
                <motion.p
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.2 }}
                >
                  Contamos con un equipo de expertos altamente capacitados que
                  trabajan en estrecha colaboración con nuestros clientes para
                  entender sus necesidades y proporcionar soluciones
                  personalizadas que cumplan con los estándares más exigentes.
                </motion.p>
                <motion.p
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.2 }}
                  className="mt-4"
                >
                  En nuestra empresa, nos enorgullece nuestra capacidad para
                  ofrecer productos de alta precisión y calidad, respaldados por
                  tecnología de vanguardia y rigurosos procesos de control de
                  calidad.
                </motion.p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                <div className="flex flex-col-reverse gap-y-4">
                  <motion.dt
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-base leading-7 text-gray-600">
                    Producción de piezas al año
                  </motion.dt>
                  <motion.dd
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-semibold tracking-tight text-gray-900"
                  >
                    40 millones
                  </motion.dd>
                </div>
                <div className="flex flex-col-reverse gap-y-4">
                  <motion.dt
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-base leading-7 text-gray-600"
                  >
                    Empleados altamente capacitados
                  </motion.dt>
                  <motion.dd
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-semibold tracking-tight text-gray-900">
                    +400
                  </motion.dd>
                </div>
                <div className="flex flex-col-reverse gap-y-4">
                  <motion.dt
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-base leading-7 text-gray-600">
                    Clientes satisfechos
                  </motion.dt>
                  <motion.dd
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-semibold tracking-tight text-gray-900">
                    +100
                  </motion.dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Image
            height={500}
            width={1000}
            src="/panoramic.jpg"
            alt="Lagalm"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
