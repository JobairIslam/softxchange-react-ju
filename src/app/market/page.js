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
          <h1>Integrated Market Surveillance Tools</h1>
          <p>
            This comprehensive suite offers both real-time and T+1 capabilities,
            enabling exchange operators <br />
            to identify anomalous trading patterns and fulfill regulatory
            obligations.
          </p>
        </div>
      </div>
      <Featured />
      <div className="platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Instant Harnessing the Power of Real-Time Alerts</h2>
            <p>
              With this comprehensive alert system, operators can softly respond
              to emerging situations, <br />
              maintain market integrity, and satisfy regulatory requirements.
            </p>
          </div>
          <div className="card-wrapper">
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Insider Trading Surveillance</h4>
                <p>
                  Insider trading is often flagged by significant price swings
                  resulting in disproportionately large profits or avoiding
                  substantial losses.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Front Running Detection</h4>
                <p>
                  EP3 surveillance tools promptly alert operators to
                  non-customer orders preceding significant customer orders.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Unusual Order Size Monitoring</h4>
                <p>
                  Exchange operators are notified when orders significantly
                  exceed typical account size, available capital, instrument
                  position limits.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Unusual Order Frequency</h4>
                <p>
                  Operators are alerted when order submission or updates exceed
                  typical frequency for an account within a specific timeframe.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Wash Trade Monitoring</h4>
                <p>
                  EP3 triggers alerts for trades within the same account
                  involving two accounts sharing the same beneficial owner.
                </p>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={358}
                  height={176}
                  src="/img/platform.svg"
                  alt="platform"
                />
              </div>
              <div className="card-content">
                <h4>Administrator Actions Oversight</h4>
                <p>
                  Our surveillance tools softly alert operators to
                  administrator-initiated changes in account details, balances,
                  and collateral adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="market-revolution revolution">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Leveraging End-of-Day Alerts for Informed Decision-Making</h2>
            <p>
              Aiding market surveillance with insights on price movements, order
              book balance, and trading <br />
              anomalies, ensuring a secure and compliant trading environment.
            </p>
          </div>
          <div className="card-wrapper">
            <div className="card-single">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_2651)">
                  <path
                    d="M45 48H23C21.346 48 20 46.654 20 45C20 44.414 20.162 43.862 20.47 43.402L31.446 25.438C31.962 24.558 32.946 24 34 24C35.054 24 36.038 24.558 36.562 25.454L47.552 43.438C47.838 43.862 48 44.414 48 45C48 46.654 46.654 48 45 48ZM34 26C33.8321 25.9982 33.6667 26.0402 33.5201 26.1219C33.3735 26.2037 33.2507 26.3223 33.164 26.466L22.154 44.482C22.0501 44.6345 21.9963 44.8155 22 45C22 45.2652 22.1054 45.5196 22.2929 45.7071C22.4804 45.8946 22.7348 46 23 46H45C45.2652 46 45.5196 45.8946 45.7071 45.7071C45.8946 45.5196 46 45.2652 46 45C46.0053 44.83 45.96 44.6623 45.87 44.518L34.846 26.482C34.7598 26.3344 34.6362 26.2121 34.4877 26.1274C34.3392 26.0428 34.1709 25.9989 34 26Z"
                    fill="#010E28"
                  />
                  <path
                    d="M34 40C33.7348 40 33.4804 39.8946 33.2929 39.7071C33.1054 39.5196 33 39.2652 33 39V31C33 30.7348 33.1054 30.4804 33.2929 30.2929C33.4804 30.1054 33.7348 30 34 30C34.2652 30 34.5196 30.1054 34.7071 30.2929C34.8946 30.4804 35 30.7348 35 31V39C35 39.2652 34.8946 39.5196 34.7071 39.7071C34.5196 39.8946 34.2652 40 34 40Z"
                    fill="#010E28"
                  />
                  <path
                    d="M34 44C34.5523 44 35 43.5523 35 43C35 42.4477 34.5523 42 34 42C33.4477 42 33 42.4477 33 43C33 43.5523 33.4477 44 34 44Z"
                    fill="#010E28"
                  />
                  <path
                    d="M17 42H5C3.67441 41.9984 2.40356 41.4711 1.46622 40.5338C0.528882 39.5964 0.00158786 38.3256 0 37L0 5C0 2.244 2.242 0 5 0H27C29.758 0 32 2.244 32 5V19C32 19.2652 31.8946 19.5196 31.7071 19.7071C31.5196 19.8946 31.2652 20 31 20C30.7348 20 30.4804 19.8946 30.2929 19.7071C30.1054 19.5196 30 19.2652 30 19V5C30 3.346 28.654 2 27 2H5C3.346 2 2 3.346 2 5V37C2 38.654 3.346 40 5 40H17C17.2652 40 17.5196 40.1054 17.7071 40.2929C17.8946 40.4804 18 40.7348 18 41C18 41.2652 17.8946 41.5196 17.7071 41.7071C17.5196 41.8946 17.2652 42 17 42Z"
                    fill="#010E28"
                  />
                  <path
                    d="M6.99979 26C6.80216 26 6.60897 25.9414 6.44462 25.8316C6.28027 25.7219 6.15213 25.5659 6.07638 25.3833C6.00063 25.2008 5.98066 24.9999 6.019 24.806C6.05734 24.6122 6.15226 24.434 6.29179 24.294L11.2918 19.294C11.4401 19.1456 11.6313 19.0475 11.8384 19.0138C12.0456 18.98 12.258 19.0123 12.4458 19.106L15.8018 20.784L22.2918 14.294C22.4804 14.1119 22.733 14.0111 22.9952 14.0133C23.2574 14.0156 23.5082 14.1208 23.6936 14.3062C23.879 14.4916 23.9842 14.7424 23.9865 15.0046C23.9887 15.2668 23.8879 15.5194 23.7058 15.708L16.7058 22.708C16.5575 22.8565 16.3662 22.9545 16.1591 22.9882C15.952 23.022 15.7395 22.9897 15.5518 22.896L12.1958 21.218L7.70579 25.708C7.61312 25.8008 7.50305 25.8743 7.3819 25.9244C7.26075 25.9745 7.13089 26.0002 6.99979 26Z"
                    fill="#010E28"
                  />
                  <path
                    d="M23 22C22.7348 22 22.4804 21.8946 22.2929 21.7071C22.1054 21.5196 22 21.2652 22 21V16H17C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15C16 14.7348 16.1054 14.4804 16.2929 14.2929C16.4804 14.1054 16.7348 14 17 14H23C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22Z"
                    fill="#010E28"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_2651">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4>Manipulative Trading Detection</h4>
              <p>
                SoftXchange&#39;s market surveillance tools scrutinize daily
                trading, detecting unusual spikes in trade volume or price
                volatility and pinpointing the responsible account(s).
              </p>
            </div>
            <div className="card-single">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_2663)">
                  <path
                    d="M35 48C27.832 48 22 42.168 22 35C22 27.832 27.832 22 35 22C42.168 22 48 27.832 48 35C48 42.168 42.168 48 35 48ZM35 24C28.934 24 24 28.934 24 35C24 41.066 28.934 46 35 46C41.066 46 46 41.066 46 35C46 28.934 41.066 24 35 24Z"
                    fill="#010E28"
                  />
                  <path
                    d="M40 41C39.7734 40.9998 39.5534 40.923 39.376 40.782L34.376 36.782C34.2588 36.6881 34.1642 36.5691 34.0992 36.4337C34.0341 36.2984 34.0002 36.1502 34 36V29C34 28.7348 34.1054 28.4804 34.2929 28.2929C34.4804 28.1054 34.7348 28 35 28C35.2652 28 35.5196 28.1054 35.7071 28.2929C35.8946 28.4804 36 28.7348 36 29V35.52L40.626 39.22C40.7864 39.3502 40.9026 39.5267 40.9588 39.7255C41.015 39.9243 41.0084 40.1356 40.9398 40.3304C40.8713 40.5253 40.7442 40.6942 40.576 40.8141C40.4077 40.9339 40.2066 40.9989 40 41ZM17 42H5C3.67441 41.9984 2.40356 41.4711 1.46622 40.5338C0.528882 39.5964 0.00158786 38.3256 0 37L0 5C0 2.244 2.244 0 5 0H27C29.756 0 32 2.244 32 5V17C32 17.2652 31.8946 17.5196 31.7071 17.7071C31.5196 17.8946 31.2652 18 31 18C30.7348 18 30.4804 17.8946 30.2929 17.7071C30.1054 17.5196 30 17.2652 30 17V5C30 3.346 28.654 2 27 2H5C3.346 2 2 3.346 2 5V37C2 38.654 3.346 40 5 40H17C17.2652 40 17.5196 40.1054 17.7071 40.2929C17.8946 40.4804 18 40.7348 18 41C18 41.2652 17.8946 41.5196 17.7071 41.7071C17.5196 41.8946 17.2652 42 17 42Z"
                    fill="#010E28"
                  />
                  <path
                    d="M6.99979 26C6.80216 26 6.60897 25.9414 6.44462 25.8316C6.28027 25.7219 6.15213 25.5659 6.07638 25.3833C6.00063 25.2008 5.98066 24.9999 6.019 24.806C6.05734 24.6122 6.15226 24.434 6.29179 24.294L11.2918 19.294C11.4399 19.1453 11.6312 19.0471 11.8384 19.0133C12.0456 18.9796 12.2581 19.012 12.4458 19.106L15.8018 20.784L22.2918 14.294C22.4804 14.1119 22.733 14.0111 22.9952 14.0133C23.2574 14.0156 23.5082 14.1208 23.6936 14.3062C23.879 14.4916 23.9842 14.7424 23.9865 15.0046C23.9887 15.2668 23.8879 15.5194 23.7058 15.708L16.7058 22.708C16.5575 22.8565 16.3662 22.9545 16.1591 22.9882C15.952 23.022 15.7395 22.9897 15.5518 22.896L12.1958 21.218L7.70579 25.708C7.61312 25.8008 7.50305 25.8743 7.3819 25.9244C7.26075 25.9745 7.13089 26.0002 6.99979 26Z"
                    fill="#010E28"
                  />
                  <path
                    d="M23 22C22.7348 22 22.4804 21.8946 22.2929 21.7071C22.1054 21.5196 22 21.2652 22 21V16H17C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15C16 14.7348 16.1054 14.4804 16.2929 14.2929C16.4804 14.1054 16.7348 14 17 14H23C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22Z"
                    fill="#010E28"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_2663">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4>Cross Trading Oversight</h4>
              <p>
                This daily alert mechanism aligns with SoftXchange&#39;s
                commitment to fostering secure and compliant trading ecosystems
                while bolstering the effectiveness of exchange operations.
              </p>
            </div>
            <div className="card-single">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_2672)">
                  <path
                    d="M36 40C33.242 40 31 37.756 31 35C31 32.244 33.242 30 36 30C38.758 30 41 32.244 41 35C41 37.756 38.758 40 36 40ZM36 32C34.346 32 33 33.346 33 35C33 36.654 34.346 38 36 38C37.654 38 39 36.654 39 35C39 33.346 37.654 32 36 32Z"
                    fill="#010E28"
                  />
                  <path
                    d="M37.5479 48H34.4499C33.9563 47.9988 33.481 47.8127 33.1178 47.4784C32.7547 47.1441 32.5299 46.6858 32.4879 46.194L32.2419 43.648C31.6552 43.3786 31.0993 43.0467 30.5839 42.658L28.3419 43.7C27.8932 43.9098 27.3814 43.9407 26.9106 43.7865C26.4399 43.6323 26.0456 43.3046 25.8079 42.87L24.2579 40.108C24.0179 39.6808 23.9414 39.1809 24.0426 38.7015C24.1438 38.2221 24.4157 37.7958 24.8079 37.502L26.8079 36.022C26.7699 35.71 26.7419 35.362 26.7419 34.998C26.7419 34.634 26.7719 34.286 26.8079 33.974L24.8079 32.494C24.4157 32.2002 24.1439 31.7737 24.043 31.2942C23.9422 30.8147 24.0193 30.3149 24.2599 29.888L25.8059 27.126C26.0436 26.6914 26.4379 26.3637 26.9086 26.2095C27.3794 26.0553 27.8912 26.0862 28.3399 26.296L30.5839 27.338C31.1059 26.946 31.6599 26.614 32.2419 26.348L32.4879 23.8C32.5879 22.776 33.4319 22 34.4519 22H37.5499C38.5699 22 39.4139 22.776 39.5119 23.806L39.7579 26.352C40.3399 26.62 40.8939 26.95 41.4159 27.342L43.6579 26.3C44.1066 26.0897 44.6185 26.0586 45.0894 26.2128C45.5603 26.367 45.9546 26.6951 46.1919 27.13L47.7419 29.892C47.9819 30.3192 48.0584 30.8191 47.9572 31.2985C47.856 31.7779 47.584 32.2042 47.1919 32.498L45.1919 33.978C45.2299 34.29 45.2579 34.638 45.2579 35.002C45.2579 35.366 45.2279 35.714 45.1919 36.026L47.1919 37.506C48.0019 38.108 48.2379 39.226 47.7399 40.112L46.1939 42.874C45.9559 43.3082 45.5615 43.6357 45.0909 43.7898C44.6203 43.9439 44.1087 43.9133 43.6599 43.704L41.4159 42.662C40.9005 43.0507 40.3446 43.3826 39.7579 43.652L39.5119 46.2C39.468 46.6909 39.2422 47.1477 38.8788 47.4807C38.5155 47.8138 38.0408 47.999 37.5479 48ZM30.7259 40.49C30.9661 40.4901 31.1983 40.5768 31.3799 40.734C32.0319 41.298 32.7559 41.732 33.5299 42.022C33.8879 42.156 34.1379 42.482 34.1739 42.862L34.4779 46.004L37.5479 46L37.8239 42.86C37.8424 42.6739 37.9124 42.4967 38.0262 42.3482C38.14 42.1998 38.293 42.0861 38.4679 42.02C39.2554 41.7218 39.9834 41.2856 40.6179 40.732C40.7636 40.6057 40.9427 40.5244 41.1337 40.4978C41.3246 40.4711 41.5192 40.5004 41.6939 40.582L44.4999 41.886L45.9939 39.13L43.5159 37.274C43.3674 37.1639 43.2523 37.0147 43.1835 36.8431C43.1146 36.6716 43.0947 36.4842 43.1259 36.302C43.1999 35.878 43.2559 35.448 43.2559 35.002C43.2559 34.556 43.1999 34.126 43.1259 33.702C43.0952 33.5198 43.1153 33.3326 43.1841 33.1611C43.2529 32.9896 43.3677 32.8404 43.5159 32.73L45.9999 30.89L44.4479 28.108L41.6959 29.418C41.521 29.4991 41.3264 29.5279 41.1354 29.5009C40.9445 29.4739 40.7655 29.3924 40.6199 29.266C39.9852 28.7126 39.2572 28.2765 38.4699 27.978C38.2946 27.9125 38.1412 27.7989 38.0274 27.6504C37.9135 27.5019 37.8437 27.3243 37.8259 27.138L37.5219 23.996L34.4519 24L34.1759 27.14C34.1574 27.3261 34.0874 27.5033 33.9736 27.6518C33.8598 27.8002 33.7068 27.9139 33.5319 27.98C32.7444 28.2782 32.0164 28.7144 31.3819 29.268C31.2357 29.3934 31.0566 29.4741 30.8659 29.5007C30.6752 29.5273 30.4808 29.4986 30.3059 29.418L27.4999 28.114L26.0059 30.87L28.4839 32.726C28.6324 32.8361 28.7475 32.9853 28.8163 33.1569C28.8852 33.3284 28.9051 33.5158 28.8739 33.698C28.7999 34.122 28.7439 34.552 28.7439 34.998C28.7439 35.444 28.7999 35.874 28.8739 36.298C28.9046 36.4802 28.8845 36.6674 28.8157 36.8389C28.7469 37.0104 28.6321 37.1596 28.4839 37.27L25.9999 39.11L27.5519 41.892L30.3039 40.582C30.4363 40.5214 30.5803 40.4901 30.7259 40.49Z"
                    fill="#010E28"
                  />
                  <path
                    d="M19 42H5C3.67441 41.9984 2.40356 41.4711 1.46622 40.5338C0.528882 39.5964 0.00158786 38.3256 0 37L0 5C0 2.244 2.242 0 5 0H27C29.758 0 32 2.244 32 5V17C32 17.2652 31.8946 17.5196 31.7071 17.7071C31.5196 17.8946 31.2652 18 31 18C30.7348 18 30.4804 17.8946 30.2929 17.7071C30.1054 17.5196 30 17.2652 30 17V5C30 3.346 28.654 2 27 2H5C3.346 2 2 3.346 2 5V37C2 38.654 3.346 40 5 40H19C19.2652 40 19.5196 40.1054 19.7071 40.2929C19.8946 40.4804 20 40.7348 20 41C20 41.2652 19.8946 41.5196 19.7071 41.7071C19.5196 41.8946 19.2652 42 19 42Z"
                    fill="#010E28"
                  />
                  <path
                    d="M6.99979 26C6.80216 26 6.60897 25.9414 6.44462 25.8316C6.28027 25.7219 6.15213 25.5659 6.07638 25.3833C6.00063 25.2008 5.98066 24.9999 6.019 24.806C6.05734 24.6122 6.15226 24.434 6.29179 24.294L11.2918 19.294C11.4401 19.1456 11.6313 19.0475 11.8384 19.0138C12.0456 18.98 12.258 19.0123 12.4458 19.106L15.8018 20.784L22.2918 14.294C22.4804 14.1119 22.733 14.0111 22.9952 14.0133C23.2574 14.0156 23.5082 14.1208 23.6936 14.3062C23.879 14.4916 23.9842 14.7424 23.9865 15.0046C23.9887 15.2668 23.8879 15.5194 23.7058 15.708L16.7058 22.708C16.5576 22.8567 16.3664 22.955 16.1592 22.9887C15.952 23.0225 15.7395 22.99 15.5518 22.896L12.1958 21.218L7.70579 25.708C7.61312 25.8008 7.50305 25.8743 7.3819 25.9244C7.26075 25.9745 7.13089 26.0002 6.99979 26Z"
                    fill="#010E28"
                  />
                  <path
                    d="M23 22C22.7348 22 22.4804 21.8946 22.2929 21.7071C22.1054 21.5196 22 21.2652 22 21V16H17C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15C16 14.7348 16.1054 14.4804 16.2929 14.2929C16.4804 14.1054 16.7348 14 17 14H23C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22Z"
                    fill="#010E28"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_2672">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4>Spoofing Detection</h4>
              <p>
                By continuously monitoring trading patterns and promptly
                detecting any suspicious activities, We empowers exchange
                operators to maintain market integrity and uphold regulatory
                standards.
              </p>
            </div>
            <div className="card-single">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_2682)">
                  <path
                    d="M36 48C35.8665 48.0003 35.7345 47.973 35.612 47.92C35.136 47.722 24 42.908 24 33.072V24.714C24 24.286 24.274 23.904 24.68 23.766L35.68 20.052C35.8876 19.9819 36.1124 19.9819 36.32 20.052L47.32 23.766C47.5183 23.8329 47.6906 23.9605 47.8126 24.1305C47.9346 24.3006 48.0001 24.5047 48 24.714V33.072C48 42.908 36.864 47.722 36.388 47.922C36.2651 47.9735 36.1332 48 36 48ZM26 25.432V33.072C26 40.642 34.11 44.988 36 45.9C37.888 44.986 46 40.624 46 33.072V25.432L36 22.056L26 25.432Z"
                    fill="#010E28"
                  />
                  <path
                    d="M36 48C35.7348 48 35.4804 47.8946 35.2929 47.7071C35.1054 47.5196 35 47.2652 35 47V21C35 20.7348 35.1054 20.4804 35.2929 20.2929C35.4804 20.1054 35.7348 20 36 20C36.2652 20 36.5196 20.1054 36.7071 20.2929C36.8946 20.4804 37 20.7348 37 21V47C37 47.2652 36.8946 47.5196 36.7071 47.7071C36.5196 47.8946 36.2652 48 36 48Z"
                    fill="#010E28"
                  />
                  <path
                    d="M47 34.072H25C24.7348 34.072 24.4804 33.9667 24.2929 33.7791C24.1054 33.5916 24 33.3372 24 33.072C24 32.8068 24.1054 32.5525 24.2929 32.3649C24.4804 32.1774 24.7348 32.072 25 32.072H47C47.2652 32.072 47.5196 32.1774 47.7071 32.3649C47.8946 32.5525 48 32.8068 48 33.072C48 33.3372 47.8946 33.5916 47.7071 33.7791C47.5196 33.9667 47.2652 34.072 47 34.072Z"
                    fill="#010E28"
                  />
                  <path
                    d="M21 42H5C3.67441 41.9984 2.40356 41.4711 1.46622 40.5338C0.528882 39.5964 0.00158786 38.3256 0 37L0 5C0 2.244 2.244 0 5 0H27C29.756 0 32 2.244 32 5V15C32 15.2652 31.8946 15.5196 31.7071 15.7071C31.5196 15.8946 31.2652 16 31 16C30.7348 16 30.4804 15.8946 30.2929 15.7071C30.1054 15.5196 30 15.2652 30 15V5C30 3.346 28.654 2 27 2H5C3.346 2 2 3.346 2 5V37C2 38.654 3.346 40 5 40H21C21.2652 40 21.5196 40.1054 21.7071 40.2929C21.8946 40.4804 22 40.7348 22 41C22 41.2652 21.8946 41.5196 21.7071 41.7071C21.5196 41.8946 21.2652 42 21 42Z"
                    fill="#010E28"
                  />
                  <path
                    d="M6.99979 26C6.80216 26 6.60897 25.9414 6.44462 25.8316C6.28027 25.7219 6.15213 25.5659 6.07638 25.3833C6.00063 25.2008 5.98066 24.9999 6.019 24.806C6.05734 24.6122 6.15226 24.434 6.29179 24.294L11.2918 19.294C11.4396 19.1441 11.6313 19.045 11.8391 19.0112C12.0469 18.9774 12.2601 19.0106 12.4478 19.106L15.8038 20.784L22.2938 14.294C22.4824 14.1119 22.735 14.0111 22.9972 14.0133C23.2594 14.0156 23.5102 14.1208 23.6956 14.3062C23.881 14.4916 23.9862 14.7424 23.9885 15.0046C23.9907 15.2668 23.8899 15.5194 23.7078 15.708L16.7078 22.708C16.5595 22.8565 16.3682 22.9545 16.1611 22.9882C15.954 23.022 15.7415 22.9897 15.5538 22.896L12.1978 21.218L7.70779 25.708C7.51964 25.8951 7.2651 26.0001 6.99979 26Z"
                    fill="#010E28"
                  />
                  <path
                    d="M23 22C22.7348 22 22.4804 21.8946 22.2929 21.7071C22.1054 21.5196 22 21.2652 22 21V16H17C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15C16 14.7348 16.1054 14.4804 16.2929 14.2929C16.4804 14.1054 16.7348 14 17 14H23C23.2652 14 23.5196 14.1054 23.7071 14.2929C23.8946 14.4804 24 14.7348 24 15V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22Z"
                    fill="#010E28"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_2682">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4>Beneficial Ownership Data Gap Detection</h4>
              <p>
                This proactive approach ensures that missing information is
                promptly identified and rectified, maintaining compliance and
                transparency within the trading environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="market-platform-features api-platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Stay Updated with Our Latest News and Technology Advancements
            </h2>
            <p>
              Whether you&#39;re an investor, trader, or financial professional,
              our news provides valuable <br />
              perspectives, analysis, and updates to help you make informed
              decisions in dynamic markets.
            </p>
          </div>
          <div className="card-wrapper">
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={342}
                  height={200}
                  src="/img/blog1.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  SoftXchange Tech Joins Forces with the Environmental Markets
                  Association
                </h4>
                <a href="news.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.975L7.69922 7.02498L9.37422 5.34998L15.9992 11.975L9.37422 18.6L7.69922 16.925L12.6492 11.975Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={342}
                  height={200}
                  src="/img/blog2.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  BEE4 Chooses SoftXchange Technologies&#39; to Bridge Emerging
                  Firms with Visionary Investors
                </h4>
                <a href="news.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.975L7.69922 7.02498L9.37422 5.34998L15.9992 11.975L9.37422 18.6L7.69922 16.925L12.6492 11.975Z"
                      fill="#0553F0"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-single">
              <div className="card-img-area">
                <Image
                  width={342}
                  height={200}
                  src="/img/blog3.svg"
                  alt="blog"
                />
              </div>
              <div className="card-content">
                <h4>
                  SoftXchange Tech Strengthens Industry Presence as Member of
                  Association of Futures Markets
                </h4>
                <a href="news.html" className="btn-tertiary">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6492 11.975L7.69922 7.02498L9.37422 5.34998L15.9992 11.975L9.37422 18.6L7.69922 16.925L12.6492 11.975Z"
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
