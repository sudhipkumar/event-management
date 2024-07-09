import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdManageAccounts, MdMoreTime } from "react-icons/md";

const schedules: {
  [key: string]: {
    time: string;
    location: string;
    name: string;
    role: string;
    instagram: string;
    photo: string;
    title: string;
  }[];
} = {
  day1: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "John Doe",
      role: "Speaker",
      instagram: "@johndoe",
      photo: "/man1.jpg",
      title: "Dealing with Difficult People",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Jane Smith",
      role: "Panelist",
      instagram: "@janesmith",
      photo: "/man2.jpg",
      title: "V7 Digital Photo Printing",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Sam Wilson",
      role: "Moderator",
      instagram: "@samwilson",
      photo: "/man3.jpg",
      title: "Beyond The Naked Eye",
    },
  ],
  day2: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "Alice Brown",
      role: "Speaker",
      instagram: "@alicebrown",
      photo: "/man1.jpg",
      title: "Dealing with Easy People",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Bob Johnson",
      role: "Panelist",
      instagram: "@bobjohnson",
      photo: "/man2.jpg",
      title: "Beyond The Naked Eye",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Charlie Davis",
      role: "Moderator",
      instagram: "@charliedavis",
      photo: "/man3.jpg",
      title: "Beyond The Naked Eye",
    },
  ],
  day3: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "David Green",
      role: "Speaker",
      instagram: "@davidgreen",
      photo: "/man3.jpg",
      title: "dolor sit amet consectetur adipisicing elit.",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Eva White",
      role: "Panelist",
      instagram: "@evawhite",
      photo: "/man2.jpg",
      title: "dolor sit amet consectetur adipisicing elit.",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Frank Black",
      role: "Moderator",
      instagram: "@frankblack",
      photo: "/man1.jpg",
      title: "Lorem ipsum dolor sit amet.",
    },
  ],
  day4: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "Grace Lee",
      role: "Speaker",
      instagram: "@gracelee",
      photo: "/man3.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Henry King",
      role: "Panelist",
      instagram: "@henryking",
      photo: "/man2.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Isla Scott",
      role: "Moderator",
      instagram: "@islascott",
      photo: "/man1.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
  ],

  day5: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "Grace Lee",
      role: "Speaker",
      instagram: "@gracelee",
      photo: "/man3.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Henry King",
      role: "Panelist",
      instagram: "@henryking",
      photo: "/man1.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Isla Scott",
      role: "Moderator",
      instagram: "@islascott",
      photo: "/man2.jpg",
      title: "Lorem ipsum dolor sit adipisicing elit. Ex!",
    },
  ],

  day6: [
    {
      time: "9:00 AM - 10:00 AM",
      location: "Room A",
      name: "Grace Lee",
      role: "Speaker",
      instagram: "@gracelee",
      photo: "/man3.jpg",
      title: "Lorem ipsum dolor sit amet consectetur ad",
    },
    {
      time: "10:30 AM - 11:30 AM",
      location: "Room B",
      name: "Henry King",
      role: "Panelist",
      instagram: "@henryking",
      photo: "/man2.jpg",
      title: "Lorem ipsum dolor sit amet consectetur ad",
    },
    {
      time: "1:00 PM - 2:00 PM",
      location: "Room C",
      name: "Isla Scott",
      role: "Moderator",
      instagram: "@islascott",
      photo: "/man1.jpg",
      title: "Lorem ipsum dolor sit amet consectetur ad",
    },
  ],
};

const ScheduleCard = () => {
  // const value = useFetch("/api/contact");
  // console.log("value---->", value);
  const [selectedDay, setSelectedDay] = useState("day1");

  return (
    <div className="main-container bg-white overflow-hidden">
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 space-y-12">
        <div className="space-y-3 text-center">
          <h1 className="tracking-wide text-black/80 font-bold text-3xl md:text-4xl">
            Our Schedule
          </h1>
          <p className="tracking-wider font-medium text-black/60 text-md">
            Do not miss anything topic about the event
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-sm">
            {Object.keys(schedules).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 md:px-10 md:py-4 lg:px-16 lg:py-6 font-bold transition-colors duration-200 ease-in-out text-lg md:text-xl lg:text-2xl ${
                  selectedDay === day
                    ? "text-white bg-gradient-to-r from-blue-400 to-blue-600"
                    : "text-black/60 bg-white"
                } rounded-sm shadow-md bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white`}
              >
                {day.toUpperCase()}
              </button>
            ))}
          </div>
          <ul>
            {schedules[selectedDay].map((session, index) => (
              <li
                key={index}
                className="mt-10 px-4 sm:px-8 md:px-16 lg:px-28 py-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <img
                    className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover"
                    src={session.photo}
                    alt={session.name}
                  />
                  <div className="space-y-2 text-center md:text-left mt-4 md:mt-0 md:ml-6">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                      {session.title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                      <div className="text-lg text-gray-700 font-semibold flex items-center gap-1">
                        <MdManageAccounts className="w-5 h-5 text-red-500" />
                        {session.name}
                      </div>

                      <span>/</span>

                      <a
                        href={`https://instagram.com/${session.instagram.substring(
                          1
                        )}`}
                        className="text-lg text-gray-700 font-semibold flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="w-5 h-5 text-red-500" />
                        {session.instagram}
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium ">{session.role}</p>
                  </div>

                  <div className="flex flex-col items-center md:items-end justify-between mt-4 md:mt-0">
                    <h2 className="text-gray-600 text-lg md:text-xl flex items-center gap-1">
                      <MdMoreTime className="w-5 h-5 text-red-500" />
                      {session.time}
                    </h2>
                    <h3 className="text-md text-gray-500 flex items-center gap-1">
                      <IoLocationSharp className="w-5 h-5 text-red-500" />
                      {session.location}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
