import { Sidebar } from "../../components/Sidebar/Sidebar";
import {useNote} from "../../Context/noteContext";
import {MdiTrashCanOutline} from "../../assets/Icon/Icon";

export function Trash() {

    const {noteState, noteDispatch} = useNote();

    const removeNote = (id) => {
        const trashData = noteState.trash.filter((note) => note._id !== id)
        noteDispatch({type: "DELETE", payload: trashData})
    }
    return (

        <div>
            <div className="note-main-container">    
                <Sidebar />
                <div className="note-take-wrapper">
                    {noteState.trash.length > 0 ? (
                        <div className="all-note-take">
                            <div className="added-note-container"> 
                                {
                                    noteState.trash.map((trashNote) => {
                                        return (
                                            <div className="note-wrapper-container" key={trashNote._id}>
                                                <div className="added-note-wrapper" style={{backgroundColor: trashNote.backgroundColor}}>
                                                    <div>
                                                        <h1>{trashNote.title}</h1>
                                                        <p>{trashNote.noteContent}</p>
                                                    </div>
                                                    <div className="new-note-lower">
                                                            <span>11-04-2022</span>
                                                        <div className="note-icon-container">
                                                            <MdiTrashCanOutline className="note-text-icon" onClick={() => removeNote(trashNote._id)}/>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    ):(
                        <h1>Trash is Empty!</h1>
                    )}
                </div>
            </div>
        </div>
    )
}