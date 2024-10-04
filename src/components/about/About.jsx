import AboutDetails from './AboutDetails';

function About() {
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-label"
        className="relative min-h-screen w-full snap-start sm:flex sm:gap-10"
      >
        <img
          src="/objects/about-huddle.png"
          alt="Employees working on their laptops on one big wooden table"
          className={`clip-polygon absolute top-0 w-full object-cover brightness-75 grayscale filter sm:hidden`}
        />

        <div className="relative hidden w-1/3 flex-shrink-0 sm:block">
          <img
            src="/objects/about-huddle.png"
            alt="Employees working on their laptops on one big wooden table"
            className={`absolute top-1/2 h-4/5 -translate-y-1/2 object-cover grayscale`}
          />
        </div>

        <div className="flex flex-col items-start pl-8 pr-1 pt-[200px] text-left sm:pt-[120px]">
          <article>
            <span className="font-onest block pb-3 pl-2 text-xs font-semibold uppercase text-gray-500">
              Welcome to Rakso CT
            </span>
            <h2 id="about-label" className="font-onest mb-2 text-5xl md:text-6xl">
              <span className="font-bold">
                Abou
                <span className="text-orange-500">t</span>
              </span>{' '}
              <span className="font-light">Us</span>
            </h2>
            <div className="flex w-4/5 flex-col text-left">
              <p className="font-inter my-2 text-sm font-light text-slate-600">
                <strong>
                  Rakso <span className="text-orange-500">CT</span>
                </strong>{' '}
                is a digital solutions provider composed of both the young and the young-at-heart who like creating the
                inexistent and perfecting the imperfect.
              </p>
              <p className="font-inter mt-2 text-sm font-light text-slate-600">
                Located in the heart of the bustling city of Makati, we are made capable to execute amazing digital
                marketing and advertising campaigns and services to our clients here and abroad.
              </p>
            </div>
          </article>
          <article className="mb-6 pt-[120px]" id="what-we-do">
            <h2 className="font-onest mb-2 text-left text-5xl md:text-6xl">
              <span className="font-light">
                Wha<span className="text-orange-500">t</span>
              </span>{' '}
              <span className="font-semibold">We Do</span>
            </h2>
            <AboutDetails />
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
