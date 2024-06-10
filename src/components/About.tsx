import { TiTick } from "react-icons/ti";

const keyPoint = [
  { id: 1, title: "Write On Your Business Card" },
  { id: 2, title: "Advertising Outdoors" },
  { id: 3, title: "Effective Advertising Pointers" },
  { id: 4, title: "Kook 2 Directory Add Url Free" },
];

const About = () => {
  return (
    <article
      id="about"
      className="flex items-center gap-20 px-4 sm:px-56 py-6 sm:py-36"
    >
      <img
        src="/celebrate.jpg"
        alt="Celebration Image Not Found"
        className="w-[40rem] h-[40rem] object-cover object-center sm:block hidden"
      />
      <aside className="space-y-7">
        <h1 className="text-4xl text-zinc-800 font-semibold">
          About Conference
        </h1>
        <p className="text-lg tracking-wider line-clamp-6 text-zinc-500">
          When I first got into the online advertising business, I was looking
          for the magical combination that would put my website into the top
          search engine rankings, catapult me to the forefront of the minds or
          individuals looking to buy my product, and generally make me rich
          beyond my wildest dreams! After succeeding in the business for this
          long, I’m able to look back on my old self with this kind of thinking
          and shake my head.
        </p>

        {keyPoint.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 text-md tracking-wider text-zinc-500"
          >
            <TiTick className="text-red-500 w-5 h-5" />
            {item.title}
          </div>
        ))}
        <div>
          <h3 className="text-lg font-medium">Discover Now</h3>
          <div className="w-24 h-0.5 bg-red-500"></div>
        </div>
      </aside>
    </article>
  );
};

export default About;
