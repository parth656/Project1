import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGooglePlusCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

// import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" srcset="" />

        <p>
          We are your one and only solution to the tech problems you face every
          day. We are leading tech company whose aim is to increase the problem
          solving ability in children.
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquid eligendi minus tempora accusamus? Ipsam
            deserunt similique veritatis tenetur asperiores quae, cupiditate
            delectus facere vero rem pariatur consectetur hic quo.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <article>
            <div
              
            >
              <AiFillGooglePlusCircle />
              <p>Google</p>
            </div>
            <div
              
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
