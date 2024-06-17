import { SectionWraper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { ProjectTile } from ".";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const { navigate } = useNavigate();

  return (
    <div id="projects">
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-5 justify-center mx-auto">
          {projects.map((project, index) => (
            <Link
              to="/project_details"
              state={project}
              className="cursor-pointer"
            >
              <ProjectTile
                key={`project-${index}`}
                index={index}
                {...project}
              />
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};

export default SectionWraper(Works, "works");
