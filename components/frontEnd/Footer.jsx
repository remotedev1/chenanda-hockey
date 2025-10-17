import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 ">
      <div className=" mx-auto px-4 grid md:grid-cols-2 gap-10 mt-10 container mx-auto">
        {/* Left Section - Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            CHENANDA<span className="text-white">.IN</span>
          </h2>
        </div>

        <div className="flex flex-row lg:justify-end space-x-5">
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Home</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Get In Touch
            </h3>
            {/* <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-yellow-400" />
                <a
                  href="tel:+910546546541654654"
                  className="hover:text-yellow-400"
                >
                  +91-0546546541654654
                </a>
              </div> */}
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <a
                href="mailto:chenandahockeyfestival.official@gmail.com"
                className="font-semibold hover:underline hover:text-yellow-600 transition-colors text-xs"
              >
                chenandahockeyfestival.official@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Chenanda.in — All rights reserved.
      </div>
    </footer>
  );
}
