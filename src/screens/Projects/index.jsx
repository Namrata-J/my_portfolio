import "./styles.css";
import { useLocation } from "react-router-dom";
import { ProjectsListing } from "../../components/";
import {
  macroProjectsList,
  miniProjectsList,
  portfoliosList,
} from "../../constants/projectsList";

export const ProjectsPage = () => {
  const location = useLocation();

  const projectTitle = location?.state?.projectCategory;

  const allProjects = [
    ...macroProjectsList,
    ...miniProjectsList,
    ...portfoliosList,
  ];

  return (
    <div className="mp_projects-page mp-page">
      <div className="mp_projects-content-section mp-page-content-section">
        <ProjectsListing
          projectsList={
            projectTitle === "Macro Projects"
              ? macroProjectsList
              : projectTitle === "Mini Projects"
              ? miniProjectsList
              : projectTitle === "Portfolios"
              ? portfoliosList
              : allProjects
          }
        />
      </div>
    </div>
  );
};
