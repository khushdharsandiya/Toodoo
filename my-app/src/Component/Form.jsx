import React, { useState } from 'react'

export default function Form() {
    const [formFields, setFormFields] = useState([{ Name: "", Age: "" }])

    const handleFormChange = (event, index) => {
        let data = [...formFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
    }

    const Submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {
            name: '',
            age: ''
        }
        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields]
        data.splice(index, 1)
        setFormFields(data)
    }
    return (
        <div>
            <form onSubmit={Submit}>
                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <input type="text" name='name' placeholder='Name' onChange={event => handleFormChange(event, index)} value={form.name} />
                            <input type="text" age='age' placeholder='Age' onChange={event => handleFormChange(event, index)} value={form.age} />
                            <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}

            </form>

            <button onClick={addFields}>Add More..</button><br/>
            <button onClick={Submit}>Submit</button>
        </div>
    )
}






// import React, { useState } from 'react'

// export default function Form() {
//     // const [state, setState] = useState([])
//     const [state, setState] = useState([{ name: "" }])
//     function Name(e, i) {

//         const field = e.target.name;
//         const temp = [...state];
//         temp[i][field] = e.target.value;
//         setState(temp)
//     }
//     function Addinput() {
//         const values = [...state];
//         values.push({ name: '' });
//         setState(values);
//     }
//     function Remove(i) {
//         const values = [...state];
//         values.splice(i, 1);
//         setState(values);
//     }
//     function Submit(e) {
//         console.log(state)

//     }
//     return (
//         <div>
//             {
//                 state.map((el, i) => {
//                     return <>
//                         <input type="text" onChange={(el) => Name(el, i)} value={state.name} name="name" />
//                         <button onClick={Remove}>remove</button><br />
//                     </>

//                 })
//             }
//             <button onClick={Addinput} >Add input</button>
//             <button onClick={Submit}>Submit</button>
//         </div>
//     )
// }
