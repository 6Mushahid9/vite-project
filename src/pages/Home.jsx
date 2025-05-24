import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const coursesData = [
    {
      name: "Safety Management",
      description:
        "Implement effective safety protocols and minimize workplace risks with expert-led strategies.",
    },
    {
      name: "First Aid & CPR",
      description:
        "Learn critical first aid and CPR skills to confidently manage workplace emergencies.",
    },
    {
      name: "Workplace Hazard Analysis",
      description:
        "Identify, assess, and control potential hazards in diverse work environments.",
    },
    {
      name: "Fire Safety",
      description:
        "Master emergency response and fire prevention techniques for safer operations.",
    },
    {
      name: "Risk Assessment & Prevention",
      description:
        "Develop risk evaluation skills and create prevention plans to foster a safety-first culture.",
    },
  ];

  const teamMembers = [
    {
      name: "Ayesha Khan",
      position: "Founder & Director",
      image: "/person1.jpeg",
    },
    {
      name: "Rahul Mehta",
      position: "Training Coordinator",
      image: "/person2.jpeg",
    },
    {
      name: "Fatima Noor",
      position: "Safety Expert",
      image: "/person3.jpeg",
    },
    {
      name: "Imran Shaikh",
      position: "Compliance Officer",
      image: "/person4.jpeg",
    },
    {
      name: "Neha Kapoor",
      position: "Operations Head",
      image: "/person5.jpeg",
    },
  ];

  const images = [
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    "/gallery2.jpeg",
    "/gallery4.jpeg",
    "/gallery1.jpeg",
  ];

  const containerRef = useRef(null);

  const getVisibleCount = () => (window.innerWidth >= 1024 ? 5 : 3);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const visibleCount = getVisibleCount();
    const scrollAmount = container.offsetWidth / visibleCount;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const container = sliderRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section
        className="w-full bg-center bg-cover h-4/5 min-h-3/4 flex items-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        <div className="w-full bg-white/10 backdrop-blur-xs py-20">
          <div className="max-w-[80%] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Aim Institute of Safety and Health
            </h1>
            <p className="text-lg md:text-xl text-white mb-6">
              We connect people with purpose. Join us in creating something
              meaningful.
            </p>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition">
              Connect Now
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[80%] mx-auto flex justify-between flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:text-left">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-4">
              Empowering Safer Workplaces
            </h2>
            <p className="text-justify text-lg text-gray-700">
              Our company specializes in delivering high-impact safety training
              programs to ensure every worker returns home safe. Through
              expert-led sessions, practical modules, and a commitment to
              compliance, we help businesses create a culture of safety and
              responsibility. Our company specializes in delivering high-impact
              safety training programs to ensure every worker returns home safe.
              Through expert-led sessions, practical modules, and a commitment
              to compliance, we help businesses create a culture of safety and
              responsibility.
            </p>
          </div>
          {/* image */}
          <div className="w-full md:w-2/6">
            <img
              src="/safety-training.jpg"
              alt="Safety Training"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-[80%] bg-gray-500 mx-auto rounded-2xl"></div>

      {/* Founder */}
      <section className="w-full bg-white py-16">
        <h2 className="max-w-[80%] mx-auto mb-5 text-3xl md:text-4xl font-bold text-black text-center">
          Message from Director
        </h2>
        <div className="max-w-[80%] md:h-2/3 mx-auto flex justify-between flex-col md:flex-row items-center gap-10">
          {/* Director Image */}
          <div className="md:w-1/4">
            <img
              src="/director.webp"
              alt="Director"
              className="rounded-xl shadow-md"
            />
          </div>
          {/* Message Content */}
          <div className="md:w-3/4 text-justify md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              At our core, we believe that safety isn't just a practice—it's a
              mindset. Our mission has always been to educate, empower, and
              protect the workforce. Every session we deliver brings us closer
              to a future where accidents are preventable and awareness is
              universal. Thank you for trusting us with your safety journey. At
              our core, we believe that safety isn't just a practice—it's a
              mindset. Our mission has always been to educate, empower, and
              protect the workforce. Every session we deliver brings us closer
              to a future where accidents are preventable and awareness is
              universal. Thank you for trusting us with your safety journey. At
              our core, we believe that safety isn't just a practice—it's a
              mindset. Our mission has always been to educate, empower, and
              protect the workforce. Every session we deliver brings us closer
              to a future where accidents are preventable and awareness is
              universal. Thank you for trusting us with your safety journey.
            </p>
          </div>
        </div>
      </section>

      <div className="h-0.5 max-w-[80%] bg-gray-500 mx-auto rounded-2xl"></div>

      {/* Team */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[80%] mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-black mb-12">
            Meet Our <span className="text-green-600">Team</span>
          </h2>
          {/* Team Members Grid */}
          {/* Mobile Carousel */}
          <div
            ref={sliderRef}
            className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth scrollbar-hide"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="snap-center shrink-0 w-full px-6">
                <div className="flex flex-col items-center text-center bg-white p-4 rounded-xl shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-green-500 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-green-700">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="lg:hidden flex justify-center mt-6 gap-3">
            {teamMembers.map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full ${
                  i === activeIndex ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Grid for large screens */}
          <div className="hidden lg:grid grid-cols-5 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="...">
                <div className="flex flex-col items-center text-center bg-white p-4 rounded-xl shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-green-500 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-green-700">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* courses */}
      <section className="w-full py-20 bg-green-800 rounded-t-2xl">
        <div className="max-w-[80%] mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Courses We <span className="text-amber-300">Provide</span>
          </h2>
          <p className="mt-4 text-gray-100 max-w-xl mx-auto">
            Our training programs empower individuals and teams with the
            knowledge to ensure safety in every situation.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[80%] mx-auto">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
              <div className="mt-6">
                <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full bg-white py-10 my-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-black mb-10">
      Picture <span className="text-green-600">Gallery</span>
    </h2>

    <div className="relative">
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start transition-transform duration-300 px-2"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="rounded-xl shadow-lg object-cover h-48
                w-[88vw] sm:w-[75vw] md:w-[33.33vw] lg:w-[20vw]
                mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Left Button - only on laptops */}
      <button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 p-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        aria-label="Scroll Left"
        type="button"
      >
        <FaArrowLeft size={22} />
      </button>

      {/* Right Button - only on laptops */}
      <button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800 p-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        aria-label="Scroll Right"
        type="button"
      >
        <FaArrowRight size={22} />
      </button>
    </div>
  </div>

  {/* Inline style to hide scrollbar */}
  <style>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</section>



      <Footer />
    </div>
  );
};

export default Home;
