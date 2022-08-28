import "./projects.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "../../../utils/icons";
import { projectsCategory } from "../../../constants/projectsCategory";

const Projects = () => {
    return (
        <div className="mp_projects-section mp_homePage-sub-section mp_font1">
            <h4 className="mp_homePage-section-heading">Projects</h4>
            <div className="mp_projects-work mp_fc">
                {
                    projectsCategory.map((category, index) =>
                        <div
                            key={index}
                            className="mp_project-category-card">
                            <div className="mp_project-category-card-img-section">
                                <div className="mp_project-category-card-img-layer"></div>
                                <img src={category.img} alt="img" />
                            </div>
                            <div className="mp_project-category-card-content-section">
                                <div>
                                    <p className="mp_pcc-title mp_font2">{category.title}</p>
                                    <p className="mp_pcc-description mp_font2">{category.description}</p>
                                </div>
                                <Link
                                    className="mp-pcc-link mp_font2"
                                    to="/projects">
                                    <span>See All </span>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export { Projects };