import axios from "axios";
import React, { useState } from "react";

const Card = () => {
  const [response, setResponse] = useState(null);

  const handleCheckout = async () => {
    let data = new FormData();
    data.append("cus_name", "demo");
    data.append("cus_email", "demo@gmail.com");
    data.append("amount", "10");
    data.append("success_url", "success.php");
    data.append("cancel_url", "cancel.php");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pay.uniquepaybd.com/request/payment/create",
      headers: {
        "app-key": "RMQH9SBrM35DE",
        "secret-key": "32062217",
        "host-name": "noksha.site",
        "Content-Type": "application/x-www-form-urlencoded	",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="group cursor-pointer rounded-md bg-light px-4 py-7 text-center dark:bg-dark-250">
      <div className="flex justify-end">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#fdbc68"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.546 6.545c0 .992-.568 1.851-1.395 2.272 1.304 3.493 2.67 5.21 3.871 5.344 1.35.152 2.586-.47 3.796-2.004a1.23 1.23 0 0 1 .512-.39A2.545 2.545 0 1 1 27 12.869c.002.112-.01.23-.04.353l-1.981 7.981A3.67 3.67 0 0 1 21.423 24H10.577a3.67 3.67 0 0 1-3.556-2.797l-1.98-7.981a1.329 1.329 0 0 1-.04-.353 2.545 2.545 0 1 1 1.67-1.102c.193.076.376.21.527.41 1.152 1.525 2.375 2.142 3.78 1.984 1.259-.14 2.618-1.852 3.872-5.344a2.545 2.545 0 1 1 3.696-2.272ZM7 27.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25Z"
            fill="#fdbc68"
          ></path>
        </svg>
      </div>
      <h2 className="mb-1 text-[1.6rem] font-medium text-dark transition-colors group-hover:text-brand dark:text-light">
        Premium
      </h2>
      <div className="font-medium text-dark-800 dark:text-dark-base mb-3">
        30 BDT
      </div>
      <button
        className="focus:ring-accent-700 hidden h-9 shrink-0 items-center justify-center rounded border border-transparent bg-brand px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-brand-dark focus:shadow focus:outline-none focus:ring-1 sm:inline-flex"
        onClick={handleCheckout}
      >
        Get Noksha Pro
      </button>
    </div>
  );
};

export default Card;
