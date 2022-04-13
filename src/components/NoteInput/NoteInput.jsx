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
    console.log(data)
    

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
                if(response.status === 200 || response.status === 201){
                    console.log(response.data.notes)
                    noteDispatch({type: "ADD_NOTES", payload: {note: response.data.notes}})
                }
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
                                        setPickColorPalatte({...note, backgroundColor: getColor.hex})
                                    }}

                                />
                            )
                        }

                        <div className="note-icon-container">
                            <button 
                                className="note-add-btn"
                                onClick={() => {
                                    console.log("click")
                                    addNotesHandler();
                                    setNote(() => ({
                                        title: "",
                                        noteContent: "",
                                        backgroundColor: "#FFFFFF",
                                        // timeStamp: date.getTime(),
                                        label: "",
                                    }))
                                    data && setEditCard(false)
                                }}
                                >Add</button>
                        </div>
                    </footer>
                </div>
            </div>
            {/* <div className="note-search-wrapper">
                <input type="text" placeholder="Search" className="note-searchbar"/>
                <MdiMagnify className="note-magnify-icon"/>  
            </div> */}
            
            {/* <div className="note-main-body-container">
                <div className={`${data && "modal"}`}>  
                
                    <div className="new-note-container">
                        <div className="new-note-wrapper">
                            <textarea 
                                className="note-title" 
                                placeholder="Title" 
                                value={note.title}
                                onChange={(e) => setNote(() => ({...note, title: e.target.value}))}
                                >

                            </textarea>
                            <textarea 
                                className="new-note-upper" 
                                placeholder="Add New Note"
                                value={note.noteContent}
                                onChange={(e) => setNote(() => ({...note, noteContent: e.target.value}))}
                                >

                            </textarea>
                        
                            <div className="new-note-lower">
                                <MdiPaletteOutline className="note-color-palatte" onClick={() => setPickColorPalatte(!pickColorPallate)}/>

                                {
                                    pickColorPallate && (
                                        <ChromePicker 
                                            color = {pickColor}
                                            onChange={(getColor) => {
                                                setPickColor(getColor.hex);
                                                setPickColorPalatte({...note, backgroundColor: getColor.hex})
                                            }}

                                        />
                                    )
                                }
                                
                                <div className="note-icon-container">
                                    <button 
                                        className="note-add-btn"
                                        onClick={() => {
                                            console.log("click")
                                            addNotesHandler();
                                            setNote(() => ({
                                                title: "",
                                                noteContent: "",
                                                backgroundColor: "#FFFFFF",
                                                // timeStamp: date.getTime(),
                                                label: "",
                                            }))
                                            data && setEditCard(false)
                                        }}
                                        >Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                </div>
            </div> */}
        </>
        
    )
}