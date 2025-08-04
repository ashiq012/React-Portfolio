function ProjectCard({ title, main, demoLink, sourceLink, image }) {
  return (
    <div 
    id="Project"
    className="m-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="py-6 px-6 h-48 w-full object-contain bg-[#141827]"
        src={image}
        alt={title || "Project Preview"}
      />
      <div className="px-5 pb-8">
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base mt-2">{main}</p>

        <div className="flex gap-3 mt-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465687]">
              Demo
            </button>
          </a>
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465687]">
              Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;