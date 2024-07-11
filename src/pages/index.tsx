import About from "@/components/About";
import AllSavedEvents from "@/components/allSavedEvents";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScheduleCard from "@/components/ScheduleCard";
import TicketPricing from "@/components/TicketPricing";
import { useUser } from "@auth0/nextjs-auth0/client";

const AllPages = () => {
  const { user, error, isLoading } = useUser();
  if (error || isLoading) return null;

  return (
    <article>
      <Navbar />
      <Hero />
      {user && (
        <section>
          <AllSavedEvents />
          <ScheduleCard />
          <TicketPricing />
          <About />
        </section>
      )}
      <Footer />
    </article>
  );
};

export default AllPages;
