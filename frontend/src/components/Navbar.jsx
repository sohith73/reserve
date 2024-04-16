import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">CheckInnEase</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
                {element.title === "RESERVATION" && <a href="/res"></a>}
              </Link>
            ))}
          </div>
          <a href="/menu">
            <button className="menuBtn">OUR MENU</button>
          </a>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
