import { forwardRef } from 'react';

const Hero = forwardRef(function Hero(props, ref) {
  return (
    <section
      id="hero"
      className="relative grid h-dvh w-full snap-start place-content-center bg-gradient-to-br from-sky-700 to-sky-400"
    >
      <div className="relative mb-10 flex flex-col items-center sm:mb-0 md:flex-row-reverse">
        <div className="animate-bob">
          <img src="/objects/lightbulb.png" alt="Bouncing Lightbulb" />
        </div>

        <h1 className="flex flex-col text-left font-semibold text-white md:pl-10" ref={ref}>
          <span className="font-inter text-2xl md:text-3xl">A</span>
          <span className="font-onest text-6xl first-letter:text-orange-500 sm:text-7xl md:text-8xl"> Creative</span>
          <span className="font-onest text-6xl first-letter:text-orange-500 sm:text-7xl md:text-8xl">Technology</span>
          <span className="font-onest text-6xl font-thin sm:text-7xl md:text-6xl">Company</span>
        </h1>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        <a
          href="#about"
          className="text-md inline-flex transform items-center rounded-tl-xl rounded-tr-2xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition-all visited:text-white hover:bg-orange-600 hover:pb-10 active:text-white"
        >
          LEARN MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
});

export default Hero;
