import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full lg:w-3/4 h-auto lg:h-[60vh] mt-4 gap-4 flex flex-col lg:flex-row py-8">
      <div className="w-full  lg:w-3/4 flex flex-col justify-center h-full py-4 space-y-4">
        <h1 className="text-5xl"><b>Netal Sarda</b></h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem voluptas quaerat obcaecati at reiciendis consectetur
          ipsum odio omnis maxime?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem voluptas quaerat obcaecati at reiciendis consectetur
          ipsum odio omnis maxime?
        </p>
        <div className="flex w-2/5 justify-evenly gap-4">
          <button className="p-2 font-semibold text-white bg-[var(--background)] rounded-lg flex-1">
            View Project
          </button>
        
        </div>
        <div className="flex w-fit flex-wrap gap-2 items-center my-4">
          {["react", "node", "next.js", 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
            <p className="px-2 text-sm border border-neutral-700 min-w-12 py-[2px] text-[var(--background)] font-semibold border-[var(--background)] rounded-lg " key={el}>{el}</p>
          ))}
        </div>
      </div>
      <div className="p-4 w-1/3 h-full flex justify-center items-center">
        {/* Image */}
        <img
          className="aspect-square w-full object-cover rounded-3xl overflow-hidden"
          src="/images/profile-photo.jpg"
          alt="profile picture"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

