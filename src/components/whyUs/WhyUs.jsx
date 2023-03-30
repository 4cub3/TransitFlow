import React from "react";
import Container from "../../shared/layout/container/Container";
import Card from "../../shared/layout/card/Card";
import classes from "./whyus.module.scss";
import Label from "../../shared/label/Label";
import Aeroplane from "../../store/images/airPlane.png";
import lady from "../../store/images/lady.png";
import Achievement from "./Achievement";
function WhyUs() {
  return (
    <main className={classes["why-us"]}>
      <Container>
        <Card>
          <article>
            <Label>Why Us</Label>
            <h2>We provide full range global logistics solution</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className={classes["quick-service"]}>
              <div>
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="29"
                    fill="url(#paint0_linear_1_4414)"
                  />
                  <path
                    d="M41 37.4598V24.5402C40.999 24.3536 40.9512 24.1705 40.8612 24.0095C40.7712 23.8484 40.6423 23.7151 40.4875 23.623L29.4875 17.1369C29.3393 17.0472 29.1711 17 29 17C28.8289 17 28.6607 17.0472 28.5125 17.1369L17.5125 23.623C17.3577 23.7151 17.2288 23.8484 17.1388 24.0095C17.0488 24.1705 17.001 24.3536 17 24.5402V37.4598C17.001 37.6464 17.0488 37.8295 17.1388 37.9905C17.2288 38.1516 17.3577 38.2849 17.5125 38.377L28.5125 44.8631C28.6607 44.9528 28.8289 45 29 45C29.1711 45 29.3393 44.9528 29.4875 44.8631L40.4875 38.377C40.6423 38.2849 40.7712 38.1516 40.8612 37.9905C40.9512 37.8295 40.999 37.6464 41 37.4598V37.4598Z"
                    stroke="#141414"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 34V27.0995L23 20"
                    stroke="#141414"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M41 24L29.1138 31L17 24"
                    stroke="#141414"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29 31V45"
                    stroke="#141414"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4414"
                      x1="-1.64433"
                      y1="12.5667"
                      x2="71.3201"
                      y2="17.7482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Delivery on Time</p>
              </div>
              <div>
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="29"
                    fill="url(#paint0_linear_1_4422)"
                  />
                  <path
                    d="M42.9643 21H16.0357C15.4637 21 15 21.4477 15 22V36C15 36.5523 15.4637 37 16.0357 37H42.9643C43.5363 37 44 36.5523 44 36V22C44 21.4477 43.5363 21 42.9643 21Z"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.5 33C31.433 33 33 31.433 33 29.5C33 27.567 31.433 26 29.5 26C27.567 26 26 27.567 26 29.5C26 31.433 27.567 33 29.5 33Z"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36 21L44 28"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36 37L44 30"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21L15 28"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 37L15 30"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4422"
                      x1="-1.64433"
                      y1="12.5667"
                      x2="71.3201"
                      y2="17.7482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Optimized Travel Cost</p>
              </div>
            </div>
          </article>
          <figure>
            <img src={Aeroplane} alt="aeroplane" />
          </figure>
          <figure>
            <img src={lady} alt="lady" />
          </figure>
          <Achievement />
        </Card>
      </Container>
    </main>
  );
}

export default WhyUs;
