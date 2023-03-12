import React from 'react'
import s from './Contact.modules.css'


// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export  function validate(inputs) {
  const errors = {};
  //!    VALIDACION DE NOMBRE VACIO
  if (!inputs.name.trim()) {
    errors.name = "Se requiere un nombre";
  }

  //!    VALIDACION DE EMAIL
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  //!    VALIDACION DE MENSAJE
  if (!inputs.message.trim()) {
    errors.message = "Se requiere un mensaje";
  }

  return errors;
}

export default function Contact () {
  const [inputs,setInputs]= React.useState({
    name:"",
    email:"",
    message:""
  })
  const [errors,setErrors]=React.useState({
    name:"",
    email:"",
    message:""
  })
   
  //!    HANDLE SUBMIT
  const handleSubmit=(event)=>{
  event.preventDefault()

  if(!Object.keys(errors).length){
    alert("Datos completos")
    setErrors({
      name:"",
      email:"",
      message:""
    })
    setInputs({
      name:"",
      email:"",
      message:""
    })
  }else{
    alert("Debe llenar todos los campos")
  }


  }



  //!   HANDLE CHANGE
  const handleChange=(event)=>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  
  }

  return (<div>
    <form onSubmit={handleSubmit}>
<label htmlFor='name'>Nombre:</label>
<input className={errors.name&& "warning"}  onChange={handleChange} name='name' placeholder='Escribe tu nombre...' type="text" value={inputs.name}/>  

<p>{errors.name?errors.name:""}</p>

<label htmlFor='email'>Correo Electrónico:</label>
<input  className={errors.email&& "warning"} onChange={handleChange} name='email' placeholder='Escribe tu email...' type="text" value={inputs.email}/>  

<p>{errors.email?errors.email:""}</p>

<label htmlFor='message'>Mensaje:</label>
 <textarea  className={errors. message && "warning"} onChange={handleChange} name='message' placeholder='Escribe tu mensaje...' type="text" value={inputs.message}/>

<p>{errors.message?errors.message:""}</p>

<button type='submit'>Enviar</button> 

    </form>
  </div>)
}
