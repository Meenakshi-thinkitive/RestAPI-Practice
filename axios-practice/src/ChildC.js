import React from 'react'
import { data, data1 } from './App'
import { useContext } from 'react'

function ChildC() {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <>
      {/* <data.Consumer>{
            (name) => {
                return (
                    <h1> My name is {name}</h1>
                )
            }
        }
      </data.Consumer> */}
        <h2>Hi, My name is {name} and my gender is {gender}</h2>
      
    </>
  )
}

export default ChildC
