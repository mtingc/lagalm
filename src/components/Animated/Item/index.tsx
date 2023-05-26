import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

interface AnimatedListItemProps {
  children: React.ReactNode;
}

const AnimatedListItem: React.FC<AnimatedListItemProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const styles = useSpring({
    config: config.wobbly,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
  });

  return (
    <animated.div ref={ref} style={styles}>
      {children}
    </animated.div>
  );
};

export default AnimatedListItem;
