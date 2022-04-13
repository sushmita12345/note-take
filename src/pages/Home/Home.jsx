import "./Home.css";
// import {MdiLabelOutline, MdiArchiveOutline, MdiTrashCanOutline} from "../../assets/Icon/Icon"
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { NoteInput } from "../../components/NoteInput/NoteInput";
import { SaveNote } from "../../components/SaveNote/SaveNote";
import { useNote } from "../../Context/noteContext"; 

export function Home() {

    const {noteState} = useNote();
    const {notes} = noteState
    // console.log(notes)
    return (
        <>
            <div className="note-main-container">
                
                <Sidebar />
                <div className="note-take-wrapper">
                    <NoteInput />                  
                    <div className="added-note-container">                   
                        {notes?.map((note) => (
                            
                        <SaveNote noteDetails={note} key={note._id}/>
                            
                        ))}
                    </div>
                   
                </div>
               
                       
            </div>
            {/* <div> */}
                {/* <div className="added-note-container">                   
                    {notes.map((note) => {
                        
                    return <SaveNote noteDetails={note} key={note._id}/>
                        
                    })}
                </div> */}
            {/* </div> */}
        </>
    )
}