import React, { useEffect, useState } from 'react';

const HockeyScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll position
  const playerRotation = scrollY * 0.2;
  const playerScale = 1 + (scrollY * 0.0005);
  const stickRotation = scrollY * 0.3;
  const ballX = Math.sin(scrollY * 0.01) * 20;
  const ballY = Math.cos(scrollY * 0.01) * 10;
  const circleOpacity = Math.max(0.3, 1 - (scrollY * 0.002));

  return (
    <div className="min-h-[500vh] bg-black relative">
      {/* Logo region with hockey stick and ball */}
      <div className="fixed top-8 left-8 z-30 pointer-events-none">
        <div className="flex items-center space-x-3">
          {/* Hockey stick logo */}
          <div 
            className="relative"
            style={{
              transform: `rotate(${15 + Math.sin(scrollY * 0.005) * 10}deg)`
            }}
          >
            <div className="w-1 h-16 bg-red-400 rounded-full shadow-lg" />
            <div className="w-4 h-3 bg-red-400 rounded-lg -mt-1 -ml-1.5" />
          </div>
          
          {/* Hockey ball logo */}
          <div 
            className="w-3 h-3 bg-red-400 rounded-full shadow-lg"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.008) * 3}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`
            }}
          />
          
          {/* Logo text */}
          <div className="text-red-400 font-bold text-lg tracking-wider">
            HOCKEY
          </div>
        </div>
      </div>

      {/* Fixed background animation container */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-96 h-96">
          {/* Red circle background */}
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 transition-opacity duration-300"
            style={{ 
              opacity: circleOpacity,
              transform: `scale(${playerScale})`,
              background: `radial-gradient(circle at 30% 30%, #ff4444, #cc0000)`
            }}
          />
          
          {/* Animated rings around the circle */}
          <div 
            className="absolute inset-0 rounded-full border-4 border-red-400 opacity-20 animate-pulse"
            style={{ 
              transform: `scale(${1.1 + Math.sin(scrollY * 0.01) * 0.1}) rotate(${scrollY * 0.1}deg)` 
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border-2 border-red-300 opacity-30"
            style={{ 
              transform: `scale(${1.2 + Math.cos(scrollY * 0.015) * 0.05}) rotate(${-scrollY * 0.15}deg)` 
            }}
          />

          {/* Hockey player silhouette */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotate(${playerRotation}deg) scale(${playerScale})`
            }}
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 400 400"
              className="fill-black drop-shadow-lg"
            >
              {/* Player body */}
              <g transform="translate(200, 200)">
                {/* Head */}
                <circle cx="0" cy="-80" r="25" />
                {/* Hair/ponytail */}
                <path d="M -20,-85 Q -35,-95 -25,-105 Q -15,-100 -10,-95" />
                
                {/* Torso */}
                <ellipse cx="0" cy="-30" rx="35" ry="45" />
                
                {/* Arms */}
                <ellipse cx="-25" cy="-40" rx="15" ry="35" transform="rotate(-20)" />
                <ellipse cx="25" cy="-25" rx="15" ry="40" transform="rotate(25)" />
                
                {/* Legs */}
                <ellipse cx="-15" cy="30" rx="18" ry="50" transform="rotate(-15)" />
                <ellipse cx="15" cy="35" rx="18" ry="50" transform="rotate(20)" />
                
                {/* Hands/gloves */}
                <circle cx="-35" cy="-15" r="12" />
                <circle cx="40" cy="0" r="12" />
              </g>
            </svg>
          </div>

          {/* Hockey stick */}
          <div 
            className="absolute"
            style={{
              left: '60%',
              top: '45%',
              transform: `rotate(${45 + stickRotation}deg)`,
              transformOrigin: 'top left'
            }}
          >
            <div className="w-2 h-32 bg-black rounded-full shadow-lg" />
            <div className="w-8 h-6 bg-black rounded-lg -mt-1 -ml-3" />
          </div>

          {/* Hockey ball */}
          <div 
            className="absolute w-4 h-4 bg-black rounded-full shadow-lg transition-all duration-300"
            style={{
              left: `${55 + ballX}%`,
              top: `${75 + ballY}%`,
              transform: `scale(${0.8 + Math.sin(scrollY * 0.02) * 0.3})`
            }}
          />

          {/* Particle effects */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-60"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px) translateX(${Math.cos(scrollY * 0.015 + i) * 15}px)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content sections to enable scrolling */}
      <div className="relative z-10 space-y-screen">
        <section className="h-screen flex items-center justify-start pl-16">
          <div className="text-white max-w-md">
            <h1 className="text-5xl font-bold mb-6 text-red-400">Field Hockey</h1>
            <p className="text-xl leading-relaxed">
              Experience the dynamic world of field hockey with smooth scroll animations that bring the sport to life.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-end pr-16">
          <div className="text-white max-w-md text-right">
            <h2 className="text-4xl font-bold mb-6 text-red-400">In Motion</h2>
            <p className="text-xl leading-relaxed">
              Watch as the player moves and rotates with your scroll, creating an immersive visual experience.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center">
          <div className="text-white max-w-md text-center">
            <h2 className="text-4xl font-bold mb-6 text-red-400">Interactive Design</h2>
            <p className="text-xl leading-relaxed">
              Scroll-based animations create engaging user experiences that respond to user interaction.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-start pl-16">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-6 text-red-400">Visual Effects</h2>
            <p className="text-xl leading-relaxed">
              Dynamic particles, rotating elements, and scaling effects combine to create a captivating animation experience.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center">
          <div className="text-white max-w-md text-center">
            <h2 className="text-4xl font-bold mb-6 text-red-400">Endless Possibilities</h2>
            <p className="text-xl leading-relaxed">
              This scroll-driven approach opens up infinite creative possibilities for interactive storytelling and user engagement.
            </p>
          </div>
        </section>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 right-8 text-white text-sm opacity-60 z-20">
        Scroll: {Math.round(scrollY)}px
      </div>
    </div>
  );
};

export default HockeyScrollAnimation;