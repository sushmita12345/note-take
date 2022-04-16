import {MdiHomeOutline, MdiLabelOutline, MdiArchiveOutline, MdiTrashCanOutline, MdiAccountCircleOutline} from "../../assets/Icon/Icon"

export function Sidebar() {
    return (
        <div className="note-sidebar-container">
            <div className="note-sidebar-wrapper">
                <MdiHomeOutline className="note-sidebar-icon"/>
                <span>
                    Home
                </span>
            </div>
            <div className="note-sidebar-wrapper">
                <MdiLabelOutline className="note-sidebar-icon"/>
                <span>
                    Label
                </span>
            </div>
            <div className="note-sidebar-wrapper">
                <MdiArchiveOutline className="note-sidebar-icon"/>
                <span>
                    Archive
                </span>
            </div>
            <div className="note-sidebar-wrapper">
                <MdiTrashCanOutline className="note-sidebar-icon"/>
                <span>
                    Trash
                </span>
            </div>
            <div className="note-sidebar-wrapper">
                <MdiAccountCircleOutline className="note-sidebar-icon"/>
                <span>
                    Profile
                </span>
            </div>
        </div>
    )
}