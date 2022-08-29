import "./projectsListing.css";

const ProjectsListing = ({ projectsList }) => {
    return (
        <div className="mp_projectsListing-container">
            <h4 className="mp_font2">
                Showing {projectsList.length} projects :-)
            </h4>
            <div className="mp_productCardsListing-container mp_fc">
                {
                    projectsList.map((project, index) =>
                        <div className="mp_project-card" key={index}>
                            <div className="mp_pc-subcontainer1">
                                <div className="mp_pc-subcontainer1-layer"></div>
                                <img src={project.img} alt="project img" />
                            </div>
                            <div className="mp_pc-subcontainer2">
                                <div className="mp_pc_subcontainer21">
                                    <div className="mp_pc_subcontainer211 mp-vertically-fc mp_font2">
                                        <h4>{project.title}</h4>
                                        <p>{project.date}</p>
                                    </div>
                                    <div className="mp_pc-subcontainer212 mp-vertically-fc mp_font2">
                                        {
                                            project.techStack.split(",").map((tech, index) =>
                                                <span key={index}>
                                                    {tech}
                                                </span>
                                            )
                                        }
                                    </div>
                                    <p className="mp_pc-subcontainer213 mp_font2">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mp_pc-subcontainer22 mp-vertically-fc">
                                    <a rel="noreferrer" href={project.preview} target="_blank">
                                        <button>Preview</button>
                                    </a>
                                    <a rel="noreferrer" href={project.code} target="_blank">
                                        <button>View Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export { ProjectsListing };