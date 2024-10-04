import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-blue-500 text-center">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
