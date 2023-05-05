import React from 'react';
// import { BsInstagram } from "react-icons/Bs";
// import { BsFacebook } from "react-icons/Bs";

import "./Footer.scss";

function Footer() {
  return (
    <div className="px-12 py-8 bg-[#ffefd5]">
    <div className="flex flex-row justify-between">
        <p className="text-2xl font-medium leading-none">brouillard candles</p>
        <div className="flex justify-start w-[50%]">

        <div className="flex flex-col w-[50%]">
            <p className="mb-6 font-bold">quick links</p>
            <p className="mb-1.5">home</p>
            <p className="mb-1.5">shop</p>
            <p className="mb-1.5">contact</p>
        </div>
        <div className="flex flex-col w-[50%]">
            <p className="mb-6 font-bold">help</p>
            <p className="mb-1.5">search</p>
            <p className="mb-1.5">refund policy</p>
            <p className="mb-1.5">privacy policy</p>
            <p className="mb-1.5">terms of service</p>
        </div>
        </div>

    </div>
    <div className="flex flex-row justify-between mt-16 pt-8 border-t border-black">
        <div className="flex flex-row">
            {/* <BsInstagram  className="mr-4"/>
            <BsFacebook  className="mr-4"/> */}
        </div>
        <div className="flex flex-row text-sm">
            <p>Copyright © 2023, Kollab .</p>
        </div>
    </div>

    </div>
  )
}

export default Footer;