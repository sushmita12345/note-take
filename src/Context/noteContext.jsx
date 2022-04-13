import { useContext, createContext, useReducer, useEffect} from "react";
import { noteReducer } from "../Reducer/noteReducer";
import { useAuth } from "./authContext";

const NoteContext = createContext();

const NoteProvider = ({children}) => {

    const [noteState, noteDispatch] = useReducer(noteReducer, {
        notes: [],
        archive: [],
        trash: [],
        date: ""
    })
    const {token, user} = useAuth();

    useEffect(() => {
        if(!token) {
            noteDispatch({type: "ADD_NOTES", payload:{note:[]}})
        }
        if(token) {
            noteDispatch({type: "ADD_NOTES", payload:{note:user.notes}})
            noteDispatch({type:"ADD_ARCHIVE", payload:{archive:user.archives}})
        }
    },[token, user]);

    return (
        <NoteContext.Provider value={{noteState, noteDispatch}}>
            {children}
        </NoteContext.Provider>
    )

}

const useNote = () => useContext(NoteContext)

export {useNote, NoteProvider}
