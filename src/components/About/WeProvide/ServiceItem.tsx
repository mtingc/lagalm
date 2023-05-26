import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ServiceItem: React.FC<{
  name: string;
  description: string;
  icon: React.ReactNode;
}> = ({ name, description, icon }) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const delay = 500;
  const index = useRef(0);
  const itemDelay = index.current * delay;

  const animateItem = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 300, friction: 20 },
    delay: itemDelay,
  });

  if (inView && !isInView) {
    setIsInView(true);
  }

  useEffect(() => {
    index.current += 1;
  }, []);

  return (
    <animated.div ref={ref} style={animateItem} className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        {icon}
        {name}
      </dt>
      <dd className="inline">{description}</dd>
    </animated.div>
  );
};

export default ServiceItem;
