import "./Home.css"; 
import { Sidebar, NoteInput, SaveNote } from "../../components/index";
import {useNote} from "../../Context/noteContext";

export function Home() {

    const {noteState} = useNote();
    const {notes} = noteState
    return (
        <>
            <div className="note-main-container">    
                <Sidebar />
                <div className="note-take-wrapper">
                    <NoteInput />  
                    <div className="all-note-take">
                        <div className="added-note-container">                   
                            {notes?.map((note) => (
                            
                            <SaveNote noteDetails={note} key={note._id}/>
                            
                            ))}
                        </div>
                    </div>                 
                </div>        
            </div>
        </>
    )
}