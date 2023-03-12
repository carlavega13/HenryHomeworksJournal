import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)



  }
  render () {
    return <div>
 {this.props.animals.map((animal)=>{
  return  ( <div>
             <h5>{animal.name}</h5>
             <img width="300px" src={animal.image} alt={animal.name} />
              <span>{animal.specie}</span>
             </div>)
 })}
    </div>
  }
}
 