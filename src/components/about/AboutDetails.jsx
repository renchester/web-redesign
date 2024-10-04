import { useState } from 'react';
import { aboutDetails } from '../../data/about';
import AboutIcons from './AboutIcons';

function AboutDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [direction, setDirection] = useState('right');

  const handleNext = () => {
    // setDirection('right');
    setActiveIndex((prev) => (prev + 1 >= aboutDetails.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    // setDirection('left');
    setActiveIndex((prev) => (prev - 1 < 0 ? aboutDetails.length - 1 : prev - 1));
  };

  return (
    <div className="mr-4 mt-2 h-[400px] rounded-lg p-3 shadow-sm lg:w-4/5">
      {aboutDetails.map((detail, index) => (
        <button type="button" className="hidden" onClick={() => setActiveIndex(index)} key={detail.title}>
          <span>{detail.title}</span>
        </button>
      ))}

      <div>
        <div className="my-4 flex w-full justify-between">
          {<AboutIcons iconKey={aboutDetails[activeIndex].key} />}
          <div className="flex">
            <button type="button" className="block stroke-sky-700" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 h-12 w-12 stroke-sky-700"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button type="button" className="block stroke-sky-700" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 h-12 w-12 stroke-sky-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-onest mb-4 text-xl font-semibold text-orange-500">{aboutDetails[activeIndex].title}</h4>
          {aboutDetails[activeIndex].description.split('\n').map((p) => (
            <p key={p} className="mb-2 text-sm font-light text-gray-600">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
