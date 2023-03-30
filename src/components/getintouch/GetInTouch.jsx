import React from "react";
import classes from "./getintouch.module.scss";
import Card from "../../shared/layout/card/Card";
import Container from "../../shared/layout/container/Container";
import Label from "../../shared/label/Label";
import GetInTouchForm from "./GetInTouchForm";
import GetInTouchImages from "./GetInTouchImages";
import norto from "../../store/images/Norto.svg";
import stgreen from "../../store/images/sgreen.svg";
import point from "../../store/images/point.svg";
import oot from "../../store/images/oot.svg";
const GALLERY_IMAGES = [
  {
    id: "0",
    image:
      "https://plus.unsplash.com/premium_photo-1661873184237-a06debd40731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",
      logo: stgreen,
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80",
      logo: norto,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1678&q=80",
      logo: point,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      logo: oot,
  },
 
];
function GetInTouch() {
  return (
    <main className={classes.getintouch}>
      <Card>
        <Container>
          <article>
            <Label>Contact</Label>
            <h2>Get in touch with us</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>
            <div className={classes["brand-contact"]}>
              <div className="available-hours">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="31.6309"
                    cy="32"
                    r="31"
                    fill="#111C55"
                    stroke="#273270"
                  />
                  <path
                    d="M32.1309 42.5C38.206 42.5 43.1309 37.5751 43.1309 31.5C43.1309 25.4249 38.206 20.5 32.1309 20.5C26.0557 20.5 21.1309 25.4249 21.1309 31.5C21.1309 37.5751 26.0557 42.5 32.1309 42.5Z"
                    stroke="#F6B426"
                  />
                  <path
                    d="M32.1309 22.5V31.7058L37.1309 35.5"
                    stroke="#F6B426"
                  />
                </svg>

                <ul>
                  <li>Mon-sat 9.00 -18.00</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
              <div className="email">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="31.6309"
                    cy="32"
                    r="31"
                    fill="#111C55"
                    stroke="#273270"
                  />
                  <path
                    d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                    stroke="#F6B426"
                  />
                  <path
                    d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294"
                    stroke="#F6B426"
                  />
                </svg>

                <ul>
                  <li>Email</li>
                  <li>Contact@logistics.com</li>
                </ul>
              </div>

              <div className="call">
                <svg
                  width="64"
                  height="63"
                  viewBox="0 0 64 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="31.6309"
                    cy="31.5"
                    r="31"
                    fill="#111C55"
                    stroke="#273270"
                  />
                  <path
                    d="M24.1049 22.1408C23.9703 22.1449 23.8379 22.1743 23.7157 22.2272C23.5934 22.28 23.4837 22.3554 23.393 22.4487C23.3024 22.542 23.2326 22.6514 23.1879 22.7704C23.1432 22.8894 23.1245 23.0156 23.1328 23.1416C23.2673 25.3015 23.9013 30.5716 26.9368 33.8583C30.5718 37.8181 35.3057 39.1824 40.1626 38.9808C40.4229 38.9662 40.6676 38.8596 40.8474 38.6826C41.0271 38.5055 41.1284 38.2712 41.1309 38.0268V34.5674C41.1278 34.2446 41.0091 33.9322 40.7938 33.6802C40.5785 33.4282 40.2791 33.2513 39.9435 33.1779L37.5113 32.6739C37.2104 32.6138 36.8973 32.6397 36.6123 32.7481C36.3273 32.8566 36.0837 33.0427 35.9128 33.2823L35.3749 34.0454C35.3255 34.1153 35.2516 34.1668 35.1661 34.1911C35.0805 34.2154 34.9885 34.211 34.9061 34.1786C33.6688 33.6783 28.7389 31.5184 28.1971 27.8753C28.1865 27.805 28.1984 27.7333 28.2312 27.6692C28.264 27.6051 28.3163 27.5516 28.3816 27.5154L29.3576 26.9574C29.6253 26.802 29.8355 26.5732 29.9599 26.3022C30.0843 26.0311 30.1168 25.7308 30.053 25.4419L29.5189 23.1236C29.4409 22.7988 29.245 22.5093 28.9648 22.3045C28.6846 22.0998 28.3373 21.9923 27.982 22.0004L24.1049 22.1408Z"
                    stroke="#F6B426"
                  />
                </svg>

                <ul>
                  <li>call us</li>
                  <li>(00) 112 365 489</li>
                </ul>
              </div>
            </div>
          </article>
          <GetInTouchForm />
        </Container>
        <Container className={classes.images}>
          {GALLERY_IMAGES.map((img) => (
            <GetInTouchImages key={img.id} logo={img.logo} image={img.image} />
          ))}
        </Container>
      </Card>
    </main>
  );
}

export default GetInTouch;
