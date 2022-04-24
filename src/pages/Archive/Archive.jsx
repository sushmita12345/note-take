import { useNote } from "../../Context/noteContext";
import { useAuth } from "../../Context/authContext";
import axios from "axios";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {MdiRestore, MdiTrashCanOutline} from "../../assets/Icon/Icon";

export function Archive() {
    const {noteState, noteDispatch} = useNote();
    const {token} = useAuth();

    const archiveDataRestore = async(id) => {
        try{
            const res = await axios.post(`/api/archives/restore/${id}`,{}, {
                headers: {
                    authorization: token,
                }
            }
            )
            if(res.status === 200 || res.status === 201){
                noteDispatch({type: "ADD_ARCHIVES", payload: {archive: res.data.archives}});
                noteDispatch({type: "ADD_NOTES", payload: {note: res.data.notes}})
            }
        }catch(err){
            console.error(err)
        }
    }

    const archiveDataDelete = async(id) => {
        const archiveDelete = noteState.archive.filter((noteItem) => noteItem._id === id)[0];
        try{
            const res = await axios.delete(`/api/archives/delete/${id}`,{
                headers: {
                    authorization: token,
                }
            }
            )
            if(res.status === 200 || res.status === 201){
                noteDispatch({type: "ADD_ARCHIVES", payload: {archive: res.data.archives}})
                noteDispatch({type: "TRASH", payload: archiveDelete})
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <div className="note-main-container">    
                <Sidebar />
                <div className="note-take-wrapper">
                    {noteState.archive.length > 0 ? (
                        <div className="all-note-take">
                            <div className="added-note-container"> 
                                {
                                    noteState.archive.map((archiveNote) => {
                                        return (
                                            <div className="note-wrapper-container" key={archiveNote._id}>
                                                <div className="added-note-wrapper" style={{backgroundColor: archiveNote.backgroundColor}}>
                                                    <div>
                                                        <h1>{archiveNote.title}</h1>
                                                        <p>{archiveNote.label}</p>
                                                        <p>{archiveNote.noteContent}</p>
                                                    </div>
                                                    <div className="new-note-lower">
                                                            <span>11-04-2022</span>
                                                        <div className="note-icon-container">
                                                            <MdiRestore className="note-text-icon" onClick={() => archiveDataRestore(archiveNote._id)}/>
                                                            <MdiTrashCanOutline className="note-text-icon" onClick={() => archiveDataDelete(archiveNote._id)}/>
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
                        <h1>Archive is Empty!</h1>
                    )}
                </div>
            </div>
        </div>
    )
}