import { useEffect, useRef, useState } from 'react';
import About from './components/about/About';
import CallToAction from './components/CallToAction';
import Clients from './components/clients/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Socials from './components/Socials';

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 1, // Trigger when the target is fully visible
      },
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="relative flex snap-y snap-mandatory flex-col items-center justify-center overflow-y-scroll bg-zinc-50 text-center">
      <Header isIntersecting={isIntersecting} />
      <Hero ref={targetRef} />
      <About />
      <Socials />
      <Clients />
      <CallToAction />
      <div className="w-full bg-gradient-to-br from-blue-900 to-sky-600">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
