import React from 'react'

export default function Species (props) {

  return (
    <div>
<h2>Species</h2>
{props.species.map((specie)=><button  onClick={()=>props.handleSpecies(specie)}>{specie}</button>
)}
<button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}


