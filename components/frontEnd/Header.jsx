"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Menu,
  User,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
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

  const iconColor = isFixed || pathname !== "/" ? "text-black" : "text-white";

  return (
    <div>
      <header className={clsx("fixed w-full left-0 z-50  ")}>
        {/* 🔹 Main Header */}
        <div
          className={clsx(
            "flex justify-between items-center w-full px-6 py-4 md:px-10 lg:px-20 xl:px-38 transition-all duration-700",
            pathname === "/"
              ? isFixed
                ? "bg-gradient-to-b from-white/95 to-white shadow-md " // red when fixed
                : "bg-black/40 shadow-lg  border-white" // normal state
              : "bg-white shadow-md " // default for other pages
          )}
        >
          {/* Logo */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-2"
          >
            {isFixed && (
              <Link href="/" className="no-underline cursor-pointer">
                <Image
                  src={isFixed && "/logo-red.png"}
                  alt="Logo"
                  width={125}
                  height={125}
                />
              </Link>
            )}
          </motion.div>
          {/* Left side */}

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}   >
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
                <nav className="space-y-6 flex flex-col items-center justify-center h-full text-lg font-medium bg-black text-white">
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
