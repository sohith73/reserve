import React from 'react'
import { data } from '../../restApi.json'
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Meenu = () => {
     return (
          <>
               <section className='menu' id='menu'>
                    <div className="container">
                         <div className="heading_section">
                              <Link to={"/"}>
                                   <button className="menuBtn">Back to Home <HiOutlineArrowNarrowRight /></button>
                              </Link>
                              <h1 className="heading">DISHES</h1>
                              <p>Indulge in culinary excellence with every bite. From farm to fork, savor the essence of perfection. Elevate your dining experience with our exquisite dishes.</p>
                         </div>
                         <div className="dishes_container">
                              {
                                   data[0].dishes1.map(element => (
                                        <div className="card" key={element.id}>
                                             <img src={element.image} alt={element.title} />
                                             <h3>{element.title}</h3>
                                             <button>{element.category}</button>
                                        </div>
                                   ))
                                   
                              }
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Meenu