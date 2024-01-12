import CTA from "../cta";
import HeroCard from "./card";

const data = [
  {
    title: "Title Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    title: "Title Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    title: "Title Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

const Hero = () => {
  return (
    <div className="pt-[100px]">
      <div className="grid grid-cols-1 mx-auto max-w-5xl py-5 md:py-24 gap-10">
        <div className="mx-5 lg:mx-0">
          <h1 className="text-[50px] md:text-[80px] leading-[65px] md:leading-[90px] font-bold text-white uppercase">
            explore <br />
            indonesia
          </h1>
          <div className="flex items-center mt-4">
            <CTA size="lg" label="Start Traveling" href="/" />
          </div>
        </div>
        <div className="relative md:absolute bottom-0 max-w-5xl md:w-full mx-5 md:mx-0 bg-black/40 grid grid-cols-1 md:grid-cols-3">
          {data.map((item, index) => (
            <HeroCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
