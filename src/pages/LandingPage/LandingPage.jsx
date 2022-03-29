import "./LandingPage.css";
import logo from "../../assets/Image/LogoImg/HIFI.png";
import mainImg from "../../assets/Image/LandingPage/main-img.png"

export function LandingPage() {
    return (
        <div className="note-land-container">
            {/* <div className="note-wrapper"> */}
                <div className="note-land-content-section">
                    <div className="note-content-container">
                        <div className="note-logo-container">
                            <img className="note-logo-img" src={logo} alt="logo" />
                        </div>
                        <div className="note-text-container">
                            <div className="note-text">
                                <h2 className="note-modern-clr">Meet your modern</h2>
                                <h2 className="note-take-clr">Note Taking App</h2>
                                <p className="">Manage your daily tasks and workflow in a mordern way and boost your efficiency without any efforts.</p>
                            </div>
                            
                        </div>
                        <div className="note-join-container">
                            <button className="note-join-btn">Join Now</button>
                            <p>Already have an account?</p>
                        </div>
                    </div>
                </div>
                <div className="note-land-img-section">
                    <div className="note-main-img-container">
                        <img className="note-main-img" src={mainImg} alt="main" />
                    </div>
                </div>
            {/* </div> */}
            
        </div>
    )
}