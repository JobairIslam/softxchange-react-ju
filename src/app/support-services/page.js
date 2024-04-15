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
          <h1>Accessible Support Services for Your Convenience</h1>
          <p>
            Reliable 24/7 Technical Support Our team of SoftXchange experts is
            just a call away, ensuring Soft <br />
            issue resolution with a deep understanding of your capital market
            needs.
          </p>
        </div>
      </div>
      <Featured />
      <div className="performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>SoftXchange Your Reliable Support System</h2>
            <p>
              Your 24/7 Lifeline for EP3 Support. Connect directly with our
              capital market experts
              <br />
              for soft issue resolution.
            </p>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width="608"
                  height="470"
                  src="/img/perform3.svg"
                  alt="perform"
                />
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>
                Customized Solutions for Diverse Asset
                <br />
                Classes and Regulatory Needs
              </h3>
              <p>
                Unlock the advantages of collaborating with seasoned capital
                market technology experts. They&#39;ll craft customized
                functionalities to enhance the standard we exchange platform and
                matching engine, ensuring tailored solutions for your unique
                needs.
              </p>
            </div>
          </div>
          <div className="performance-wrapper-bottom">
            <div className="performance-wrap performance-left">
              <h3>Harness the Potential of Personalization</h3>
              <p>
                Partner with Our Expert Team to Transform Your Vision into
                Reality. Our Collaborative Approach Allows for the Development
                of Tailored Features That Align with Your Unique Requirements,
                Enabling the Creation of the Optimal Exchange for Your Market.
                With Our Custom Solutions, You Gain a Competitive Edge, Ensuring
                Smooth Regulatory Compliance and Optimized Performance for Your
                Specific Asset Class.
              </p>
            </div>
            <div className="performance-wrap performance-right">
              <div className="performance-img-area">
                <Image
                  width="608"
                  height="470"
                  src="/img/perform4.svg"
                  alt="perform"
                />
              </div>
            </div>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width="608"
                  height="470"
                  src="/img/perform5.svg"
                  alt="perform"
                />
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>
                Guiding You to Unprecedented Success <br />
                with Expertise
              </h3>
              <p>
                Partner with Our Dedicated Capital Market Technology Experts for
                Your Success. Our Team&#39;s Knowledge and Experience Address
                the Intricacies of Capital Markets, Empowering You to Thrive in
                a Competitive Industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>The Path of the Customer</h2>
            <p>
              Discover the Key Elements of SoftXchange Technologies&#39; Process
              <br />
              and Their Role in Achieving Success.
            </p>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>1</span>
              </div>
              <h3>Qualification</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Assess fit for both sides
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Sign NDA
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Demo
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Gather high level requirements
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discuss Pricing
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>2</span>
              </div>
              <h3>Discovery</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                We Prepares details report covering all requirements
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Includes diagrams, recommendations, and gap analysis
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>3</span>
              </div>
              <h3>Implementation</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Training/Onboarding
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Testing Environment
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Custom Development
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Exchange operational handoff
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Pre-production support
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>4</span>
              </div>
              <h3>Production</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Dedicated account manager
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Customized support model
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Product updates
              </span>
            </div>
          </div>
        </div>
      </div>
      <FeatureContacts />
      <Footer />
    </div>
  );
}
