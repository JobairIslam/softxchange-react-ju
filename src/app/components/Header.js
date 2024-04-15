import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="index.html">
          <Image
            src="/img/logo.png"
            width={200}
            height={128}
            className="brand-logo"
            alt="logo"
          />
        </a>
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <a href="#" className="nav-link">
                solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </a>
              <div className="dropdown-content">
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/features">Features &Functionality</Link>
                  </li>
                  <li>
                    <Link href="/api">APIs & Integrations</Link>
                  </li>
                  <li>
                    <Link href="/market">Market Surveillance</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <a href="features.html">Features &Functionality</a>
                  </li>
                  <li>
                    <a href="api.html">APIs & Integrations</a>
                  </li>
                  <li>
                    <a href="market-surveillance.html">Market Surveillance</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <a href="#" className="nav-link2">
                services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </a>
              <div className="dropdown-content dropdown-content2">
                <ul className="dropdown-ul">
                  <li>
                    <a href="professional-services.html">
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a href="support-services.html">Support Services</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <a href="professional-services.html">
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a href="support-services.html">Support Services</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <a href="#" className="nav-link3">
                resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </a>
              <div className="dropdown-content dropdown-content3">
                <ul className="dropdown-ul">
                  <li>
                    <a href="news.html">News &amp; Insights</a>
                  </li>
                  <li>
                    <a href="case-studies.html">Case Studies</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <a href="news.html">News &amp; Insights</a>
                  </li>
                  <li>
                    <a href="case-studies.html">Case Studies</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <a href="#" className="nav-link4">
                company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </a>
              <div className="dropdown-content dropdown-content4">
                <ul className="dropdown-ul">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="leadership.html">Leadership</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="leadership.html">Leadership</a>
                  </li>
                  <li>
                    <a href="career.html">Careers</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <a href="contact.html" className="btn btn-primary">
            contact us
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="close-btn"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bar"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </header>
  );
}
