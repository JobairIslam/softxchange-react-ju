import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Image from "next/image";
import FeatureContacts from "../components/FeatureContacts";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
      <Header />
      <div className="secondary-hero">
        <div className="container">
          <h1>
            Stay Updated with Our Latest News <br />
            and Technology Advancements
          </h1>
          <p>
            Whether you&#39;re an investor, trader, or financial professional,
            our news provides valuable perspectives,
            <br />
            analysis, and updates to help you make informed decisions in
            today&#39;s dynamic markets.
          </p>
        </div>
      </div>
      <Featured />
      <div className="news-platform-features api-platform-features">
        <div className="container">
          <div className="card-wrapper">
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog4.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  SoftXchange Tech Joins Forces with the Environmental Markets
                  Association
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog5.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  BEE4 Chooses SoftXchange Technologies to Bridge Emerging Firms
                  with Visionary Investors
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog6.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  SoftXchange Tech Strengthens Industry Presence as Member of
                  Association of Futures Markets
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog7.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  TeraExchange Adopts EP3 Platform by SoftXchange Technologies
                  to Drive Swap Execution Facility
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog8.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  The Limitations of Off-the-Shelf Exchange Solutions and Why
                  They May Not Suffice
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog9.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  Unlocking Success: Tried-and-Tested Strategies for an
                  Expedited Exchange Launch
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog10.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  Crafting Superior Exchanges: The Crucial Role of Our Discovery
                  Process in Preparing for Success
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog11.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  SoftXchange&#39;s Jobs API: Revolutionizing Exchange Platform
                  Software Operations
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={382}
                  height={200}
                  src="/img/blog12.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  Exchange Ecosystem Unraveling the Intricacies Beneath
                  Seemingly Simple Transactions
                </h4>
                <a href="news-single.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.9751L7.69922 7.0251L9.37422 5.3501L15.9992 11.9751L9.37422 18.6001L7.69922 16.9251L12.6492 11.9751Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureContacts />
      <Footer />
    </div>
  );
}
