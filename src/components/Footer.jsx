function Footer() {
  return (
    <footer className="mt-10 flex flex-col justify-center py-10 md:flex-row md:gap-2">
      <span className="text-center text-xs text-sky-200">
        <strong>Rakso CT</strong>, Inc. &copy;2024. All Rights Reserved.
      </span>

      <a
        href="https://www.facebook.com/RaksoComputerTechnology/"
        target="_blank"
        className="text-center text-xs text-sky-200 visited:text-sky-200 hover:underline focus:underline active:text-sky-200"
      >
        @RaksoComputerTechnology
      </a>
    </footer>
  );
}

export default Footer;
