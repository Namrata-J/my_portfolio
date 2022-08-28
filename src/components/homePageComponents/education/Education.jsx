import "./education.css";
import { educationList } from "../../../constants/education";

const Education = () => {
    return (
        <div className="mp_education-section mp_homePage-sub-section mp_font1">
            <h4 className="mp_homePage-section-heading">Bio</h4>
            <div className="ms_education-pursued mp_fc mp_font2">
                <div className="ms_ep-inner-container mp_fc">
                    {
                        educationList.map((education, index) =>
                            <div className="mp_education">
                                <h4>{education.year}</h4>
                                <p>{education.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export { Education };