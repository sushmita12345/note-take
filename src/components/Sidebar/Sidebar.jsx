import {useState} from 'react';
import "./Sidebar.css";
import {MdiHomeOutline, MdiLabelOutline, MdiArchiveOutline, MdiTrashCanOutline, MdiAccountCircleOutline} from "../../assets/Icon/Icon"
import { Link } from "react-router-dom";
import {useNote} from "../../Context/noteContext"

export function Sidebar() {

    const {noteState, noteDispatch} = useNote();
    const [profileModal, setProfileModal] = useState(false)

    const getToken = JSON.parse(localStorage.getItem("login-token"));
    console.log(getToken)
    const userName = getToken.user.firstName
    console.log(userName)
  
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
                    {userName}
                </span>
            </div>
        </div>
    )
}