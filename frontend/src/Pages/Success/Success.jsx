import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  const [otp, setOtp] = useState()
  
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);
  const valid = () =>{
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    setOtp(randomNumber)
  }
  useEffect(()=>{
    valid()
  },[])
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Table number : {otp} .</h1>
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;