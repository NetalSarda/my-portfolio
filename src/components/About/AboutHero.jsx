import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-auto lg:h-[60vh] sm:my-12 gap-4 flex flex-col-reverse lg:flex-row p-4 sm:p-8">
      <div className="flex-1 flex flex-col justify-center h-full sm:px-8 sm:py-4 sm:space-y-4">
        <h1 className="text-5xl"><b>Netal Sarda</b></h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem voluptas quaerat obcaecati at reiciendis consectetur
          ipsum odio omnis maxime?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem voluptas quaerat obcaecati at reiciendis consectetur
          ipsum odio omnis maxime?
        </p>
        <div className="flex sm:w-3/4 w-full py-4 justify-evenly gap-4">
          <button className="p-2 bg-[var(--background)] rounded-lg flex-1">
            Download Resume
          </button>
          <button className="p-2 bg-[var(--background)] rounded-lg flex-1">
            Get in touch
          </button>
        </div>
      </div>
      <div className="p-8 flex-1 h-full">
        {/* Image */}
        <img
          className="h-full w-full object-cover rounded-3xl overflow-hidden"
          src="/images/profile-photo.jpg"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default AboutHero;
