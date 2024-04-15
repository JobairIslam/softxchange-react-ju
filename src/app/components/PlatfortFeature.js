import FeaturesCard from "./FeaturesCard";

export default function PlatfortFeature() {
  return (
    <div>
      <div className="platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Unveiling a Spectrum of Possibilities through Our Platform
              Features
            </h2>
            <p>
              Crafted by traders, powered by capital markets experts. EP3&#39;s
              platform and matching engine <br />
              empower exchanges to launch softly and affordably.
            </p>
          </div>
          <div className="card-wrapper">
            <FeaturesCard
              title="High-Speed Trading Engine"
              subTitle=" Experience lightning-fast trades and executions, ensuring you&#39;re
                always ahead of market movements."
            />
            <FeaturesCard
              title="Intelligent Matching Algorithm"
              subTitle="Our sophisticated algorithm optimizes order matching, enhancing
                liquidity and minimizing slippage."
            />
            <FeaturesCard
              title="Scalability & Flexibility"
              subTitle=" Seamlessly scale your operations and adapt to changing market
                demands without compromising performance."
            />
            <FeaturesCard
              title="Robust Security Measures"
              subTitle="Your assets are protected with state-of-the-art security
                protocols, multi-factor authentication, and encryption."
            />
            <FeaturesCard
              title="Real-time Market Data"
              subTitle="Access accurate and up-to-the-second market data for informed
                decision-making and strategy development."
            />
            <FeaturesCard
              title="Continuous Innovation"
              subTitle=" Benefit from ongoing updates and enhancements as we continually
                evolve our platform to meet your trading needs."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
