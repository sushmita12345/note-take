import {MdiPaletteOutline} from "../../assets/Icon/Icon";
import axios from "axios";
import { useAuth } from "../../Context/authContext";
import { useNote } from "../../Context/noteContext";
import { useState } from "react";
import { ChromePicker } from "react-color";
import "./NoteInput.css";

export function NoteInput({data, setEditCard}) {

    const [pickColorPallate, setPickColorPalatte] = useState(false);
    const [pickColor, setPickColor] = useState();
    const { noteDispatch} = useNote();
    const {token} = useAuth();

    // const date = new Date();

    const noteInitialState = {
        title: "",
        noteContent: "",
        backgroundColor: "#FFFFFF",
        // timeStamp: date.getTime(),
        label: "",

    };

    const [note, setNote] = useState(data ? data : noteInitialState)
    const addNotesHandler = async() => {
        try {
            let response = null;
            if(data) {
                response = await axios.post(`/api/notes/${data._id}`,{note},
                {
                    headers: {
                        authorization: token,
                    }
                }
                )

            } else {
                response = await axios.post("/api/notes", {note}, 
                {
                    headers: {
                        authorization: token,
                    }
                }
                )
                
            }
            if(response.status === 200 || response.status === 201){
                noteDispatch({type: "ADD_NOTES", payload: {note: response.data.notes}})
            }
        }catch(err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <div className={`${data && "modal"}`}> 
                <div className="note-take-container">
                    <header className="note-take-header">
                        <textarea 
                            className="note-title" 
                            placeholder="Title" 
                            value={note.title}
                            onChange={(e) => setNote(() => ({...note, title: e.target.value}))}
                            >

                        </textarea>
                    </header>
                    <section className="note-take-section">
                        <textarea 
                            className="new-note-upper" 
                            placeholder="Add New Note"
                            value={note.noteContent}
                            onChange={(e) => setNote(() => ({...note, noteContent: e.target.value}))}
                            >

                        </textarea>
                    </section>
                    <footer className="note-take-footer">
                        <MdiPaletteOutline className="note-color-palatte" onClick={() => setPickColorPalatte(!pickColorPallate)}/>

                        {
                            pickColorPallate && (
                                <ChromePicker 
                                    className="note-take-palatte"
                                    color = {pickColor}
                                    onChange={(getColor) => {
                                        setPickColor(getColor.hex);
                                        setNote(() => ({...note, backgroundColor: getColor.hex}));
                                    }}

                                />
                            )
                        }

                        <div className="note-icon-container">
                            <button 
                                className="note-add-btn"
                                onClick={() => {
                                    addNotesHandler();
                                    setNote(() => ({
                                        title: "",
                                        noteContent: "",
                                        backgroundColor: note.backgroundColor,
                                        // timeStamp: date.getTime(),
                                        label: "",
                                    }));
                                    data && setEditCard(false);
                                }}
                                >Add
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
            {/* <div className="note-search-wrapper">
                <input type="text" placeholder="Search" className="note-searchbar"/>
                <MdiMagnify className="note-magnify-icon"/>  
            </div> */}
        </>
        
    )
}