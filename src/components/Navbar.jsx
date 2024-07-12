import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Nav screen xl */}
      <div className="navbar bg-white fixed z-50 text-gray-700 py-0 sm:px-4 sm:flex hidden">
        <div className="flex-1">
          <img
            src="pdm-logo.png"
            alt=""
            className="sm:h-28 sm:w-32 h-20 w-20"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <details>
                <summary>Se connecter</summary>
                <ul className="bg-white z-50 rounded-t-none p-4">
                  <li className="sm:my-2 my-1 cursor-pointer hover:bg-base-200 rounded-md p-1 text-center">
                    Mon compte
                  </li>
                  <li className="sm:my-2 my-1 cursor-pointer hover:bg-base-200 rounded-md p-1 text-center">
                    Mes commandes
                  </li>
                  <li className="sm:my-2 my-1 cursor-pointer hover:bg-base-200 rounded-md p-1 text-center">
                    Se deconnecter
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/library">Bibliotheque</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Nav screen xl */}
      <div className="navbar bg-white fixed z-50 text-gray-700 flex sm:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-semibold menu-sm dropdown-content z-50 bg-white rounded-box  mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Acceuil</Link>
              </li>
              <li>
                <a>Mon compte</a>
              </li>
              <li>
                <Link to="/library">Bibliotheque</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img src="pdm-logo.png" alt="" className="h-24 w-28" />
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
