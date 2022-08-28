import "./paintings.css";
import { Link } from "react-router-dom";

const Paintings = () => {
    return (
        <div className="mp_paintings-section mp_homePage-sub-section mp_font1">
            <h4 className="mp_homePage-section-heading">Paintings</h4>
            <div className="mp_paintings mp_sub-section mp_fc">
                <p className="mp_font2">
                    In my spare time i do painting and art related stuff as a part of my hobby.
                </p>
                <Link
                    to="/paintings"
                    className="mp_paintings-link mp_sub-section-link">
                    <button className="mp_font2">My Paintings</button>
                </Link>
            </div>
        </div>
    );
}

export { Paintings };