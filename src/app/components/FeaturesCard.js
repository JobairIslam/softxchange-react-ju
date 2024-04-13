import Image from "next/image";
export default function FeaturesCard({ title, subTitle }) {
  return (
    <div className="card-single">
      <div className="card-img-area">
        <Image
          width={358}
          height={178}
          src="/img/platform.svg"
          alt="platform"
        />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
