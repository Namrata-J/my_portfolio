import "./projects.css";
import { useLocation } from "react-router-dom";
import { Header, Footer, ProjectsListing } from "../../components/";
import { macroProjectsList, miniProjectsList, portfoliosList } from "../../constants/projectsList";

const ProjectsPage = () => {

    const location = useLocation();

    const projectTitle = location?.state?.projectCategory;

    const allProjects = [...macroProjectsList, ...miniProjectsList, ...portfoliosList];

    return (
        <div className="mp_projects-page mp-page">
            <Header />
            <div className="mp_projects-content-section mp-page-content-section">
                <ProjectsListing
                    projectsList={
                        projectTitle === "Macro Projects" ?
                            macroProjectsList :
                            projectTitle === "Mini Projects" ?
                                miniProjectsList :
                                projectTitle === "Portfolios" ?
                                    portfoliosList :
                                    allProjects
                    } />
                <Footer />
            </div>
        </div>
    );
}

export { ProjectsPage };