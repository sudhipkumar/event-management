import React, { useEffect, useState } from "react";
import SearchEvent from "./SearchEvent";
import { MdManageAccounts, MdMoreTime } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  ticketPrice: string;
  privacy: string;
}

const AllSavedEvents = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log("eventsData====>", eventsData);

  useEffect(() => {
    fetchEvents();
  }, [searchQuery]);

  const fetchEvents = async () => {
    const query = new URLSearchParams();
    if (searchQuery) query.append("query", searchQuery);

    const res = await fetch(`/api/events?${query.toString()}`);
    const data = await res.json();
    if (data.success) {
      setEventsData(data.data);
    } else {
      console.error("Failed to fetch events data");
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="main-container bg-white overflow-hidden">
      <SearchEvent onSearch={handleSearch} />
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 space-y-12">
        <div className="space-y-3 text-center">
          <h1 className="tracking-wide text-black/80 font-bold text-3xl md:text-4xl">
            Our Events
          </h1>
          <p className="tracking-wider font-medium text-black/60 text-md">
            Discover the latest events and join the fun
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-xl border rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-2xl text-center font-semibold mb-2 text-gray-800">
                  {event.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>

                <div className="flex items-center justify-between text-gray-700">
                  <p className="font-bold">
                    <span>Price : </span>
                    {event.ticketPrice}
                  </p>
                  <p>{event.privacy}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <MdManageAccounts className="w-5 h-5 text-red-500" />
                  <p className="text-gray-700">{event.title}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MdMoreTime className="w-5 h-5 text-red-500" />
                  <p className="text-gray-600">{event.time}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <IoLocationSharp className="w-5 h-5 text-red-500" />
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSavedEvents;
