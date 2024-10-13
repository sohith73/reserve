import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE THE TABLE IS BOOKED</h1>
          <p>Please book in another time slots</p>
          <p> Thank you - Team SKHC</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
