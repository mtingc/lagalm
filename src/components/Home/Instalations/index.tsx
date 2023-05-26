import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Instalations = () => {
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
    <animated.div
      ref={ref}
      style={animateImage}
      className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <div>
        <Image
          height={1080}
          width={1920}
          src="/images/home/instalations.jpg"
          alt="Lagalm Idustrial instalations"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    </animated.div>
  );
};

export default Instalations;
