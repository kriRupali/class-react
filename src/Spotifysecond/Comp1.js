import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
const Comp1 = () => {
  return (
    <section
      style={{
        height: "20vh",
        width: "40vh",
        backgroundColor: "#121212",
        color: "white",
        // padding:"10px 2vw",
        borderRadius: "20px",
        border:"10px solid black"

      }}
    >
      <article >
        <span>
          <div style={{display:"flex",gap:"15px",padding:"1.5vw 1vw"}}>
            <AiFillHome color="white" size="20px" />
            <div>Home</div>
          </div>
        </span>
        <span>
          <form>
            <div style={{display:"flex",gap:"15px",padding:"1.5vw 1vw"}}>
              <FiSearch color="white" size="20px" />
              <input type="searchbar" placeholder="Search" />
            </div>
          </form>
        </span>
      </article>
    </section>
  );
};

export default Comp1;
