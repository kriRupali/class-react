import React from "react";
import { BiLibrary } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

const Comp2 = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "40vh",
        backgroundColor: "black",
        color: "white",
        border: "10px solid black",
      }}
    >
      {/* first */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#121212",
           borderTopRightRadius:"1vw",

          justifyContent: "initial",
          gap: "10px",
          // boxShadow:"1px 1px 1px #121212"
        }}
      >
        <BiLibrary />
        <h4
          style={{
            fontWeight: "lighter",
            fontSize: "20px",
            paddingBottom: "1vw",
            overflow: "visible",
          }}
        >
          Your Library
        </h4>
        <div>+</div>
      </div>
      <div style={{height:"25vh",overflowY:"scroll"}}>
        <div
          style={{
            padding: "2.5vw 2vw",
            backgroundColor: "#121212",
            borderRadius: "15px",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "1.5vw" }}>
              Create your first playlist
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                paddingBottom: "1.5vw",
              }}
            >
              it;s easy, we'll help you
            </p>
            <button
              className="firstbtn"
              style={{
                background: "white",
                alignContent: "center",
                padding: "10px 5px",
              }}
            >
              Create playlist
            </button>
          </div>
        </div>

        {/* second */}
        <div
          style={{
            backgroundColor: "#242424",
            border: "10px solid black",
            borderRadius: "15px",
            padding: "2.5vw 2vw",
          }}
        >
          <p style={{ fontWeight: "bold" }}>
            {" "}
            Let's find some podcasts to follow
          </p>
          <p style={{ fontWeight: "lighter" }}>
            we'll keep you updated on new episodes
          </p>
          <button
            className="secondbtn"
            style={{
              background: "white",
              alignContent: "center",
              padding: "5px 0",
            }}
          >
            Browse podcasts
          </button>
        </div>
      </div>
      {/* third */}
      <div style={{ backgroundColor: "#121212", height: "50vh" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5vw",
            flexWrap: "wrap",
            listStyleType: "none",
            fontSize: "14px",
            fontWeight: "lighter",
            padding: "5vw 1vw",
          }}
        >
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
          <li>Cookies</li>
        </ul>
        <div>
          <BsGlobe />
          <button
            className="thirdbtn"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px white",
            }}
          >
            English
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comp2;
