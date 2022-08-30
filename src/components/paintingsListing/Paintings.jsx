import "./paintings.css";
import { paintingsList } from "../../constants/paintingsList";

const PaintingsListing = () => {
    return (
        <div className="mp_paintings-listing-container">
            <h4 className="mp_font2">
                I have showcased all my artworks here
                <a
                    rel="noreferrer"
                    href="https://www.instagram.com/artwithease/"
                    target="_blank">
                    <button className="mp_font2">Join</button>
                </a>
                <div className="mp_paintings-card-container mp_fc">
                    {
                        paintingsList.map((painting, index) =>
                            <a
                                rel="noreferrer"
                                key={index}
                                href={painting.link}
                                target="_blank">
                                <div className="mp_painting-card">
                                    <img src={painting.img} alt="painting" />
                                </div>
                            </a>
                        )
                    }
                </div>
            </h4>
        </div>
    );
}

export { PaintingsListing };