import React, { useEffect, useState } from "react";
import "../App.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

{
  /* ******************************************************************************************************* */
}
// filename:

// purpose:

// creation-date:

// modified-list:

// developed-by:

{
  /* ******************************************************************************************************* */
}

const Navigation = () => {
  const [currentDateTime, setCurrentDateTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div role="navigation">
        <div
          className="p-3 nav-head"
          style={{
            background:
              "linear-gradient(90deg, #ff9933 33%, #FFFFFF 33%, #FFFFFF 67%, #138808 67%)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 d-none d-md-block">
                <div>
                  {/* <i className="fas fa-cloud-moon-rain me-2 fs-3 text-info"></i>{" "} weather will implement later */}
                  <strong>Kolkata, West Bengal</strong>
                </div>
                <div className="mt-1 text-secondary">
                  <FontAwesomeIcon
                    icon={["fab", "facebook-square"]}
                    className="fs-5 me-2"
                  />
                  <FontAwesomeIcon
                    icon={["fab", "twitter-square"]}
                    className="fs-5 me-2"
                  />
                  <FontAwesomeIcon icon={faInstagram} className="fs-5 me-2" />{" "}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <div className="display-6">One Nation</div>
                <div className="text-secondary">
                  {currentDateTime.format("dddd, MMM D, YYYY h:mm:ss A")}
                </div>
              </div>
              <div className="col-lg-3 col-md-3 text-end d-none d-md-block">
                <input className="form-control" placeholder="Search" />
                <div className="mt-2">
                  <strong>Trending :</strong> Big story tonight
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom border-top" id="subNavContainer">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <button
                className="navbar-toggler mx-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars me-2"></i> Menu
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link mx-2 active"
                      aria-current="page"
                      href="/"
                    >
                      Breaking News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      India
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      World
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Sports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      State
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Tech
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Bollywood
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Movies/Series
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Results
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#" color="#FF0000">
                      Covid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link mx-2 dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      One Nation
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* ******************************************************************************************************* */}
        {/* Headline */}
        {/* ******************************************************************************************************* */}

        <div className="border-bottom d-flex">
          <div>
            <div className="py-2 px-5 bg-danger text-white">Headlines</div>
          </div>
          <div className="px-1" style={{ overflow: "hidden" }}>
            <div id="scrollContent" className="text-secondary">
              <div>
                Lorem Ipsum is simply dummy text. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
