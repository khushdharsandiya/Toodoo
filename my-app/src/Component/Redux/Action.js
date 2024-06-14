export const addAction=(payload)=>{
    return{
        type:"ADD",
        payload
    }
}
export const DeleteAction=(payload)=>{
    return{
        type:"DELETE",
        payload
    }
}

export const editItem = (index, newValue) => ({
    type: "EDIT",
    payload: {
        index,
        newValue
    }
})
