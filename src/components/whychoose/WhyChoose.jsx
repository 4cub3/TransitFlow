import React from "react";
import classes from "./whychoose.module.scss";
import WhyChooseImage from "./WhyChooseImage";
import aeroplane from "../../store/images/aeroplane0.png";
import Label from "../../shared/label/Label";
import Card from "../../shared/layout/card/Card";
import Container from "../../shared/layout/container/Container";
function WhyChoose() {
  return (
    <main className={classes["why-choose"]}>
    <Container className={classes['control-width']}>
      <WhyChooseImage image={aeroplane} />
      <Card>
        <article>
          <Label>Why Choose</Label>
          <h2>We create opportunity to reach potential</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className={classes["quick-service"]}>
            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="url(#paint0_linear_1_4228)"
                />
                <path
                  d="M43 36.537V25.463C42.9991 25.303 42.9552 25.1461 42.8728 25.0081C42.7903 24.8701 42.6721 24.7558 42.5302 24.6768L32.4469 19.1174C32.311 19.0405 32.1569 19 32 19C31.8431 19 31.689 19.0405 31.5531 19.1174L21.4698 24.6768C21.3279 24.7558 21.2097 24.8701 21.1272 25.0081C21.0448 25.1461 21.0009 25.303 21 25.463V36.537C21.0009 36.697 21.0448 36.8539 21.1272 36.9919C21.2097 37.1299 21.3279 37.2442 21.4698 37.3232L31.5531 42.8826C31.689 42.9595 31.8431 43 32 43C32.1569 43 32.311 42.9595 32.4469 42.8826L42.5302 37.3232C42.6721 37.2442 42.7903 37.1299 42.8728 36.9919C42.9552 36.8539 42.9991 36.697 43 36.537V36.537Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38 34V28.0853L27 22"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 25L32.1043 31L21 25"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 31V43"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4228"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Safe Package</p>
            </div>
            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="url(#paint0_linear_1_4254)"
                />
                <path
                  d="M32 23V20"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 34.487C40.4792 39.8216 33.4375 41.6835 32.1875 41.9764C32.0645 42.0079 31.9355 42.0079 31.8125 41.9764C30.5625 41.6835 23.5208 39.8216 22 34.487V30.9096C22 30.7334 22.0554 30.5617 22.1582 30.4189C22.2611 30.2762 22.4062 30.1697 22.5729 30.1146L31.7396 27.0393C31.9093 26.9869 32.0907 26.9869 32.2604 27.0393L41.4271 30.1146C41.5938 30.1697 41.7389 30.2762 41.8418 30.4189C41.9446 30.5617 42 30.7334 42 30.9096V34.487Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 35V27"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 29V23.75C25 23.5511 25.0878 23.3603 25.2441 23.2197C25.4004 23.079 25.6123 23 25.8333 23H39.1667C39.3877 23 39.5996 23.079 39.7559 23.2197C39.9122 23.3603 40 23.5511 40 23.75V29"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4254"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>

              <p>Ship Everyware</p>
            </div>

            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="url(#paint0_linear_1_4237)"
                />
                <path
                  d="M32 20C38.6274 20 44 25.3726 44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32C20 25.3726 25.3726 20 32 20Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 36H43"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 28H43"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 20C34.2091 20 36 25.3726 36 32C36 38.6274 34.2091 44 32 44C29.7909 44 28 38.6274 28 32C28 25.3726 29.7909 20 32 20Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4237"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>

              <p>Global Tracking</p>
            </div>
            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5001"
                  r="31.5"
                  fill="url(#paint0_linear_1_4264)"
                />
                <path
                  d="M41 29.143H37.8579C37.4412 29.143 37.0416 29.3035 36.747 29.5893C36.4523 29.8751 36.2868 30.2626 36.2868 30.6668V34.4762C36.2868 34.8804 36.4523 35.2679 36.747 35.5537C37.0416 35.8395 37.4412 36 37.8579 36H39.4289C39.8456 36 40.2452 35.8395 40.5398 35.5537C40.8345 35.2679 41 34.8804 41 34.4762V29.143ZM41 29.143C41 27.9359 40.7536 26.7408 40.275 25.6266C39.7964 24.5123 39.095 23.501 38.2114 22.6511C37.3277 21.8011 36.2793 21.1292 35.1265 20.6743C33.9738 20.2193 32.7396 19.9903 31.4951 20.0003C30.2514 19.9915 29.0183 20.2215 27.8667 20.677C26.7151 21.1326 25.6678 21.8046 24.7852 22.6545C23.9026 23.5043 23.2021 24.5152 22.7241 25.6288C22.246 26.7424 22 27.9367 22 29.143V34.4762C22 34.8804 22.1655 35.2679 22.4602 35.5537C22.7548 35.8395 23.1544 36 23.5711 36H25.1421C25.5588 36 25.9584 35.8395 26.253 35.5537C26.5477 35.2679 26.7132 34.8804 26.7132 34.4762V30.6668C26.7132 30.2626 26.5477 29.8751 26.253 29.5893C25.9584 29.3035 25.5588 29.143 25.1421 29.143H22"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41 35V37.1429C41 37.9006 40.661 38.6273 40.0575 39.1632C39.454 39.699 38.6356 40 37.7821 40H32"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4264"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>

              <p>24/7 Support</p>
            </div>

            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="url(#paint0_linear_1_4246)"
                />
                <path
                  d="M32 42C38.0751 42 43 37.0751 43 31C43 24.9249 38.0751 20 32 20C25.9249 20 21 24.9249 21 31C21 37.0751 25.9249 42 32 42Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 25V31H39"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4246"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>
              <p>In Time Delivery</p>
            </div>
            <div>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.5"
                  cy="31.5"
                  r="31.5"
                  fill="url(#paint0_linear_1_4271)"
                />
                <path
                  d="M29.5 42C33.6421 42 37 37.0751 37 31C37 24.9249 33.6421 20 29.5 20C25.3579 20 22 24.9249 22 31C22 37.0751 25.3579 42 29.5 42Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 20H35.5385C39.1038 20 42 24.9271 42 31C42 37.0729 39.1038 42 35.5385 42H30"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 24L39 24"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37 31H42"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 39H40"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4271"
                    x1="-1.78608"
                    y1="13.65"
                    x2="77.4684"
                    y2="19.2782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>

              <p>Transparant Pricing</p>
            </div>
          </div>
        </article>
      </Card>
      </Container>
    </main>
  );
}

export default WhyChoose;
