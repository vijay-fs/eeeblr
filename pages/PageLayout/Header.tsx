import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/images/logo.svg";
import { menu } from "../api/menu";
import { useRouter } from "next/router";
import ReactDOM from "react-dom";
const Header = () => {
  const router = useRouter();

  console.log(router.pathname, "router.pathname");
  const [navActive, setNavActive] = useState(false);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);

  const toggleSubmenu = () => {
    /* const subMenuLevelEl = document.createElement("ul");
    subMenuLevelEl.id = "subMenuLevel";
    subMenuLevelEl.className = "sub__menus1";
    if (!document.getElementById("subMenuLevel")) {
      document.querySelector(".menu")?.appendChild(subMenuLevelEl);
    } */
    setMenuSubMenu(!isMenuSubMenu);
    setMenuSubMenu1(false);
  };

  const toggleSubmenu1 = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    const hideAllSubMenus = document.getElementsByClassName("subListMenu");
    console.dir(hideAllSubMenus);
    for (let index = 0; index < hideAllSubMenus.length; index++) {
      const element = hideAllSubMenus[index];
      element.classList.remove("d-block");
    }

    // Setting the required fields with filled values
    setMenuSubMenu1(!isMenuSubMenu1);

    const clickedMenuItem = document.getElementById(e.currentTarget.id);
    const subListForClickedItem = clickedMenuItem?.children[1];
    subListForClickedItem?.classList.add("d-block");
  };
  const closeMenu = () => {
    setNavActive(false);
    setMenuSubMenu1(false);

    setMenuSubMenu(false);
  };
  return (
    <header className="z-30 top-0 bg-white w-full h-16">
      <nav className="nav">
        <Link href={"/"}>
          <div className="logo">
            <Image className="" src={logo} alt="logo" width={40} height={40} />
          </div>
        </Link>
        {/* <SearchBar /> */}
        <div
          className={`menu__icon ${navActive ? "active" : "inactive"}`}
          onClick={() => {
            setNavActive(!navActive);
            setMenuSubMenu1(false);
            setMenuSubMenu(false);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`menu ${navActive ? "active" : ""}`}>
          <li className={"nav__item"} onClick={() => setNavActive(false)}>
            <Link href={"/"}>
              <a
                className={
                  router.pathname === "/" ? "bg-purple-700 p-2 text-white" : ""
                }
              >
                Home
              </a>
            </Link>
          </li>

          <li className={"nav__item , cursor-pointer"} onClick={toggleSubmenu}>
            <a>Products</a>
            <>
              {isMenuSubMenu ? (
                <>
                  {/* {Object.keys(data).map((item, i) => ( */}
                  <ul className="mt-2 subMenuItem">
                    <>
                      {menu.map((item, i) => (
                        <li
                          id={`subMenuItem` + i}
                          className="px-4 leading-8 hover:bg-gray-100 "
                          onClick={(e) => toggleSubmenu1(e)}
                          key={item.cat}
                        >
                          <a>{item.cat}</a>
                          <ul className="subListMenu leading-8 ">
                            {item.subcat.map((listItem, i) => (
                              <Link
                                className="px-4 leading-8 hover:bg-gray-100"
                                key={listItem[i] + Math.random()}
                                href={{
                                  pathname: "[subcat]",
                                  query: {
                                    subcat: listItem,
                                    category: item.cat,
                                  },
                                }}
                                passHref // this is important
                              >
                                <li
                                  className=" px-4 leading-8 hover:bg-gray-100"
                                  onClick={() => {
                                    closeMenu();
                                  }}
                                >
                                  <a
                                    className={
                                      router.pathname ===
                                      `/${item.subcat}&category=${item.cat}`
                                        ? "bg-purple-700 px-4 text-white leading-8"
                                        : "px-4 leading-8 hover:bg-gray-100"
                                    }
                                  >
                                    {listItem}
                                  </a>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </>
                  </ul>
                  {/* ))} */}
                </>
              ) : null}
            </>
          </li>

          <li className={"nav__item"} onClick={() => setNavActive(false)}>
            <Link href={"/about"}>
              <a
                className={
                  router.pathname === "/about"
                    ? "bg-purple-700 p-2 text-white"
                    : ""
                }
              >
                About
              </a>
            </Link>
          </li>

          <li className={"nav__item"} onClick={() => setNavActive(false)}>
            <Link href={"/contact"}>
              <a
                className={
                  router.pathname === "/contact"
                    ? "bg-purple-700 p-2 text-white"
                    : ""
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
