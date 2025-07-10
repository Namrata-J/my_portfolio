import "./technologies.css";
import { toolsList, technologiesList } from "../../../constants/technologies";

const Technologies = () => {
    return (
        <div className="mp_technologies-section mp_homePage-sub-section mp_font1">
            <h4 className="mp_homePage-section-heading">Technologies</h4>
            <div className="ms_technologies-familier mp_fc">
                {
                    technologiesList.map((tech, index) =>
                        <div key={index} className="mp-vertically-fc mp_font2">
                            {tech.techLogo} {tech.tech}
                        </div>
                    )
                }
            </div>
            <h6 className="mp_homePage-section-subheading">others</h6>
            <div className="ms_technologies-familier mp_fc">
                {
                    toolsList.map((tech, index) =>
                        <div key={index} className="mp-vertically-fc mp_font2">
                            {tech.techLogo} {tech.tech}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export { Technologies };