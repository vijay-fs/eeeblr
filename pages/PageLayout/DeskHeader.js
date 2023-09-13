import React from "react";
import Link from "next/link";

import Image from "next/image";
import logo from "/public/images/logo.svg";
import { menu } from "../api/menu";

function DeskHead() {
  return (
    <>
      <div className="header bg-blue-200 sm:h-20">
        <Link to="/" className="flex">
          <Image
            className="w-16 md:w-32 lg:w-52"
            src={logo}
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <ul className="menu-items static">
          <li className="inline-block">
            <Link href={"/"} className="menu-item">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link href={"/"} className="menu-item">
              About
            </Link>
          </li>
          <li className="dropdown inline-block">
            <p>Products</p>
            <div className="dropdown-menu">
              <ul className="w-56">
                {menu.map((item, i) => (
                  <li className="h-12 text-center" key={item.cat}>
                    {/* <Link
                      to={item.url}
                      className="flex justify-left content-center mt-1"
                    > */}
                    {item.cat}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="inline-block">
            <Link href={"/"} target="_blank" className="menu-item">
              Catalog
            </Link>
          </li>
          <li className="dropdown inline-block">
            <Link href={"/"} className="menu-item expand-btn">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default DeskHead;
