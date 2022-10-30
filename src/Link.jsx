import React from "react";
import "./Link.css";

const Link = () => {
  return (
    <section className="link">
      <div className="links">
        <button className="frame">
          <a id="username" href="https://twitter.com/Talktobanky">
            Twitter Link
          </a>
        </button>
      </div>
      <div className="links">
        <button className="frame">
          <a id="btn-zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
        </button>
      </div>
      <div className="links">
        <button className="frame">
          <a id="books" href="http://books.zuri.team">
            Zuri Books
            {/* <sub>Find books abou
              t design and coding here</sub> */}
          </a>
        </button>
      </div>
      <div className="links">
        <button className="frame">
          <a
            id="book_python"
            href="https://books.zuri.team/python-for-beginners?ref_id=<Azeez Bankole>"
          >
            Python Books
          </a>
          {/* 
          <sub id="selling">
            Buy Basic coding 1.0 <br />
            <b>Price: $4.99 </b>
          </sub> */}
        </button>
      </div>
      <div className="links">
        <button className="frame">
          <a id="pitch" href="https://background.zuri.team">
            Pitch
          </a>
          {/* <sub className="sub">
            Make informed decision with our <b>Background Check for Coders</b>
          </sub> */}
        </button>
      </div>
      <div className="links">
        <button className="frame">
          <a id="book_design" href="https://books.zuri.team/design-rules">
            Design Books
          </a>
          {/* <sub className="sub">
            Get free <b>Design Books offered by Zuri</b>
          </sub> */}
        </button>
      </div>
    </section>
  );
};

export default Link;
