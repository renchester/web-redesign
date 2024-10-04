import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

function Header({ isIntersecting }) {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);

  const hideNav = () => {
    setShowMenu(false);
  };

  // Hide nav on Global Escape Key
  useEffect(() => {
    if (!window) return;

    const escKeyListener = (e) => {
      if (e.key !== 'Escape') return;

      hideNav();
    };

    const globalClickListener = (e) => {
      if (!navRef.current?.contains(e.target)) {
        hideNav();
      }
    };

    window.addEventListener('hashchange', hideNav);
    window.addEventListener('keydown', escKeyListener);
    window.addEventListener('click', globalClickListener);

    return () => {
      window.removeEventListener('hashchange', hideNav);
      window.removeEventListener('keydown', escKeyListener);
      window.addEventListener('click', globalClickListener);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 z-20 flex w-full items-center justify-between px-5 sm:px-10 ${isIntersecting ? 'h-[100px] bg-transparent' : 'h-[100px] border-b border-solid border-slate-400 bg-zinc-50'} transition-colors duration-200`}
    >
      <a onClick={hideNav} href="#hero">
        <Icon isIntersecting={isIntersecting} />
      </a>
      <button
        type="button"
        aria-labelledby="burger-menu"
        className="z-30 block"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-expanded={showMenu}
        aria-controls="nav"
      >
        <span className="hidden" id="burger-menu">
          Toggle Menu
        </span>
        <div className="space-y-1">
          <div
            className={`h-1 w-6 -rotate-6 ${isIntersecting ? 'bg-white' : 'bg-orange-500'} ${showMenu ? 'translate-y-[175%] -rotate-[45deg] bg-white' : '-rotate-6'} transition-transform duration-150`}
          ></div>
          <div
            className={`h-1 w-6 -rotate-6 ${isIntersecting ? 'bg-white' : 'bg-orange-500'} ${showMenu && 'opacity-0'} transition-opacity duration-100`}
          ></div>
          <div
            className={`h-1 w-6 ${isIntersecting ? 'bg-white' : 'bg-orange-500'} transition-transform duration-150 ${showMenu ? '-translate-y-[175%] rotate-[45deg] bg-white' : '-rotate-6'} `}
          ></div>
        </div>
      </button>

      <div
        className={`absolute right-0 top-0 z-10 h-screen w-3/5 origin-top-right bg-orange-500 shadow-lg transition-all duration-100 ease-out md:max-w-[300px] ${showMenu ? 'scale-100' : 'scale-0'} `}
        aria-hidden={!showMenu}
      >
        <nav id="nav" className="flex flex-col items-end gap-10 pl-12 pr-10 pt-[120px] text-right">
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#hero"
          >
            Home
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#about"
          >
            About Us
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#what-we-do"
          >
            What We Do
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#socials"
          >
            What&apos; Latest
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#clients"
          >
            Our Clients
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#join-us"
          >
            Join Us
          </a>
          <a
            className="font-onest relative w-fit text-2xl font-semibold text-white before:absolute before:right-0 before:top-full before:h-1 before:w-[120%] before:origin-right before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-sky-900 before:transition-transform before:duration-100 before:content-[''] hover:before:scale-100 focus:outline-none focus:before:scale-100"
            href="#contact-us"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
