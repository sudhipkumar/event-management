import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    ticketPrice: "",
    privacy: "public",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/events", eventDetails);
      Swal.fire({
        title: "Success",
        text: "Event created successfully",
        icon: "success",
      });

      setEventDetails({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        ticketPrice: "",
        privacy: "public",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  console.log("eventDetails ==>", eventDetails);

  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="main-container space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Create New Event</h2>
          <p className="text-gray-500 tracking-wider">
            Fill in the details below to create a new event.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
              htmlFor="title"
            >
              Event Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={eventDetails?.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
              htmlFor="description"
            >
              Event Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={eventDetails?.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-xl"
              placeholder="Enter event description"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
                htmlFor="date"
              >
                Event Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={eventDetails?.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
                htmlFor="time"
              >
                Event Time*
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={eventDetails?.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
              htmlFor="location"
            >
              Event Location*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={eventDetails?.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
              htmlFor="ticketPrice"
            >
              Ticket Price*
            </label>
            <input
              type="number"
              id="ticketPrice"
              name="ticketPrice"
              value={eventDetails?.ticketPrice}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-bold tracking-wider text-xl"
              htmlFor="privacy"
            >
              Event Privacy
            </label>
            <select
              id="privacy"
              name="privacy"
              value={eventDetails?.privacy}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <button
            type="submit"
            className="uppercase tracking-widest w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Create Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
