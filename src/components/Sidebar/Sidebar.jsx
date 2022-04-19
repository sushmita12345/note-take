import "./Sidebar.css";
import {MdiHomeOutline, MdiLabelOutline, MdiArchiveOutline, MdiTrashCanOutline, MdiAccountCircleOutline} from "../../assets/Icon/Icon"
import { Link } from "react-router-dom";


export function Sidebar() {
    return (
        <div className="note-sidebar-container">
            <Link to={"/home"} className="sidebar-link"><div className="note-sidebar-wrapper">
                <MdiHomeOutline className="note-sidebar-icon"/>
                <span>
                    Home
                </span>
            </div></Link>
            <div className="note-sidebar-wrapper">
                <MdiLabelOutline className="note-sidebar-icon"/>
                <span>
                    Label
                </span>
            </div>
            <Link to={"/archive"} className="sidebar-link"><div className="note-sidebar-wrapper">
                <MdiArchiveOutline className="note-sidebar-icon"/>
                <span>
                    Archive
                </span>
            </div></Link>
            <Link to={"/trash"} className="sidebar-link"><div className="note-sidebar-wrapper">
                <MdiTrashCanOutline className="note-sidebar-icon"/>
                <span>
                    Trash
                </span>
            </div></Link>
            <div className="note-sidebar-wrapper">
                <MdiAccountCircleOutline className="note-sidebar-icon"/>
                <span>
                    Profile
                </span>
            </div>
        </div>
    )
}