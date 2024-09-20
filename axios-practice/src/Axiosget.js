import React from 'react'
import './Axiosget'
import { useState, useEffect } from 'react';

function Axiosget() {
  const [data, setData] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp)=> {
        // console.log(resp);
        setData(resp);
      })
    })
  }, [])
  console.log(data);
  return (
    <div>
      <h2>API Get Data</h2>
      <table border='1px'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        {
          data.map((item) => 
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default Axiosget
