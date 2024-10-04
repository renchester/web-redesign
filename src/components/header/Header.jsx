import Icon from './Icon';

function Header({ isIntersecting }) {
  return (
    // ${isIntersecting ? 'bg-transparent' : 'bg-white'}
    <div
      className={`fixed top-0 z-10 flex w-full items-center justify-between px-10 ${isIntersecting ? 'h-[100px] bg-transparent' : 'h-[100px] border-b border-solid border-slate-400 bg-sky-50'} transition-colors duration-200`}
    >
      <a href="#hero">
        <Icon isIntersecting={isIntersecting} />
      </a>
      <button type="button" aria-labelledby="burger-menu" className="block">
        <span className="hidden" id="burger-menu">
          Toggle Menu
        </span>
        <div className="space-y-1">
          <div className={`h-1 w-6 -rotate-6 bg-white ${isIntersecting ? 'bg-white' : 'bg-orange-500'}`}></div>
          <div className={`h-1 w-6 -rotate-6 bg-white ${isIntersecting ? 'bg-white' : 'bg-orange-500'}`}></div>
          <div className={`h-1 w-6 -rotate-6 bg-white ${isIntersecting ? 'bg-white' : 'bg-orange-500'}`}></div>
        </div>
      </button>
    </div>
  );
}

export default Header;
