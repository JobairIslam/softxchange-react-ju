import React from "react";
import Image from "next/image";

export default function Stories() {
  return (
    <div>
      <div className="stories">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Real-World Success Stories Unveiling the Impact of Our Solutions
            </h2>
            <p>
              Discover the tangible outcomes of our solutions through real-world
              success stories
              <br />
              that showcase our impact in action.
            </p>
          </div>
          <div className="stories-wrapper">
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
              <a href="/case-studies-single" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.02498L9.3752 5.34998L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
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
                Navigating Success: Unveiling the Triumph of APAC Bourse&#39;s
                On-Prem Exchange Platform
              </h3>
              <p>
                Discover how APAC Bourse leveraged cutting-edge innovations to
                navigate challenges, capitalize on opportunities, and drive
                unprecedented growth in the exchange landscape. The power of
                partnership, innovation, and the on achieving remarkable
                outcomes.
              </p>
              <a href="/case-studies-single" className="btn-tertiary">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6502 11.975L7.7002 7.02498L9.3752 5.34998L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
                    fill="#0553F0"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
