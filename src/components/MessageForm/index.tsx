import Link from 'next/link'

const MessageForm = () => {
  return (
    <div className="lg:flex-auto">
      <div className="text-center pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Gracias por tu mensaje
        </h1>
        <p className="mt-6 text-md leading-8 text-gray-600">
          En brevedad nos pondremos en contacto con usted.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Seguir explorando <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
