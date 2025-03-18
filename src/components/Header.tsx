"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full py-4 px-4 sm:px-6 bg-black text-white fixed top-0 z-50">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-400 transition"
          to="home"
        >
          Avneesh.tech
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-400 transition"
              to={link.href.replace("#", "")}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              onSetActive={() => setIsMenuOpen(false)}
              onSetInactive={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={isMenuOpen ? "/icons/cross.svg" : "/icons/menu.svg"}
            alt="Menu Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden absolute top-16 left-0 right-0 bg-black p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 hover:text-gray-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                    to={link.href.replace("#", "")}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setIsMenuOpen(false)}
                    onSetInactive={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
