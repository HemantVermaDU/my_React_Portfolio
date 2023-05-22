import React from "react";
import "./test.scss"

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="50">
      <title>Hemant Verma</title>
      <g>
        <g id="H" transform="translate(35.000000, 35.000000)"> 
          <path
            fill="currentColor"
            d="M 23.128906 25.402344 L 19.601562 25.402344 C 19.324219 25.402344 19.097656 25.175781 19.097656 24.890625 L 19.097656 15.6875 L 10.03125 15.6875 L 10.03125 24.890625 C 10.03125 25.175781 9.804688 25.402344 9.527344 25.402344 L 6 25.402344 C 5.722656 25.402344 5.496094 25.175781 5.496094 24.890625 L 5.496094 3.414062 C 5.496094 3.132812 5.722656 2.902344 6 2.902344 L 9.527344 2.902344 C 9.804688 2.902344 10.03125 3.132812 10.03125 3.414062 L 10.03125 11.597656 L 19.097656 11.597656 L 19.097656 3.414062 C 19.097656 3.132812 19.324219 2.902344 19.601562 2.902344 L 23.128906 2.902344 C 23.40625 2.902344 23.632812 3.132812 23.632812 3.414062 L 23.632812 24.890625 C 23.632812 25.175781 23.40625 25.402344 23.128906 25.402344 Z M 23.128906 25.402344 "
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;