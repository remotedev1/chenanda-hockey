"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/GlobalContainer";

// Reusable component for each animated number
const AnimatedNumber = ({ value }) => {
  // Pad the number with a leading zero if it's a single digit
  const formattedValue = String(value).padStart(2, "0");

  return (
    // Wrapper to create a fixed-height container and hide overflow
    <div className="relative h-10 w-12 overflow-hidden flex justify-center items-center">
      <AnimatePresence initial={false}>
        <motion.span
          key={formattedValue}
          // Animation variants for entering and exiting
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          // Styling for the number itself
          className="absolute text-4xl font-bold font-mono text-indigo-600"
        >
          {formattedValue}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const EventCountdown = () => {
  // NOTE: Target date is set for March 30, 2026.
  //       Modify this for your specific event.
  const targetDate = new Date("2026-03-30T00:00:00");

  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up a timer that updates the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-5">
      <Container>
        <div className="bg-yellow-400 rounded-xl shadow-lg flex flex-col md:flex-row max-w-4xl  w-full mx-auto  md:my-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2  hidden lg:flex ">
            <img
              src="https://plus.unsplash.com/premium_photo-1714329905829-41d19b4ad2f9?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trophies for the Kodava Hockey Cup"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Kodava Hockey Cup 2025
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Organized by Chenanda
              <br />
              March 30 - April 5, 2025
              <br />
              Napokulu Stadium, India
            </p>
            <div className="flex gap-6 mb-8">
              <div>
                <span className="block text-2xl font-bold text-slate-800">
                  400+
                </span>
                <span className="text-slate-600">Teams</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-800">
                  200+
                </span>
                <span className="text-slate-600">Matches</span>
              </div>
            </div>

            <a
              href="#"
              className="w-full text-center bg-indigo-600 text-white rounded-lg py-3 px-6 font-medium transition-colors hover:bg-indigo-700"
            >
              Learn More
            </a>

            {/* Countdown Timer */}
            <div className="mt-auto pt-6 border-t border-slate-200">
              {Object.keys(timeLeft).length > 0 ? (
                <div className="flex justify-around text-center">
                  <div className="flex flex-col items-center">
                    <AnimatedNumber value={timeLeft.days} />
                    <div className="text-xs text-slate-500 uppercase tracking-widest">
                      Days
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <AnimatedNumber value={timeLeft.hours} />
                    <div className="text-xs text-slate-500 uppercase tracking-widest">
                      Hours
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <AnimatedNumber value={timeLeft.minutes} />
                    <div className="text-xs text-slate-500 uppercase tracking-widest">
                      Minutes
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <AnimatedNumber value={timeLeft.seconds} />
                    <div className="text-xs text-slate-500 uppercase tracking-widest">
                      Seconds
                    </div>
                  </div>
                  <div className="text-center text-lg font-semibold text-slate-800">
                    To go!
                  </div>
                </div>
              ) : (
                <div className="text-center text-lg font-semibold text-slate-800">
                  The Event Has Started!
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventCountdown;
