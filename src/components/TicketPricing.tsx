import { FaArrowRightLong } from "react-icons/fa6";

const day1Pass = [
  {
    id: 1,
    title: "One Day Conference Ticket",
  },
  {
    id: 2,
    title: "Coffee-break",
  },
  {
    id: 3,
    title: "Lunch and Networking",
  },
  {
    id: 4,
    title: "Keynote talk",
  },
  {
    id: 5,
    title: "Talk to the Editors Session",
  },
];

const fullPass = [
  {
    id: 1,
    title: "One Day Conference Ticket",
  },
  {
    id: 2,
    title: "Coffee-break",
  },
  {
    id: 3,
    title: "Lunch and Networking",
  },
  {
    id: 4,
    title: "Keynote talk",
  },
  {
    id: 5,
    title: "Talk to the Editors Session",
  },
  {
    id: 6,
    title: "Conference Dinner",
  },
  {
    id: 7,
    title: "Keynote talk",
  },
];

const groupPass = [
  {
    id: 1,
    title: "One Day Conference Ticket",
  },
  {
    id: 2,
    title: "Coffee-break",
  },
  {
    id: 3,
    title: "Lunch and Networking",
  },
  {
    id: 4,
    title: "Keynote talk",
  },
  {
    id: 5,
    title: "Talk to the Editors Session",
  },
];

const TicketPricing = () => {
  return (
    <article className="relative">
      <img
        src="/event1.jpg"
        alt="event image not found"
        className="w-full h-auto sm:h-[30rem] lg:h-[49rem] object-cover object-center absolute brightness-50"
      />

      <section className="relative inset-0 text-white space-y-8 sm:space-y-16 py-16 px-4 sm:px-8 md:px-16 lg:px-52">
        <aside className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            Ticket Pricing
          </h1>
          <h4 className="text-sm md:text-md lg:text-lg text-slate-200">
            Get Your Event Ticket Plan
          </h4>
        </aside>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-20">
          {[
            { pass: day1Pass, price: "$123", title: "1 DAY PASS" },
            { pass: fullPass, price: "$179", title: "FULL PASS" },
            { pass: groupPass, price: "$87", title: "GROUP PASS" },
          ].map(({ pass, price, title }) => (
            <div
              key={title}
              className="bg-white text-black space-y-4 p-6 sm:p-14 rounded-md relative shadow-md text-center"
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {title}
              </h1>
              <h2 className="bg-blue-500 text-white py-2 w-full text-lg md:text-xl lg:text-2xl font-bold tracking-wider rounded-md inline-block">
                {price}
              </h2>
              <div className="space-y-2">
                {pass.map((item) => (
                  <p
                    key={item.id}
                    className="text-sm md:text-base lg:text-lg font-normal text-gray-700"
                  >
                    {item.title}
                  </p>
                ))}
              </div>
              <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 text-base md:text-lg lg:text-xl font-semibold bg-white rounded-full shadow-md hover:bg-blue-500 text-blue-500 hover:text-white flex items-center">
                Get Ticket
                <FaArrowRightLong className="ml-2 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default TicketPricing;
