"use client";

import { useState, useEffect, ReactElement } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const Navbar = (): ReactElement => {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/about" },
    {
      name: "Contacto",
      href: "/contact",
    },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isScrolled ? "bg-slate-100 shadow-md" : "bg-transparent"
      } transition-colors duration-500`}
    >
      <nav
        className="flex items-center justify-between p-4 lg:px-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lagalm Industrial</span>
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold tracking-widest text-gray-700 hover:text-gray-500 transition-all duration-300`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" onClick={toggleMobileMenu}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Logo />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map(({ name, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-gray-500 transition-all duration-300`}
                      onClick={toggleMobileMenu}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
