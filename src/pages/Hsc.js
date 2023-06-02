import React from "react";
import "../assets/css/Hsc.css";

const Hsc = () => {
  return (
    <div>
      <h2 className="title">Join us my Learners</h2>

      <div className="main">
        <div className="child2">
          <div class="icon fb">
            <i className="fa-brands fa-facebook-f"></i>
            <span>
              <a
                href="https://www.facebook.com/samir.hossen.980?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                Facebook Group
              </a>
            </span>
          </div>
          <div className="icon wp">
            <i className="fa-brands fa-whatsapp"></i>
            <span>
              <a
                href="https://chat.whatsapp.com/DJjjUyg21gK0zsF553w2Nc"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Group
              </a>
            </span>
          </div>

          <div className="icon git">
            <i class="fa-brands fa-github"></i>
            <span>
              <a
                href="https://github.com/developer-mustafa"
                target="_blank"
                rel="noreferrer"
              >
                Github Code
              </a>
            </span>
          </div>
        </div>
        <div className="child1">
          <div className="icon lnk">
            <i className="fa-brands fa-linkedin-in"></i>
            <span>
              <a
                href="https://www.linkedin.com/in/developer-mustafa/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </span>
          </div>

          <div className="icon twt">
            <i className="fa-brands fa-twitter"></i>
            <span>
              <a
                href="https://twitter.com/Mustafa75869102"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </span>
          </div>
          <div className="icon yt">
            <i class="fa-brands fa-youtube"></i>
            <span>
              <a
                href="https://mustafa-portfolio2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hsc;
