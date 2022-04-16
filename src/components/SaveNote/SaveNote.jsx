import {MdiLabelOutline, MdiArchiveOutline, MdiTrashCanOutline} from "../../assets/Icon/Icon";
// import { useNote } from "../../Context/noteContext";
// import { useAuth } from "../../Context/authContext";
// import axios from "axios";
import { useState } from "react";
import { NoteInput } from "../NoteInput/NoteInput";

export function SaveNote({noteDetails}) {
    const {title, noteContent, backgroundColor} = noteDetails 

    // const {noteState, noteDispatch} = useNote();
    // const {token} = useAuth();
    const [editCard, setEditCard] = useState()
    console.log(noteDetails)

    function editCardHandler() {
        setEditCard(true)
    }

    // const deleteNote = async() => {
    //     try {
    //         const res = await axios.delete(`/api/notes/${noteDetails._id}`,{
    //             header: {
    //                 authorization: token,
    //             }
    //         }
    //         )
    //         if(res.status === 200 || res.status === 201) {
    //             const deleteNoteData = noteState.notes.filter(
    //                 (item) => item._id === noteDetails._id
    //             )[0];
    //             noteDispatch({type: "TRASH", payload: deleteNoteData})
    //             noteDispatch({type: "ADD_NOTES", payload: {note: res.data.notes}})
    //         }
    //     } catch(err){
    //         console.error(err.message)
    //     }
    // }


    return (

        <>
            {editCard ? (
                <NoteInput data={noteDetails} setEditCard={setEditCard}/>
            ) : (
                <div className="note-wrapper-container">
                    <div className="added-note-wrapper" style={{backgroundColor: backgroundColor}}>
                        <div>
                            <h1>{title}</h1>
                            <p>{noteContent}</p>
                        </div>
                        <div className="new-note-lower">
                                <span>11-04-2022</span>
                            <div className="note-icon-container">
                                <button className="note-edit-btn" onClick={editCardHandler}>Edit</button>
                                <MdiLabelOutline className="note-text-icon"/>
                                <MdiArchiveOutline className="note-text-icon"/>
                                <MdiTrashCanOutline className="note-text-icon"/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}