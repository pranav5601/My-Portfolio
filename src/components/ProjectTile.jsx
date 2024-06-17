import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectTile = ({
  index,
  name,
  description,
  tags,
  brief_description,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-3xl xs:w-[320px] w-auto h-[480px] object-cover hover-zoom-transition">
        <div className="relative w-auto h-[230px]">
          <img
            src={image}
            alt="project_image"
            className={` xs:w-full h-full object-cover rounded-2xl`}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <div className="relative group inline-block justify-center">
                <img
                  src={github}
                  alt="source code"
                  className="relative w-1/2 h-1/2 object-contain  translate-x-1/2"
                />
                <div className="absolute z-10  bottom-full mb-2 w-auto p-2 bg-primary text-white text-sm rounded hidden group-hover:block transition-opacity duration-300">
                  Open GitHub repositories.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-4 text-ellipsis overflow-hidden">
            {brief_description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTile;
