import ServiceItem from "./ServiceItem";

const Services = () => {
  const svg = (
    <svg
      className="absolute left-1 top-1 h-5 w-5 text-cyan-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
        clipRule="evenodd"
      />
    </svg>
  );

  const services = [
    {
      name: "Fabricación de piezas",
      description: " mecanizadas, plásticas o metálicas en serie.",
      icon: svg,
    },
    {
      name: "Fabricación moldes",
      description: " para inyección de plástico y fundición a presión.",
      icon: svg,
    },
    {
      name: "Moldeo",
      description:
        " por inyección de resinas plásticas, por soplado de resinas plásticas y por fundición a presión.",
      icon: svg,
    },
    {
      name: "Escaneo de piezas 3D",
      description: " con mapeo de medidas críticas.",
      icon: svg,
    },
    {
      name: "Decorado e impresión",
      description: " por hot stamping, láser o inyección de tinta.",
      icon: svg,
    },
    {
      name: "Procesos de trazabilidad e identificación",
      description: " con grabado láser o inyección de tinta.",
      icon: svg,
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ name, description, icon }, index) => (
          <ServiceItem
            key={name}
            name={name}
            description={description}
            icon={icon}
          />
        ))}
      </dl>
    </div>
  );
};

export default Services;
