import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PlatfortFeature from "../components/PlatfortFeature";
import FeatureServices from "../components/FeatureServices";
import FeatureRevolution from "../components/FeatureRevolution";
import FeatureContacts from "../components/FeatureContacts";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
      <Header />
      {/* hero */}
      <div className="secondary-hero">
        <div className="container">
          <h1>
            Trade Matching Engine Redefined <br />
            with Advanced Features
          </h1>
          <p>
            We utilizes micro services and cutting-edge containerization tech
            for seamless setup, <br />
            efficient launch, and uninterrupted operation.
          </p>
        </div>
      </div>
      <Featured />
      <PlatfortFeature />
      <FeatureServices />
      <FeatureRevolution />
      <FeatureContacts />
      <Footer />
    </div>
  );
}
