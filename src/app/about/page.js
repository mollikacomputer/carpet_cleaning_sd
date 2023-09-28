import Image from "next/image";
import aboutUsImage from "@/assets/carpet-cleaning-about-us-image.jpg"
export const metadata = {
  title: "carpet wash||about",
  description: "About page for washing or cleaning services",
};
const AboutPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
        src={aboutUsImage}
        alt="about-us-image"
        width={600}
        placeholder="blur"
        className="max-w-[600px] h-auto mx-auto p-2 rounded-md"
        sizes="100vw"
      />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
