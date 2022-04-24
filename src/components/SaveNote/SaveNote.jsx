import {MdiArchiveOutline, MdiTrashCanOutline, MdiSquareEditOutline} from "../../assets/Icon/Icon";
import { useNote } from "../../Context/noteContext";
import { useAuth } from "../../Context/authContext";
import axios from "axios";
import { useState } from "react";
import { NoteInput } from "../NoteInput/NoteInput";
import "./SaveNote.css";


export function SaveNote({noteDetails}) {
    const {title, createdDate, noteContent, backgroundColor, label} = noteDetails 

    const {noteState, noteDispatch} = useNote();
    const {token} = useAuth();
    const [editCard, setEditCard] = useState()

    function editCardHandler() {
        setEditCard(true)
    }

    async function archiveNote(){
        try{
            const res= await axios.post(`/api/notes/archives/${noteDetails._id}`, {noteDetails}, {
                headers: {
                    authorization: token,
                }
            }
            )
            if(res.status === 200 || res.status === 201) {
                noteDispatch({type: "ADD_ARCHIVES", payload: {archive: res.data.archives}})
                noteDispatch({type: "ADD_NOTES", payload: {note: res.data.notes}})
        
            }
        } catch(err) {
            console.error(err)
        }
    }

    const deleteNote = async() => {
        try {
            const res = await axios.delete(`/api/notes/${noteDetails._id}`,{
                headers: {
                    authorization: token,
                }
            }
            )
            if(res.status === 200 || res.status === 201) {
                const deleteNoteData = noteState.notes.filter(
                    (item) => item._id === noteDetails._id
                )[0];
                noteDispatch({type: "TRASH", payload: deleteNoteData})
                noteDispatch({type: "ADD_NOTES", payload: {note: res.data.notes}})
            }
        } catch(err){
            console.error(err.message)
        }
    }

    return (

        <>
            {editCard ? (
                <NoteInput data={noteDetails} setEditCard={setEditCard}/>
            ) : (
                <div className="note-wrapper-container">
                    <div className="added-note-wrapper" style={{backgroundColor: backgroundColor}}>
                        <div>
                            <h1>{title}</h1>
                            <p>{label}</p>
                            <p className="saveNote-content">{noteContent}</p>
                        </div>
                        <div className="new-note-lower">
                                <span>{createdDate}</span>
                            <div className="note-icon-container">
                                <MdiSquareEditOutline className="note-text-icon" onClick={editCardHandler}/>
                                <MdiArchiveOutline className="note-text-icon" onClick={archiveNote}/>
                                <MdiTrashCanOutline className="note-text-icon" onClick={deleteNote}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}