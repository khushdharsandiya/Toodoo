const arr = []

export const myReducer = (state = arr, action) => {

    if (action.type === "ADD") {
        state = [
            ...state,
            action.payload
        ]
    } else if (action.type === "DELETE") {
        state = state.filter((el, i) => i !== action.payload)
    } else if (action.type === "EDIT") {
        state = state.map((el, i) => {
            if (i === action.payload.index) {
                return action.payload.newValue
            }
            return el
        })
    }
    return state
}
