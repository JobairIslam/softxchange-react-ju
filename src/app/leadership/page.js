import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import FeatureContacts from "../components/FeatureContacts";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div>
      <Header />
      <div className="secondary-hero">
        <div className="container">
          <h1>Executive Teams</h1>
          <p>
            Our accomplished leadership team is at the forefront of SoftXchange
            Technologies,
            <br />
            guiding us with their deep industry knowledge and expertise.
          </p>
        </div>
      </div>
      <div className="leadership">
        <div className="container">
          <div className="card-wrapper">
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Jacob Jones</h4>
                <p>Co-Founder and Chief Executive Officer</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership2.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Kristin Watson</h4>
                <p>Co-Founder and Chief Financial Officer</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership3.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Floyd Miles</h4>
                <p>Chief Operating Officer</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership4.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Jane Cooper</h4>
                <p>Head of Growth</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership5.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Ronald Richards</h4>
                <p>Director of Product Engineering</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership6.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Brooklyn Simmons</h4>
                <p>Product Owner</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership7.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Guy Hawkins</h4>
                <p>Director of Professional Services</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership8.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Bessie Cooper</h4>
                <p>Client Engagement Manager</p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img">
                <Image
                  width={382}
                  height={400}
                  src="/img/leadership9.jpg"
                  alt="leadership image"
                />
              </div>
              <div className="card-content">
                <h4>Leslie Alexander</h4>
                <p>Director of Information Security</p>
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
