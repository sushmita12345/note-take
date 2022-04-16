export function noteReducer(state, action) {
    switch(action.type){
        case "ADD_NOTES":
            return {...state, notes: [...action.payload.note]
        }

        case "ADD_ARCHIVES":
            return {...state, archive: [...action.payload.archive]
        }

        case "TRASH":
            return {...state, trash: [...state.trash, action.payload]
        }

        case "DELETE":
            return {...state, trash: action.payload}

        default:
            return state;
    }

}