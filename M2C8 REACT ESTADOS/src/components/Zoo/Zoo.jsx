import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const[zoo,setZoo]= React.useState({
      zooName:"",
      animals:[],
      species: [],
      allAnimals:[]

   })
   React.useEffect(()=>{
      fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>{

      return setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })}
   )
   .catch((error) => console.log(error));
   },[])

  const handleInputChange= (event)=>{
setZoo({
   ...zoo,
   zooName: event.target.value
})
   }


   const handleSpecies=(specie)=>{
      console.log(specie);
      return setZoo({
         ...zoo,
         allAnimals:zoo.animals,
         animals: zoo.animals.filter((animal)=>animal.specie===specie)
      })

   }
   const handleAllSpecies=()=>{
return setZoo({
   ...zoo,
   animals: zoo.allAnimals
})
   }
   return (
      <div>
         <label >Zoo Name:</label>
         <input type="text" value={zoo.zooName} onChange={(event)=>handleInputChange(event)} />
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleAllSpecies={handleAllSpecies} handleSpecies={handleSpecies}/>
         <Animals animals={zoo.animals}  />
      </div>
   );
}
