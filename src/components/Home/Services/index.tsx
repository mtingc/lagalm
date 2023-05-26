import AnimatedList from "@/components/Animated/List";

const Services = () => {
  const ourCommitmentItems = [
    <p className="text-xl leading-8 text-gray-800">
      Nuestro compromiso con la excelencia y la satisfacción del cliente nos
      impulsa a mantenernos a la vanguardia de la industria manufacturera.
    </p>,
    <div className="mt-10 max-w-xl text-base leading-7 text-gray-600">
      <p>
        Contamos con un equipo de expertos altamente capacitados que trabajan en
        estrecha colaboración con nuestros clientes para entender sus
        necesidades y proporcionar soluciones personalizadas que cumplan con los
        estándares más exigentes.
      </p>
      <p className="mt-4">
        En nuestra empresa, nos enorgullece nuestra capacidad para ofrecer
        productos de alta precisión y calidad, respaldados por tecnología de
        vanguardia y rigurosos procesos de control de calidad.
      </p>
    </div>,
  ];

  const statsItems = [
    <div className="flex flex-col-reverse gap-y-4 my-4">
      <dt className="text-base leading-7 text-gray-600">
        Producción de piezas al año
      </dt>
      <dd className="text-5xl font-semibold tracking-tight text-blue-900">
        40 millones
      </dd>
    </div>,
    <div className="flex flex-col-reverse gap-y-4 my-4">
      <dt className="text-base leading-7 text-gray-600">
        Empleados altamente capacitados
      </dt>
      <dd className="text-5xl font-semibold tracking-tight text-blue-900">
        +400
      </dd>
    </div>,
    <div className="flex flex-col-reverse gap-y-4 my-4">
      <dt className="text-base leading-7 text-gray-600">
        Clientes satisfechos
      </dt>
      <dd className="text-5xl font-semibold tracking-tight text-blue-900">
        +100
      </dd>
    </div>
  ];
  return (
    <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <AnimatedList
          items={[
            <h2 className="text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl">
              Nuestros servicios
            </h2>,
          ]}
        />
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <AnimatedList items={ourCommitmentItems} />
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 xl:w-80">
              <AnimatedList items={statsItems} />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
