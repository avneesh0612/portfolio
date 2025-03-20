"use client";

import { navLinks } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { FC, useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Icons/Logo";
import { ThemeToggle } from "./theme-toggle";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 sm:px-16 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md fixed top-0 z-50 flex justify-between items-center box-border">
      <Link
        href="/"
        className="text-2xl font-bold text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400 transition"
        to="home"
      >
        <Logo width={60} height={40} />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400 transition"
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
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <motion.button
          className="focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />
          ) : (
            <MenuIcon className="w-6 h-6 text-neutral-900 dark:text-neutral-100" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-16 left-0 right-0 bg-background-light dark:bg-background-dark p-4"
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
                  className="block py-2 text-neutral-900 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 transition"
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
    </header>
  );
};
