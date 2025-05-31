const team = () => {

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
        const [activeIndex, setActiveIndex] = useState(0);
      
  return (
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
  )
}

export default team