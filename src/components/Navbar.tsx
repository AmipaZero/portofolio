import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


export function Header() {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 px-4">
  <Navbar
    fluid
    className="w-full !rounded-none !bg-black text-white text-lg"
  >
    {/* BRAND */}
    <NavbarBrand href="/">
    <span className="text-3xl font-bold text-white tracking-wide hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition">
      Amipa Umadiniah
    </span>
  </NavbarBrand>

    {/* TOGGLE */}
    <NavbarToggle />

    {/* MENU */}
    <NavbarCollapse>
      <NavbarLink
        href="/"
        active
        className="relative text-xl font-semibold text-white transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
        hover:after:w-full hover:text-gray-300"
      >
        Home
      </NavbarLink>

      <NavbarLink
        href="#keahlian"
        className="relative text-xl font-semibold text-white transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
        hover:after:w-full hover:text-gray-300"
      >
        Keahlian
      </NavbarLink>

      <NavbarLink
        href="#proyek"
        className="relative text-xl font-semibold text-white transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
        hover:after:w-full hover:text-gray-300"
      >
        Proyek
      </NavbarLink>
    </NavbarCollapse>
  </Navbar>
</div>
   
  );
}