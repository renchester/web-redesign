function CallToAction() {
  return (
    <section
      id="join-us"
      aria-labelledby="cta-label"
      className="clip-cta relative z-10 flex min-h-[400px] w-full flex-col items-center justify-center bg-orange-500 shadow-xl"
    >
      <h2 id="cta-label" className="font-onest mb-4 text-5xl text-white md:text-6xl">
        <span className="font-semibold">Join</span> <span className="font-light">Us</span>
      </h2>
      <p className="font-inter mx-auto mb-6 max-w-[720px] px-3 text-sm font-light text-white">
        Do you believe yourself to be a dreamer? Become an engineer of imagination with <strong>Rakso CT</strong>. Just
        send your cover letter and resume to
        <a href="mailto:jobs@raksoct.com" className="font-semibold hover:underline">
          {' '}
          jobs@raksoct.com
        </a>
      </p>
      <a
        href="#"
        className="mx-auto flex w-fit items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-2 ring-white transition-transform visited:text-white hover:bg-orange-600 active:scale-95"
      >
        View Available Positions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  );
}

export default CallToAction;
