import CertificationItem from "./CertificationItem";

const Certification = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: [
        "Un estándar reconocido a nivel internacional para sistemas de gestión de calidad.",
        "Esta certificación demuestra nuestro compromiso con la excelencia en todos los aspectos de nuestra operación.",
      ],
      image: "/images/about/iso.png",
    },
    {
      title: "IATF-16949-2016",
      description: [
        "Un estándar reconocido a nivel global para sistemas de gestión de calidad en la industria automotriz.",
        "Esta certificación demuestra nuestro compromiso inquebrantable con la calidad y la excelencia en la fabricación de piezas plásticas para el sector automotriz.",
      ],
      image: "/images/about/iatf.png",
    },
    {
      title: "Nuestro sistema de gestión interno",
      description: [
        "En el corazón de nuestra empresa, contamos con un sólido sistema de gestión de calidad interno en constante mejora.",
        "Capacitamos constantemente a nuestro talentoso equipo para garantizar el máximo desempeño en la entrega de productos y servicios.",
      ],
      image: "/images/about/training.png",
    },
  ];

  return (
    <h2
      aria-labelledby="testimonial-heading"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        {certifications.map(({ title, description, image }, index) => (
          <CertificationItem
            key={index}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </h2>
  );
};

export default Certification;
