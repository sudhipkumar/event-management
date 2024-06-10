import CreateEvent from "@/components/CreateEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const CreateEventPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (error || isLoading) return null;

  const handleBack = () => {
    router.back();
  };

  return (
    <article>
      {user ? (
        <>
          <Navbar />
          <CreateEvent />
          <Footer />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h1 className="text-2xl font-semibold text-center">
            You must be logged in to view this page.
          </h1>
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-xl text-gray-500"
          >
            <IoMdArrowRoundBack className="w-8 h-8 text-red-500" />
            Back
          </button>
        </div>
      )}
    </article>
  );
};

export default CreateEventPage;
