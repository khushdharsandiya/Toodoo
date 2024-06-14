// import React, { useState } from 'react'

// import React, { useState } from 'react'

// export default function Api() {
//   const [data, setData] = useState({
//     name: <h1>Call_Me_D.K</h1>,
//     image:"https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2024/03/19094032/sachin-world-cup.webp",
//     gender:"Male",
//     city: <h4>Ahmedabad</h4>
//   })



//   return (
//     <div>

//     </div>
//   )
// }


export default function Abc() {
  const [state, setState] = useState({
    name: <h4>Khush Patel</h4>,
    image: "https://t4.ftcdn.net/jpg/05/76/88/79/360_F_576887930_eAKbG9gP0xa0D8a60KYWxWw6IXOmQqGi.jpg",
    gender: <h5>Male</h5>,
    city: <h5>Ahmedabad</h5>
  })

  const getUserData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((userdata) => {
        console.log(userdata)
        setState({
          name: userdata.results[0].name.first,
          gender: userdata.results[0].gender,
          city: userdata.results[0].location.city,
          image: userdata.results[0].picture.large,

        })
      })
  }
  return (
    <center>
      <div>
        <div style={{ width: "35%" }}>
          <img src={state.image} width="100%" height="100%" alt="" />
        </div>
        <div style={{ width: "65%", padding: "10px" }}>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{state.name}</dd>
          <dt>
            <b>City</b>
          </dt>
          <dd>{state.city}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{state.gender}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero deserunt tenetur ipsum at delectus itaque suscipit debitis repellendus hic maiores quidem voluptates, dignissimos beatae saepe eveniet consequatur, minus temporibus vero cum aspernatur. Assumenda distinctio, vero est laborum voluptatibus dolorem a placeat, eos, culpa sit sed expedita aspernatur natus tempore!</h6>
          </dd>
          <dt>
            <button style={{ "background": "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)", color: "black", "border": "4px solid black", "border-radius": "30px", "width": "305px" }} onClick={getUserData}> Random User  </button>
          </dt>
        </div>
      </div>
    </center>
  )
}