import { useState } from 'react';

function ClientLogo({ client }) {
  const [isFocused, setFocusedState] = useState(false);

  const focus = () => setFocusedState(true);
  const unfocus = () => setFocusedState(false);

  return (
    <li
      key={client.name}
      className="relative w-24 flex-shrink-0 md:w-28"
      tabIndex={0}
      onFocus={focus}
      onBlur={unfocus}
      onMouseEnter={focus}
      onMouseLeave={unfocus}
    >
      <img
        src={client.img}
        alt={`${client.name} Logo`}
        className="object-cover grayscale filter transition-all duration-300 hover:grayscale-0"
      />
      {
        <span
          className={`font-onest top-4/5 absolute left-1/2 w-[120%] -translate-x-1/2 text-center text-[0.7rem] font-semibold text-sky-800 ${!isFocused && 'opacity-0'} transition-opacity duration-150`}
        >
          {client.name}
        </span>
      }
    </li>
  );
}

export default ClientLogo;
