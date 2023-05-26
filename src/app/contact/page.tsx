"use client";
import { useState } from "react";

import Form from "@/components/Contact/Form";
import Message from "@/components/Contact/Message";
import AnimatedList from "@/components/Animated/List";
import Contacts from "@/components/Contact/Contacts";

const ContactPage = () => {
  const [showMessageForm, setShowMessageForm] = useState(true);

  const handleFormChange = () => {
    setShowMessageForm(!showMessageForm);
  };

  const items = [
    <h2 className="text-4xl font-bold tracking-tight text-cyan-600">
      Hablanos sobre tu proyecto
    </h2>,
    <p className="mt-2 text-lg leading-8 text-gray-600">
      Ayudamos a empresas y particulares a desarrollar sus ideas.
    </p>,
  ];

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
            y="-64"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-64" className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
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
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <AnimatedList items={items} />
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          {showMessageForm ? (
            <div>
              <Form handleFormChange={handleFormChange} />
            </div>
          ) : (
            <div>
              <Message />
            </div>
          )}
          <Contacts/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
