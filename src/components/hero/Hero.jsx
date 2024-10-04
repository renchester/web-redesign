import { forwardRef } from 'react';

const Hero = forwardRef(function Hero(props, ref) {
  return (
    <section
      id="hero"
      className="relative grid h-dvh w-full snap-start place-content-center bg-gradient-to-br from-sky-700 to-sky-400"
    >
      <div className="relative flex flex-col items-center md:flex-row-reverse">
        <div className="animate-bob">
          <img src="/objects/lightbulb-2.png" alt="Lightbulb" />
        </div>

        <h1 className="flex flex-col text-left font-semibold text-white" ref={ref}>
          <span className="font-inter text-2xl font-semibold">A</span>
          <span className="font-onest text-7xl first-letter:text-orange-500"> Creative</span>
          <span className="font-onest text-7xl first-letter:text-orange-500">Technology</span>
          <span className="font-onest text-6xl font-thin">Company</span>
        </h1>
      </div>
      <div className="absolute bottom-6 flex w-full justify-center">
        <a
          href="#about"
          className="inline-flex transform items-center rounded-full bg-orange-500 px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-600 hover:text-white"
        >
          LEARN MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
});

export default Hero;
