import React from "react";
import classes from "./transitflow.module.scss";
function TransitFlow() {
  return (
    <article className={classes.transit}>
      <p>
        Leverage agile frameworks to provide a robust synopsis for strategy
        collaborative thinking to further the overall value proposition.
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
            <path d="M32.1309 22.5V31.7058L37.1309 35.5" stroke="#F6B426" />
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
      </div>
    </article>
  );
}

export default TransitFlow;
