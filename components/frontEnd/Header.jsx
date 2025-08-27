"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, User, Globe, Linkedin, Facebook, Twitter } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconColor = isFixed ? "text-black" : "text-white";

  return (
    <div>
      <header
        className={clsx(
          "fixed w-full left-0 z-50 transition-colors duration-500 ease-in-out  "
        )}
      >
        {/* 🔹 Top Info Bar */}
        {pathname === "/" && (
          <div
            className={clsx(
              "text-white hidden md:flex text-xs sm:text-sm md:text-base transition-all duration-500",
              isFixed
                ? "opacity-0 -translate-y-6 pointer-events-none md:hidden"
                : "opacity-100 translate-y-0 relative"
            )}
          >
            <div className="w-full flex flex-wrap justify-end items-center ">
              {/* Left: Social Icons */}
              <div className="flex items-center border-l-2 border-white pr-4 mr-4">
                <div className="flex items-center">
                  <Link href="#" className="px-1 hover:text-yellow-400">
                    <Globe className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="px-1 hover:text-yellow-400">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="px-1 hover:text-yellow-400">
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="px-1 hover:text-yellow-400">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </div>
                <span className="ml-2">Connect with us</span>
              </div>

              {/* Middle: Email + Phone */}
              <div className="flex items-center space-x-6 border-l-2 border-white pl-4 pr-4 mr-4">
                <span className="hover:text-yellow-400">
                  📧 klippe@qodeinteractive.com
                </span>
                <span className="hover:text-yellow-400">📞 33 876 6284</span>
              </div>

              {/* Right: Language + Help */}
              <div className="flex items-center space-x-4 border-l-2 border-white pl-4">
                <span>🌍 English</span>
                <Link href="#" className="hover:text-yellow-400">
                  ℹ️ How it works?
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 🔹 Main Header */}
        <div
          className={clsx(
            "flex justify-between items-center w-full md:border-y-2 border-white px-6 py-4 md:px-10 lg:px-20 xl:px-38 transition-all duration-700",
            pathname === "/"
              ? isFixed
                ? "bg-gradient-to-b from-white/95 to-white shadow-md"
                : "bg-transparent"
              : "bg-white shadow-md" // 👈 default for all other pages
          )}
        >
          {/* Logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="no-underline cursor-pointer">
              <Image
                src={!isFixed ? "/logo.png" : "/logo-red.png"}
                alt="Logo"
                width={125}
                height={125}
              />
            </Link>
          </motion.div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded">
                  <Menu
                    className={clsx(
                      "w-6 h-6 hover:text-yellow-400 transition-colors duration-300",
                      iconColor
                    )}
                  />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full">
                <nav className="space-y-6 flex flex-col items-center justify-center h-full text-lg font-medium">
                  <Link
                    href="#"
                    className="hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Login/User */}
            <Link href="/auth/login" className="no-underline cursor-pointer">
              <User
                className={clsx(
                  "w-6 h-6 hover:text-yellow-400 transition-colors duration-300",
                  iconColor
                )}
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
