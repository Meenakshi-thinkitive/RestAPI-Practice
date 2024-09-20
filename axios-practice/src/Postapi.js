import React, { useState } from 'react'

function Postapi() {
    const[name, setName] = useState("");
    const[email, setemail] = useState("");
    const[mobile, setmobile] = useState("");

    function saveData(){
        let data = {name, email, mobile};
        // console.log(data);
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers : {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result)=>{
                console.log("result", result);
            })
        })
    }
  return (
    <div>
      <h2>Post Data</h2>
      <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}/> <br /> <br />
      <input type='text' name='email' value={email} onChange={(e)=> setemail(e.target.value)}/> <br /> <br />
      <input type='number' name='mobile' value={mobile} onChange={(e)=> setmobile(e.target.value)}/> <br /> <br />
      <button type='button' onClick={saveData}>Save New User</button>
    </div>
  )
}

export default Postapi
