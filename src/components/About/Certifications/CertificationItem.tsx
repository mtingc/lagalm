import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
import Image from "next/image";

const CertificationItem = ({ title, description, image }: { title: string, description: string[], image: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trail = useTrail(1, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
    },
    delay: 500,
  });

  return (
    <animated.div ref={ref} className="sm:flex lg:block">
      <div className="sm:flex-shrink-0">
        <animated.div style={trail[0]}>
          <Image
            height={1080}
            width={1920}
            className="h-20 w-20"
            src={image}
            alt={title}
          />
        </animated.div>
      </div>
      <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
        <animated.h3
          style={trail[0]}
          className="text-sm font-medium text-cyan-600"
        >
          {title}
        </animated.h3>
        {description.map((paragraph: string, index: number) => (
          <animated.p
            key={index}
            className="mt-2 text-sm text-gray-500"
            style={trail[0]}
          >
            {paragraph}
          </animated.p>
        ))}
      </div>
    </animated.div>
  );
};

export default CertificationItem;