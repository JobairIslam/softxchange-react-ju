import Image from "next/image";
export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <h5 className="featured-title">
          Preferred by over 50,000 top-tier enterprises
        </h5>
        <div className="group-brand">
          <Image width={175} height={30} src="/img/brand/1.svg" alt="brand" />
          <Image width={175} height={30} src="/img/brand/2.svg" alt="brand" />
          <Image width={175} height={30} src="/img/brand/3.svg" alt="brand" />
          <Image width={175} height={30} src="/img/brand/4.svg" alt="brand" />
          <Image width={175} height={30} src="/img/brand/5.svg" alt="brand" />
          <Image width={175} height={30} src="/img/brand/6.svg" alt="brand" />
        </div>
      </div>
    </section>
  );
}
