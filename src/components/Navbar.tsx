import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowBackOutline, IoTicketOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const menuItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "#about",
  },
  {
    id: 3,
    title: "Discussion",
    path: "/discussion",
  },
  {
    id: 4,
    title: "Contacts",
    path: "/contact",
  },
  {
    id: 5,
    title: "Create Event",
    path: "/create-event",
  },
];

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const [amount, setAmount] = useState(631); // example amount

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      if (!window.Razorpay) {
        console.error("Razorpay SDK not loaded.");
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please try again later.");
      return;
    }

    const res = await fetch("/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
      amount: data.amount,
      currency: "INR",
      name: "Event Management Ticket",
      description: "Ticket Purchase",
      order_id: data.id,
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verifyPayment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.message === "Payment verified successfully") {
          Swal.fire("Success", "Payment successful!", "success");
          // alert("Payment successful!");
        } else {
          Swal.fire("Error", "Payment verification failed.", "error");
          // alert("Payment verification failed.");
        }
      },
      prefill: {
        name: "Mr Sudhip Kumar",
        email: "hypertech708@gmail.com",
        contact: "9337102708",
      },
      notes: {
        address: "Keep Your Address Secret !!!",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black/70 shadow-lg">
      <div className="main-container py-5 flex items-center gap-10">
        <div className="flex items-center">
          <div className="md:hidden mr-4">
            <button
              onClick={toggleMenu}
              className={`block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none ${
                isOpen ? "text-gray-900" : ""
              }`}
            >
              <svg
                className="h-8 w-8 transition-transform transform"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          <Link href="/" passHref>
            <div className="text-3xl font-bold cursor-pointer md:ml-4">
              <span className="text-black">Hype</span>
              <span className="text-red-500">Show</span>
            </div>
          </Link>
        </div>

        <ul
          className={`uppercase md:flex md:items-center md:space-x-5 text-center md:text-left fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:bg-transparent md:flex-row md:space-x-0 md:space-y-0 md:mt-0 md:items-center md:w-auto md:h-auto md:flex-1 md:relative`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <p className="block py-4 md:px-4 text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
          <div>
            {(user && (
              <Link
                href="/api/auth/logout"
                className="block py-4 md:px-4 text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300"
              >
                Logout
              </Link>
            )) || (
              <Link
                href="/api/auth/login"
                className="block py-4 md:px-4 text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>

          <li className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <IoArrowBackOutline />
            </button>
          </li>
        </ul>
        <button
          className="hidden md:flex items-center gap-2 shadow-xl px-7 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-red-400 to-red-600 text-white uppercase duration-100 ease-in transition hover:from-blue-600 hover:to-blue-400"
          onClick={handlePayment}
        >
          <IoTicketOutline className="text-xl" />
          Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
