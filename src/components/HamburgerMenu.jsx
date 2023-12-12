import { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <header className="border-b border-white shadow-md bg-[#da70d6]">
      <nav className=" flex justify-between items-center p-4 border-2 border-red-500">
        <a href="#" className="text-[2.1rem] font-medium text-white">
          Brand
        </a>

        <div
          className={`nav-menu text-[18px] font-normal text-black overflow-hidden list-none z-10 ${
            isMenuOpen ? "active" : ""
          } `}
        >
          <ul
            className="border-2"
          >
            <li className="my-[2.5rem] ml-20 hover:text-[#086d57]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-home" style={{ marginRight: "4px" }}></i>
                Home
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-group" style={{ marginRight: "4px" }}></i>
                About
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-bell" style={{ marginRight: "4px" }}></i>
                Notification
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-phone" style={{ marginRight: "4px" }}></i>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar" style={{ backgroundColor: "white" }}></span>
          <span className="bar" style={{ backgroundColor: "white" }}></span>
        </div>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
