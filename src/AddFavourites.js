import React from "react";

export function Addfavourites() {
  const Addfavourite = () => {
    return (
      <>
        <span className="mr-2">Add to Fav </span>
        <svg
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </>
    );
  };
}
export default Addfavourites;
