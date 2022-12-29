const Navbar = () => {
  return (
    <nav className="w-full bg-white px-10">
      <figure className="relative flex aspect-[2/1] w-[120px] p-0 lg:w-[150px]">
        <img
          className="h-full w-full object-contain"
          src="/assets/icons/logo.svg"
          alt="Gas Rail Logo"
        />
      </figure>
    </nav>
  );
};

export default Navbar;
