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
          <h1>Real-World Case Studies for Trading Enterprises</h1>
          <p>
            Real Success Stories Empowering Diverse Businesses to Thrive with
            SoftXchange
            <br />
            Technologies&#39; Advanced Exchange Platform and Matching Engine
          </p>
        </div>
      </div>
      <Featured />
      <div className="stories case-studies-stories">
        <div className="container">
          <div className="stories-wrapper stories-top">
            <div className="stories-img">
              <Image
                width={607}
                height={358}
                src="/img/stories1.svg"
                alt="stories"
              />
            </div>
            <div className="stories-content">
              <h3>
                Shaping the Financial Landscape: Unveiling the American
                Financial Exchange
              </h3>
              <p>
                This case study unveils a narrative of collaboration,
                innovation, and the power of a strategic partnership that has
                empowered American Financial Exchange to navigate challenges,
                drive efficiency, and achieve remarkable outcomes in the
                financial landscape.
              </p>
              <a href="case-studies_single.html" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.025L9.3752 5.35L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
                    fill="#0553F0"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <div className="stories-img">
              <Image
                width={607}
                height={358}
                src="/img/stories2.svg"
                alt="stories"
              />
            </div>
            <div className="stories-content">
              <h3>
                Navigating Success: Unveiling the Triumph of APAC Bourses
                On-Prem Exchange Platform
              </h3>
              <p>
                Discover how APAC Bourse leveraged cutting-edge innovations to
                navigate challenges, capitalize on opportunities, and drive
                unprecedented growth in the exchange landscape. The power of
                partnership, innovation, and the on achieving remarkable
                outcomes.
              </p>
              <a href="case-studies-single.html" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.025L9.3752 5.35L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
                    fill="#0553F0"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <div className="stories-img">
              <Image
                width={607}
                height={358}
                src="/img/stories3.svg"
                alt="stories"
              />
            </div>
            <div className="stories-content">
              <h3>
                MaterialsXchange: Transforming Commodity Trading with Advanced
                Exchange Solutions
              </h3>
              <p>
                This case study delves into real-world success, showcasing how
                MaterialsXchange, regardless of its size and unique needs, has
                harnessed the power of SoftXchanges cutting-edge exchange
                platform and matching engine.
              </p>
              <a href="case-studies-single.html" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.025L9.3752 5.35L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
                    fill="#0553F0"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <div className="stories-img">
              <Image
                width={607}
                height={358}
                src="/img/stories4.svg"
                alt="stories"
              />
            </div>
            <div className="stories-content">
              <h3>
                TeraExchange: Pioneering Swap Execution Facility with Advanced
                Exchange Platform
              </h3>
              <p>
                Discover how APAC Bourse leveraged cutting-edge innovations to
                navigate challenges, capitalize on opportunities, and drive
                unprecedented growth in the exchange landscape. The power of
                partnership, innovation, and the on achieving remarkable
                outcomes.
              </p>
              <a href="case-studies-single.html" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.025L9.3752 5.35L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
                    fill="#0553F0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FeatureContacts />
      <Footer />
    </div>
  );
}
