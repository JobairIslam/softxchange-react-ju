import React from "react";
import Image from "next/image";

export default function FeatureServices() {
  return (
    <div>
      <section className="services">
        <div className="container">
          <div className="heading-wrapper">
            <h2 className="heading-title">
              Elevate Your Strategy with Our Expert Complementary Services
            </h2>
            <p className="heading-subtitle">
              We envision empowering your aspirations, orchestrating a
              comprehensive transformation <br />
              that fuels your success in a dynamic market.
            </p>
          </div>
          <div className="services-wrapper">
            <div className="services-inner">
              <div className="services-img-area">
                <Image
                  width={590}
                  height={440}
                  src="/img/services3.svg"
                  alt="service"
                />
              </div>
              <div className="services-content">
                <h4 className="heading-title">
                  Excellence Through Professional Services
                </h4>
                <p className="heading-subtitle">
                  Unlock exceptional potential elevate your EP3 platform with
                  tailored enhancements. Our custom Software development
                  services drive operational and business excellence.
                </p>
                <a href="#" className="btn btn-secondary">
                  Learn more
                </a>
              </div>
            </div>
            <div className="services-inner">
              <div className="services-img-area">
                <Image
                  width={590}
                  height={440}
                  src="/img/services4.svg"
                  alt="service"
                />
              </div>
              <div className="services-content">
                <h4 className="heading-title">
                  Growth Through Dedicated Support Services
                </h4>
                <p className="heading-subtitle">
                  Our team of experts is dedicated to ensuring your
                  platform&#39;s seamless performance, offering soft resolutions
                  and innovative solutions to any challenges that may arise.
                </p>
                <a href="#" className="btn btn-secondary">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
