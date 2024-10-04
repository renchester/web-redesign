import Icon from './Icon';

function Header() {
  return (
    <div className="fixed top-0 flex w-full justify-between px-10 py-8">
      <a href="#hero">
        <Icon />
      </a>
      <button type="button" aria-labelledby="burger-menu" className="">
        <span className="hidden" id="burger-menu">
          Toggle Menu
        </span>
        <div className="space-y-1">
          <div className="h-1 w-6 -rotate-6 bg-white"></div>
          <div className="h-1 w-6 -rotate-6 bg-white"></div>
          <div className="h-1 w-6 -rotate-6 bg-white"></div>
        </div>
      </button>
    </div>
  );
}

export default Header;
