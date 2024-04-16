import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Celebrating the art of hospitality, SKHC is more than just 
            a destination; it's a haven where every guest is cherished. 
            Nestled in the heart of Armoor, we redefine luxury with personalized
            service, exquisite cuisine, and unparalleled comfort. Our 
            commitment to excellence transcends expectations, ensuring each stay is 
            a cherished memory. From the moment you arrive, our dedicated team 
            ensures your every need is met with warmth and efficiency. Whether you're 
            here for business or leisure,immerse yourself in a world of refined elegance 
            and unparalleled hospitality. Welcome to SKHC, where every moment is crafted with care and every experience is extraordinary.
            </p>
            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
