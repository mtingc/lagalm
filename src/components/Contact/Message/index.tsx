import Link from "next/link";
import { useSpring, animated } from "react-spring";

const Message = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 500 },
  });
  return (
    <animated.div style={animation} className="lg:flex-auto">
      <div className="text-center pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-cyan-600 sm:text-6xl">
          Gracias por tu mensaje
        </h1>
        <p className="mt-6 text-md leading-8 text-gray-600">
          En brevedad nos pondremos en contacto con usted.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-cyan-600"
          >
            Seguir explorando <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default Message;
