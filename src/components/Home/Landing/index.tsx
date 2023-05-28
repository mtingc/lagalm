import Link from "next/link";

import AnimatedList from "@/components/Animated/List";

const Landing = () => {
  const items = [
    <h1 key="expertos" className="max-w-lg text-3xl font-bold tracking-tight text-cyan-600 sm:text-5xl">
      Expertos en manufactura de productos plásticos y metálicos
    </h1>,
    <p key="somos" className="mt-6 text-lg leading-7 text-gray-600">
      Somos una empresa mexicana dedicada al diseño, desarrollo y manufactura de
      partes plásticas y metálicas de alta calidad. Con un enfoque principal en
      el sector automotriz, ofrecemos soluciones integrales para todo el proceso
      de producción, desde la planificación y diseño hasta la creación de
      moldes, inyección de piezas plásticas y la incorporación de procesos
      adicionales como recubrimientos y adiciones metálicas.
    </p>,
    <div key="link" className="mt-10 flex items-center gap-x-6">
      <Link
        href="/about"
        className="text-sm font-semibold leading-6 text-cyan-600"
      >
        Leer más <span aria-hidden="true">→</span>
      </Link>
    </div>
  ];

  return (
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
      <div className="mx-auto max-w-7xl px-6 py-28 lg:py-10 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <AnimatedList items={items} />
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
  );
};

export default Landing;
